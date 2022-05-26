import React, {useState, useContext} from "react";
import {Kino} from './context';

const Add = ()=>{
   const [data, setData] = useContext(Kino);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const onAdd = ()=>{
        console.log(data.length)
        if(name.length !== 0 && price.length !== 0){

            setData( (prev)=> 
            [...prev, 
                {id: data.length+1,  name: name, price: price}
            ]
         )
        }
        setName('')
        setPrice('')
    }
    return(
        <div>
         
         <input type="text" onChange={(e)=> setName(e.target.value)} value={name} placeholder="name" />
         <input type="text" onChange={(e)=> setPrice(e.target.value)} value={price} placeholder="price" />
         <button onClick={onAdd}> Add</button>
        </div>
    )
}
export default Add;