import React from 'react';
import Comment from './Comment';
import CommentInputBox from './CommentInputBox';
import './comment.css';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      newComment : ''
    };
  }

  addNewComment = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    event.preventDefault(); 
    const newComment = { username: 'Unknown....',
                         text: this.state.comment,  };
    this.setState({
                  comments : [...this.state.comments, newComment]
    });
  };
  
  
  commentHandler = (event) => {
    this.setState ({ newComment : event.target.value});
  };

  render() {
      console.log(this.state.comments);
    return (
      <div>
        {this.state.comments.map((comment, index) => (
        
        <Comment 
           key  = {index} localComment = {comment}
        />
        ))} 

        <CommentInputBox
            comment = {this.state.newComment}
            submitComment = {this.addNewComment}
            changeComment = {this.commentHandler}
        />
      </div>
    );
  }
}

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

export default CommentSection;


//The CommentSection component will receive the array of comments as props and render a Comment component with the username of the poster 
//as well as the post's text. Additionally, there should be an input box that allows users to submit a new comment for any post.