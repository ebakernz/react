var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var notifier = require('node-notifier');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

// Format error messages
var notify = function (error) {
    var message = 'In: ';
    var title = 'Error: ';

    if (error.description) {
        title += error.description;
    }
    else if (error.message) {
        title += error.message;
    }

    if (error.filename) {
        var file = error.filename.split('/');
        message += file[file.length-1];
    }

    if (error.lineNumber) {
        message += "On Line: " + error.lineNumber;
    }

    notifier.notify({title: title, message: message});
};

// CREATE THE BUNDLE
// three modules: watchify, browserify and reactify.
// 
// Browserify lets us require('modules') in the browser by bundling up all our dependencies. It looks at a single JavaScript file (in this case app.jsx), and follows the require dependency tree, and bundles them into a new file.
// ReactJS uses a special syntax called JSX, not the normal JS one. Usually, when you want to work with ReactJS JSX files, you need to transform them into normal JS files. So we are going to use 'reactify' to transform those JSX into JS files.


// Browserify to bundle dependies (requires), pulls into new file
// Use reactify to transform jsx to js
// result in main.js

// Bundle settings
var bundler = watchify(browserify({
	entries: ['./src/app.jsx'],
	transform: [reactify],
	extensions: ['.jsx'],
	debug: true,
	cache: {},
	packageCache: {},
	fullPaths: true
}));

// Bundle tasks
// Output jsx to js in root folder
function bundle() {
	return bundler
		.bundle()
		.on('error', notify)
		.pipe(source('main.js'))
		.pipe(gulp.dest('./'))
}
bundler.on('update', bundle);

// Create bundle
gulp.task('build', function() {
	bundle()
});

// Sass
// Compile Sass files based on order in main.scss - concat and convert to plain css
// Output to style.css in root folder
gulp.task('sass', function() {
	gulp.src('./sass/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./'));
});

// Live server reload
// reload the browser automatically on change of code
// pass test filter to livereload module, check out compiled css & js files before reloading browser

gulp.task('serve', function(done) {
    gulp.src('')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function(filePath, cb) {
                if (/main.js/.test(filePath)) {
                    cb(true)
                }
                else if (/style.css/.test(filePath)) {
                    cb(true)
                }
            }
        },
        open: true
    }));
});

// Sass watch for changes
gulp.task('watch', function() {
	gulp.watch('./sass/**/*.scss', ['sass']);
});

// Run tasks in specific order
//gulp.task('default', ['build', 'serve', 'sass', 'watch']);
gulp.task('default', ['sass', 'watch']);



