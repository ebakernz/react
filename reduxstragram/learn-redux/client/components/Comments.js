import React from 'react';

const Comments = React.createClass({

  mapStateToProps(state) {
    return {
      value: ''
    }
  },
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
          <button className="remove-comment">Edit</button>
        </p>

        <form ref="udpateForm" className="comment-form" onSubmit={this.handleChange}>
          <input type="hidden" name="author" ref="author" value={comment.user} readOnly />
          <input type="text" name="comment" ref="comment" defaultValue={comment.text} />
          <input type="hidden" name="index" ref="index" value={i} readOnly />
          <input type="submit" hidden />
        </form>
      </div>
    )
  },
  handleChange(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const index = this.refs.index.value;
    const comment = this.refs.comment.value;
    console.log('post id ' + postId + ' comment ' + comment + ' index ' + index);
    this.props.updateComment(postId, index, comment);
  },
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },
  render() {
    console.log(this.props);
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default Comments;
