import React, { Component } from "react";

export class Header extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const { title } = this.props;
        return <h1>{title}</h1>
    }
}