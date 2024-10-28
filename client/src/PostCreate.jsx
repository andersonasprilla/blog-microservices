import { useState } from 'react'

const PostCreate = () => {
    const [title, setTitle] = useState('')
   
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('http://localhost:4000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title }),
            })
            const data = await response.json()
            console.log('Post created:', data)
        } catch (error) {
            console.error('Error creating post:', error)
        }

        setTitle('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className='form-control'
                    />
                </div>
                <button className='btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PostCreate
