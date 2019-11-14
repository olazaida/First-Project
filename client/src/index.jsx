
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from "./components/y.jsx";
import Users from "./components/o.jsx";
import Comments from './components/s.jsx';



class Main extends Component {

    constructor(props){
        super(props)
    }

    
    render(){
        return (
            <div>
                <App />
                <Users />
                <Comments />
            </div>
        )
    }
}

ReactDOM.render(<Main></Main>,document.getElementById("app"))
// ReactDOM.render(<Main></Main>,document.getElementById("users"))