import React from 'react';
import ReactDOM from 'react-dom';
import {Switch,HashRouter,Route,Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux';
/*ANTD*/
import {} from 'antd';
/*base CSS*/
import './static/css/reset.min.css';
import './static/css/common.scss';
import NavTop from './component/NavTop';
import NavBottom from './component/NavBottom';
import Home from './router/Home.js';
import Person from './router/Person.js';
import Mycourse from './router/Mycourse.js';

ReactDOM.render(<Provider store={store}>
    <HashRouter>
        <div>
            <NavTop/>
            {/*MAIN =>ROUTER*/}
            <main className="container">
                <Switch>
                    <Route path='/course' component={Home}/>
                    <Route path='/mycourse' component={Mycourse}/>
                    <Route path='/person' component={Person}/>
                    <Redirect to='/course'/>
                </Switch>
            </main>
            <NavBottom/>
        </div>
    </HashRouter>
</Provider>, document.getElementById('root'));
