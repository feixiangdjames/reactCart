import React from 'react';
import {connect} from 'react-redux';

class Info extends React.Component{
    constructor(props,context){
        super(props,context)

    }
    render(){
           return <li>Info</li>
    }

}






export default connect()(Info);