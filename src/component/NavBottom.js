import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class NavBottom extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>i am NavBottom</div>
    }
};

export default withRouter(connect()(NavBottom));