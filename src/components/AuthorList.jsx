import React from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const { removeFromDom } = props;
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }
    return (
        <div>
            {props.authors.map((auth, idx) => {
                return <p key = {idx}> 

                    <Link to={"/" + "author/" + auth._id}>
                        {auth.name}
                    </Link>
                    
                    <button onClick={(e)=>{deleteAuthor(auth._id)}}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}