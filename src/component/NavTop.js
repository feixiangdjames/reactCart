import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
class NavTop extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>i am NavTop</div>
    }
};

export default withRouter(connect(mapStateToProps,mapDispathToProps)(NavTop));