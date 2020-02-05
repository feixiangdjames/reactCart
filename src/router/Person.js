import React from 'react';
import {connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';

import Info from './person/info';
import Login from './person/Login';
import Register from './person/Register';
import Tip from './person/Tip';

import {verifyLogin} from '../api/person';
class Person extends React.Component{
    constructor(props,context){
        super(props,context);
        this.state={isLogin:false};
    }
    async UNSAFE_componentWillMount(){
        let result=await verifyLogin();
        let isLogin=parseFloat(result.code)===0?true:false;
        console.log(isLogin);
        this.setState({isLogin});
    }
    render(){
        return <section>
            <Switch>
                <Route path='/person/info' render={
                    ()=>{
                if(this.state.isLogin){
                    console.log(1);
                    return <Info/>}
                return <Tip/>
                }
                }/>
                <Route path='/person/login' component={Login}/>
                <Route path='/person/register' component={Register}/>
                <Redirect from='/person' to='/person/info'/>
            </Switch>
        </section>
    }
};

export default connect()(Person);