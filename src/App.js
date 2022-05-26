import React from "react";
import Add from "./Add";
import { Container } from "./AppStyle";
import MovieList from "./MovieList";
import Navbar from "./Navbar";


const App = ()=>{
    return(
        <Container>
            <Navbar />
            <Add />
            <MovieList />
        </Container>
    )
}
export default App;