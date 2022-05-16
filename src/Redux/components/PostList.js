import React, { Component } from 'react'
import PostDetails from './PostDetails'
import { connect } from 'react-redux'
export class PostList extends Component {
  render() {
      console.log(this.props.quote)
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

const mapStateToProps=(state)=>{
   return { quote:state.quote}
}

export default connect(mapStateToProps)(PostList);