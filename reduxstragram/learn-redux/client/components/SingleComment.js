import React from 'react';

const SingleComment = React.createClass({
  handleUpdate(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const index = this.refs.index.value;
    const comment = this.refs.comment.value;
    this.props.updateComment(postId, index, comment);
  },

  render() {
    console.log(this.props);
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text} {i}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
          <button className="remove-comment">Edit</button>
        </p>

        <form ref="udpateForm" className="comment-form" onSubmit={this.handleUpdate}>
          <input type="text" ref="comment" placeholder="update comment"/>
          <input type="text" ref="index" value={i} />
          <input type="submit" hidden />
        </form>
      </div>
    )
  }
});

export default SingleComment;
