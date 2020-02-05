import React from 'react';
import {connect} from 'react-redux';

class Tip extends React.Component{
    constructor(props,context){
        super(props,context)

    }
    render(){
      return <li>warning</li>
    }
}


export default connect()(Tip);