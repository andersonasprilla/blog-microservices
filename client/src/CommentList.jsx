import { useEffect, useState } from 'react'

const CommentList = ( { postId }) => {
    const [comments, setComments] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchComments =  async () => {
            try {
                const response = await fetch(`http://localhost:4001/posts/${postId}/comments`)
                if(!response.ok) {
                    throw new Error('Error:', response.error)
                }
                const data = await response.json()
                setComments(data)
            } catch (error) {
                setError('Failed to fetch url')
            }
        }
        fetchComments()
    }, [])

  return (
    <div>
      {error ? <p>{error}</p> : (
        <ul>
            {comments.map((comment) => (
                <li key={comment.id}>
                    {comment.content}
                </li>
            ))}
        </ul>
      )}
    </div>
  )
}

export default CommentList
