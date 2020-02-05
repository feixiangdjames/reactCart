import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import {Icon} from 'antd';
class NavBottom extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    render(){
        return <footer className='navBottom'><a>
            <NavLink  to ='course'>
                <Icon type='home'/>
                <span>Home</span>
            </NavLink>
        </a>
            <a>
                <NavLink  to='/mycourse'>
                    <Icon type='solution'/>
                    <span>collection</span>
                </NavLink>
            </a>
            <a>
                <NavLink  to='/person'>
                    <Icon type='user'/>
                    <span>person</span>
                </NavLink>
        </a></footer>
    }
};

export default withRouter(connect()(NavBottom));