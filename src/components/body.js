import React, { Component } from "react";

export class Body extends Component{
    
    constructor(props){
        super(props);
    }

    render(){
        const { content } = this.props;
        return <section>{content}</section>
    }
}