import React, { Component } from "react";

export class AddPost extends Component {
  render() {
    return (
      <>
        <div className="container" style={{margin:"4rem auto "}}>
          {" "}
          <h5 className="blue-text center-align ">Quote Blog</h5>
          <form>
              <div className="input-field">
                  <label htmlFor="post_title">Title</label>
                  <input type="text" name="title"></input>
              </div>
              <div className="input-field">
                  <label htmlFor="author">Author</label>
                  <input type="text" name="author"></input>
              </div>
              <div className="input-field">
                  <button className="btn blue center-align">POST <i className="material-icons right">send</i></button>
                  
              </div>
          </form>
        </div>
      </>
    );
  }
}

export default AddPost;
