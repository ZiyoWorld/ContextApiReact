import React, {useState, useEffect} from 'react';

const ReactHooks = (props)=>{
    const [counter, setCounter] = useState(props.count)
    const [status, setStatus] = useState('Student')
    
    useEffect(()=>{
        setCounter(props.count)
        console.log("Hooks Cliked")
    }, [props.count])

    return(
        <div>
         ReactHooks
         <p>React Hooks state: {counter}</p>
         <input type="text" placeholder='Hooks'
         value={status}
         onChange={(e)=> setStatus(e.target.value)}
         />
         <button style={{padding:"5px"}} onClick={()=>setCounter(counter + 1)}>+</button>
         <button style={{padding:"5px"}} onClick={()=>setCounter(counter - 1)}>-</button>
         <p> Hooks Input: {status}</p>
        </div>
    )
}
export default ReactHooks;