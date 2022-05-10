import React, { Component } from 'react'

export class PostDetails extends Component {
  render() {
    return (
      <>
        <div className='col s12 m6'>
            <div className='card'>
                <div className='card-content'>
                    <span className='card-title'>Post One</span>
                    <p>lorem 12 </p>
                </div>
                <div className='card-action'>
                    <button className='btn red center-align'  style={{marginRight:"2rem "}}>DELETE   <i className='material-icons delete'>delete</i></button>
                    <button className='btn yellow center-align'>edit   <i className='material-icons edit'>edit</i></button>
                </div>
            </div>

        </div>
      </>
    )
  }
}

export default PostDetails