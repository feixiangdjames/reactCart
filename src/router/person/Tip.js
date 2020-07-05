import React from 'react';
import {connect} from 'react-redux';
import {Alert, Button} from 'antd';
import {withRouter} from 'react-router-dom';

class Tip extends React.Component {
    constructor(props, context) {
        super(props, context)

    }
    render() {
        return <div>
            <Alert type='warning' message='
Not logged in' description='Dear user, you are not currently logged in, please log in first'/>
            <Button type='dashed' onClick={ev => this.props.history.push('/person/login')}>
                Login</Button>
            <Button type='dashed' onClick={ev => this.props.history.push('/person/register')}
            >Register</Button>
        </div>
    }
}



export default withRouter(connect()(Tip));