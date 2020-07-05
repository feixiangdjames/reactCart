import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import action from '../../redux/action'
import {Button} from 'antd';
import {loginOut,queryInfo} from '../../api/person';

class Info extends React.Component{
    constructor(props,context){
        super(props,context);
    }
    componentWillMount() {
        let {baseInfo,queryBaseInfo} = this.props;
        if(!baseInfo){
            queryBaseInfo();
        }
    }
    render(){
        if(!this.props.baseInfo){
            return '';
        }
        let {name,email,phone}=this.props.baseInfo;
        return <div className='personBaseInfo'>
               <p><span>
                   name:
               </span><span>{name}</span></p><p><span>
               email:
           </span><span>email</span><span>{email}</span></p><p><span>
               telephone:
           </span><span>phone</span><span>{phone}</span></p>
               <Button type='danger' onClick={async (ev)=>{
                   await loginOut();
                   this.props.history.push('/person');
               }}>sign out</Button>
           </div>
    }
}

export default withRouter(connect(state=>({...state.person}),action.person)(Info));