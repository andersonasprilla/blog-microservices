import { useState } from 'react'

const CommentCreate = ({ postId }) => {
    const [content, setContent] = useState('')

    const submitHandler = async (event) => {
        event.preventDefault()

        await fetch(`http://localhost:4001/posts/${postId}/comments`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({content})
        })
        console.log(content)
        setContent('')
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='form-group'>
            <label>New Comment</label>
            <input 
            className='form-control'
            value={content}
            onChange={e => setContent(e.target.value)}
             />
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default CommentCreate
