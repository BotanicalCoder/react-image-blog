import React from "react";
import { useState, useEffect } from "react";
const ImageReview = (props) => {
  const [...comments] = props.comment;

  const comment = comments;
  return (
    <article className="container ">
      <div className="row">
        <h4 className="ml-3">add REVIEW</h4>
      </div>
      <div className="row form ml-1">
        <form onSubmit={(e) => e.preventDefault()}>
          <label for="name">name</label>
          <input type="text" id="name" placeholder="input your name" required />
          <br />
          <textarea id="comment" placeholder="add comment" required />
          <br />
         <a href= #comments>
          <input
            type="submit"
            value="submit"
            onClick={() => {
              props.formHandler();
            }}
          />
         </a>
        </form>
      </div>

      <div className="row ml-1" id="comments">
        {" "}
        <h4>comments</h4> <br />
      </div>
      {comments.map((comment) => {
        return (
          <div className="row ml-1" >
            <p>
              {comment.body}
              <br />
              <span>delete comment </span>
            
            <br />
            <span > name of author: {comment.name} </span>
            </p>
          </div>
        );
      })}
    </article>
  );
};

export default ImageReview;
