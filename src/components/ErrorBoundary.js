 import React, {Component} from "react";


 class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    
    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        return this.state.hasError ? 
        <div><h1>Oops! Something went wrong.</h1></div> 
        :
        this.props.children
    }
 }

 export default ErrorBoundary;