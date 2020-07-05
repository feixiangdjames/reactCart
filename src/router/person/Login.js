import React from 'react';
import {connect} from 'react-redux';
import { Form, Icon, Input, Button,Checkbox,Modal} from 'antd';
import {Link} from 'react-router-dom';
import md5 from 'blueimp-md5';
import {login} from '../../api/person';
    function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}
   function antModal(type,msg) {
        if(type){const modal=Modal.error(
           {
               title: 'Login',
               content:msg
           }
       );
       setTimeout(()=>modal.destroy(),2000);
        return''}
       const modal=Modal.success(
           {
               title: 'Login',
               content:msg
           }
       );
       setTimeout(()=>modal.destroy(),2000);
       return''

   };
class Login extends React.Component{
    constructor(props,context){
        super(props,context)
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                let {username:name,password}=values;
                password=md5(password);
                let result= await login({name,password});
                if(parseFloat(result.code)===0){
                    antModal(result.code,result.msg);
                    this.props.history.go(-1);
                    return;
                }
                antModal(result.code,result.msg);
            }

        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
           <div className='Login'>
               <Form onSubmit={this.handleSubmit} className="login-form">
                   <Form.Item className='login-form-item'>
                       {getFieldDecorator('username', {
                           rules: [{ required: true, message: 'Please input your username!' }],
                       })(
                           <Input
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,.25,.25)'}} />}
                               placeholder="Username"
                           />,
                       )}
                   </Form.Item>
                   <Form.Item className='login-form-item'>
                       {getFieldDecorator('password', {
                           rules: [{ required: true, message: 'Please input your Password!' }],
                       })(
                           <Input
                               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password"
                               placeholder="Password"
                           />,
                       )}
                   </Form.Item>
                   <Form.Item>
                       {getFieldDecorator('remember', {
                           valuePropName: 'checked',
                           initialValue: true,
                       })(<Checkbox>Remember me</Checkbox>)}
                       <a className="login-form-forgot" href="">
                           Forgot password
                       </a>
                       <Button type="primary" htmlType="submit" className="login-form-button">
                           Log in
                       </Button>
                       Or <Link to='/person/register'>register now!</Link>
                   </Form.Item>
               </Form>
           </div>
        );
    }
}
const LoginFrom = Form.create({ name: 'normal_login' })(Login);

export default connect()(LoginFrom);