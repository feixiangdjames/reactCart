import React from 'react';
import {connect} from 'react-redux';
class Home extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
      return <div>homepage</div>
    }
};

export default connect()(Home);