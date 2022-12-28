import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


function Posts() {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
        .then(resp => resp.json())
        .then(posts => setPosts(posts))
    },[])

    return(
      <div className="page-wrapper">
        {posts.map((post,idx) => (
            <div key={idx} className="post">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
                <button key={idx} onClick={(post) => post.remove(idx)}>Delete</button>
            </div>
        ))}
      </div>
    )
}

export {Posts}