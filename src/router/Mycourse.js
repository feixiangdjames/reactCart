import React from 'react';
import {connect} from 'react-redux';
class MyCourse extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <div>my course</div>
    }
};

export default connect()(MyCourse);