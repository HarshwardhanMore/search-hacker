// components/PostDetail.js
import React from 'react';
import "../styles/PostDetail.css";

const PostDetail = ({ post, onBack }) => {

  
  const dateObject = new Date(post.created_at);
  const extractedDate = dateObject.toISOString().split('T')[0];

  return (
    <div className='postdetails-main'>
      <div className='postdetails-main-1'>
        <div>
          <div onClick={onBack} className="backbtn"><img width="48" height="48" src="https://img.icons8.com/ios-filled/50/0a122a/reply-arrow.png" alt="arrow-pointing-left"/></div>
        </div>
        <div className='postdetails-main-1-left'>
          <div className='title'>{post.title}</div>
          <div className='author'>
            <img width="15" height="15" src="https://img.icons8.com/ios-glyphs/30/fbfaf8/person-male.png" alt="user--v1"/>&nbsp;{post.author}
          </div>
        </div>
        <div className='postdetails-main-1-right'>
          <div className="points">
          <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/0a122a/rating.png" alt="rating"/> &nbsp; {post.points}
          </div>
          <div className='date'>
            <img width="24" height="24" src="https://img.icons8.com/fluency-systems-filled/48/0a122a/calendar.png" alt="calendar--v1"/> &nbsp; {extractedDate}
          </div>
        </div>
        <p className="mb-4">{post.text}</p>
      </div>
      <div className='postdetails-main-2'>
        <div className='comments'><img width="24" height="24" src="https://img.icons8.com/ios-glyphs/30/0a122a/filled-topic.png" alt="filled-topic"/> &nbsp; Comments</div>
        {/* <div> */}
          {post.children.map((comment) => (
            <div key={comment.id} className="mb-2 inner-comment">{comment.text}</div>
          ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default PostDetail;
