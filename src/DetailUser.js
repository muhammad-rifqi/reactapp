import React from 'react'
import {useParams } from 'react-router-dom';

const Detail = () => {

    let { id } = useParams();
    console.log(id);

    return(
        <></>
    )
    
    
} 
export default Detail