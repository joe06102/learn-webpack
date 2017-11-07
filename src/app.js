import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Header, Body } from './components';

class App extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const { title, content } = this.props;

        return (
            <div>
                <Header title={title} />
                <Body content={content} />
            </div>
        );
    }
}

ReactDOM.render(<App title='learn-webpack' content='record of my webpack learning!' />, document.querySelector('body'));