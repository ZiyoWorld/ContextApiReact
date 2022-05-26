import React, {Component} from "react";
import ReactHooks from "./ReactHooks";

class ReactOld extends Component {
   
    state = { 
        counter: 0,
        status: "Student"
     }
    render() { 
        return ( 
            <div>
                <ReactHooks count={this.state.counter} />
                React Old 
                <p>React Old Counter:{this.state.counter}</p>
                <input placeholder="State" 
                value={this.state.status}
                onChange={(e)=>this.setState({
                    status: e.target.value
                })}
                />
                <button style={{padding:"5px"}} onClick={()=> this.setState({counter: this.state.counter+1})}>+</button>
                <button style={{padding:"5px"}} onClick={()=> this.setState({counter: this.state.counter-1})}>-</button>
                <p>Input: {this.state.status}</p>
            
            </div>
         )
    }
}
 
export default ReactOld;