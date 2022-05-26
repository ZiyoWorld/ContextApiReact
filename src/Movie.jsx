import React, {useContext} from "react";
import {Kino} from './context';



const Movie = (props)=>{
    const [data, setData] = useContext(Kino);

    const onDelete = (e)=>{
        setData((prev)=>
            prev.filter( (value)=>{
                return value.id !== e
            })
        )
    }
    return(
        <div>
            <h1>Name:{props.data.name}</h1>
            <h1>Price:{props.data.price}</h1>
            <button onClick={()=> onDelete(props.data.id)}>Delete</button>
            <hr />
        </div>
    )
}
export default Movie;