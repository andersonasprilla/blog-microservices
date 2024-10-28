import { useEffect, useState } from 'react'

const PostLists = () => {
    const [posts, setPosts] = useState({})
    const [error, setError] = useState('')

    useEffect(() => {
        const fetchPosts = async () =>{
            try {
                const response = await fetch('http://localhost:4000/posts')
                if(!response.ok) {
                    throw new Error('Error:', response.error)
                }
                const data = await response.json()
                setPosts(data)
            } catch (error) {
                setError('Failed to fetch url')
            }  
        }
        fetchPosts()
    }, [])

    return (
        <div>
            {error ? <p>{error}</p> : (
                <ul className='d-flex flex-row flex-wrap justify-content-between'>
                    {Object.values(posts).map((post) => (
                        <li className='card' style={{width: '30%', marginBottom: '30px' }} key={post.id}>
                            <div className='card-body'>
                            <h3>{post.title}</h3>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default PostLists
