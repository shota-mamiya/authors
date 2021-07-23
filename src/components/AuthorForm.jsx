import axios from 'axios';
import React, { useState } from 'react';

export default () => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author', {
            name
        })
            .then(res => console.log(res))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })
    }
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Author Name</label><br/>
                <input type="text" onChange={(e) => setName(e.target.value)} value= {name}/>
            </p>
            

            <input type="submit"/>

        </form>
    )
}