import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Icon} from 'antd';
/*TRANSITION*/
import Transition from 'react-transition-group/Transition';

const duration=500,
    defaultStyle={
    transition:`opacity ${duration}ms`,
        opacity:0
    },
    transitionStyles={
    entering:{opacity:0},
        entered:{opacity:1}};

class NavTop extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={
            in:false
        }
    }
    render(){
        return <header className='headerNavBox'>
        <div className='homeBox'>
            <div className="baseBox">
                <h1 className='logo'>ShowTime</h1>
                <Icon type="bars" className='icon' onClick={ev=>{
                    this.setState({in:!this.state.in})
                }
                }/>
            </div>
            <Transition in={this.state.in} timeout={0}>
                {
                    state=>{
                        return <ul className='filterBox' style={{...defaultStyle,...transitionStyles[state],
                        display:this.state.in?'block':'none'}}>
                            <li>ALL</li>
                            <li>REACT</li>
                            <li>HTML</li>
                            <li>NODE</li>
                            <li>BROWSER</li>
                            <li>NGINX</li>
                        </ul>
                    }
                }
            </Transition>

        </div>
        </header>
    }
};

export default withRouter(connect()(NavTop));