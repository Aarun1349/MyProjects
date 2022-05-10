import React, { Component } from 'react'
import PostDetails from './PostDetails'

export class PostList extends Component {
  render() {
    return (
        <>
     <div className='container'>
         <div className='row'>
             <PostDetails/>
         </div>
     </div>
      </>
    )
  }
}

export default PostList