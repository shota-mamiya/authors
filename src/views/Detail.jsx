import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [name, setName] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + props.id)
            .then(res => setName(res.data))
    }, [])
    return (
        <div>
            <p>Author Name: {name.name}</p>
            <Link to={"/author/" + name._id + "/edit"}>
                Edit
            </Link>
        </div>
    )
}