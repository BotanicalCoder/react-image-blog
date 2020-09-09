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
          <input
            type="submit"
            value="submit"
            onClick={() => {
              props.formHandler();
            }}
          />
        </form>
      </div>

      <div className="row ml-1">
        {" "}
        <h4>comments</h4> <br />
      </div>
      {comments.map((comment) => {
        return (
          <div className="row ml-1">
            <p>
              {comment.body}
              <br />
              <span>delete comment </span>
            </p>
            <br />
            <p> name of author: {comment.name} </p>
          </div>
        );
      })}
    </article>
  );
};

export default ImageReview;
