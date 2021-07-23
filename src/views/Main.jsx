import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AuthorList from '../components/AuthorList';


export default () => {
    const [ authors, setAuthors ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res=> setAuthors(res.data))
            .catch(err=>console.log("Error: ", err))
    }, [])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(auth => auth._id !== authorId));
    }

    return (
        <>
            <AuthorList authors={authors} removeFromDom={removeFromDom}/>
        </>
    )

}