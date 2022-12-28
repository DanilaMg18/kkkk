import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePostPage(){
    const [post,setPost] = useState([])
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(resp => resp.json())
        .then(postData => setPost(postData))
    },[id])

    return(
        <div className="page-wrapper">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

export { SinglePostPage }