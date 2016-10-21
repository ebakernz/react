import React from 'react';

const Comments = React.createClass({
  renderComment(comment, i) {
    return (
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
          <button className="remove-comment" >Edit</button>
        </p>

        <form hidden ref="udpateForm" className="comment-form" onSubmit={this.handleUpdate}>
          <input type="text" ref="newcomment" placeholder="new comment"/>
          <input type="submit" />
        </form>
      </div>
    )
  },
  toggleEditForm() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  },
  handleUpdate(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const newcomment = this.refs.newcomment.value;
    this.props.updateComment(postId, newcomment);
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
    const updateFormActive = collapsed ? hidden : "";
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
