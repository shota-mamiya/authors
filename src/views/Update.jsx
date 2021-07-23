import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UpdateAuthorForm from '../components/UpdateAuthorForm';


export default props => {
    const { id } = props;
    const [ name, setName ] = useState("");

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
            .then(res => {
                setName(res.data.name);
            })
    }, [])

    return (
        <div>
            <h1>
                Update An Author
            </h1>
            <UpdateAuthorForm id = {id} name = {name} setName = {setName}/>
        </div>
    )
}