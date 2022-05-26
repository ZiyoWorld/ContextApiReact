import React, {useContext} from "react";
import Movie from './Movie';
import {Kino} from './context';

const MovieList = ()=>{
    const [data, setData] = useContext(Kino);
    return(
        <div>
                {
                    data.map ( (value, index)=>{
                        return(
                            <Movie key={value.id} data={value} />
                        )
                    })
                }
        </div>
    )
}
export default MovieList;