import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState } from 'react';


export default props => {
    const { id } = props;
    const { name } = props;
    const { setName } = props;
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/author/' + id, {
            name
        })
            .then(res => {
                navigate("/author")
            })
            .catch(err => {
                console.log("Catched");
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