import React, {createContext, useState} from "react";


export const Kino = createContext();

export const KinoProvider = ({children})=>{
   const [data, setData] = useState([
    {id: 1, name: "Harry Potter", price: "100$"},
    {id: 2, name: "Avatar", price: "200$"},
    {id: 3, name: "Transformer", price: "300$"},
    {id: 4, name: "Tor 3", price: "400$"},
   ])
    return (
        <Kino.Provider value={[data, setData]}>
            {children}          
        </Kino.Provider>
    )
}