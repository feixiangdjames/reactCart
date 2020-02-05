import React from 'react';
import {connect} from 'react-redux';

class Login extends React.Component{
    constructor(props,context){
        super(props,context)

    }
    render(){
        return <li>Login</li>
    }
}


export default connect()(Login);