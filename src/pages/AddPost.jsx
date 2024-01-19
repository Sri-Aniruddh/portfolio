import React from 'react'
import { Container, PostForm } from '../component/index'

function AddPost() {
 
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
            {console.log("file upload sucessfully")}
        </Container>
    </div>
  )
}

export default AddPost