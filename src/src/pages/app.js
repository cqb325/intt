import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import createHistory from 'history/createHashHistory';
import { Route, Link } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import {Menu, FontIcon, Layout, Sider, Card, Row, Col} from '../components';
import Store from 'store';
import Spider from './Spider';
import reducers from '../reducers/index';
import routers from '../routers/routers';

const {SubMenu,MenuItemGroup} = Menu;
const {Header,Content,Footer} = Layout;
import '../components/theme/theme.less';
import '../components/theme/cmui-font/iconfont.css';
import '../css/font-tools/iconfont.css';
import './app.scss';
import './animate.css';

const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(reducers, applyMiddleware(middleware,thunk, promiseMiddleware));

function gotoPage(item){
    Store.set('sys_key_ctools', item.getKey());
    store.dispatch(push(item.props.href));
}

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRoot: history.location.pathname === '/'
        };
    }

    componentDidMount(){
        Spider.draw();

        history.listen((location, action) => {
            if(location.pathname === '/'){
                this.setState({isRoot: true});
            }else{
                this.setState({isRoot: false});
            }
        })
    }

    renderMenu(){
        if (this.state.isRoot) {
            return (
                <Row style={{padding: 50, width: '100%'}}>
                    <Col grid={1/3} className='func-item'>
                        <Card title='CMUI' border={false} className='animated slideInLeft'>
                            <a href='https://cqb325.github.io/cmui/' target='_blank'>
                                <FontIcon font='tools' icon='ui'></FontIcon>
                                <p>UI套件.</p>
                            </a>
                        </Card>
                    </Col>

                    <Col grid={1/3} className='func-item'>
                        <Card title='表单生成' border={false} className='animated zoomIn'>
                            <Link to='/form'>
                                <FontIcon font='tools' icon='auto-form'></FontIcon>
                                <p>为SimpleForm业务组件构建表单使用.</p>
                            </Link>
                        </Card>
                    </Col>

                    <Col grid={1/3} className='func-item'>
                        <Card title='模拟数据' border={false} className='animated slideInRight'>
                            <Link to='/mock-api'>
                                <FontIcon font='tools' icon='mock'></FontIcon>
                                <p>生成模拟数据，并对真实数据进行校验.</p>
                            </Link>
                        </Card>
                    </Col>

                    <Col grid={1/3} className='func-item'>
                        <Card title='流程图' border={false} className='animated slideInLeft'>
                            <Link to='/flow-chart'>
                                <FontIcon font='tools' icon='mock'></FontIcon>
                                <p>制作简单流程图.</p>
                            </Link>
                        </Card>
                    </Col>
                </Row>
            );
        } else {
            return null;
        }
    }

    render(){
        return (
            <Provider store={store}>
              <ConnectedRouter history={history}>
                  <div style={{height: '100%'}}>
                      <Layout className=''>
                          <Header>集中工具</Header>
                          <Layout>
                              {/* <Sider>
                                  <Menu ref='menu' style={{width: 200}} theme='dark' onSelect={gotoPage}>
                                      <Menu.Item href='/dashboard'>首页</Menu.Item>
                                      <Menu.Item href='/form'>
                                          <FontIcon font='cmui' icon='form' className='mr-5'></FontIcon>
                                          <span>生成表单</span>
                                      </Menu.Item>
                                  </Menu>
                              </Sider> */}
                              <Content>
                                  <div style={{zIndex: 1, position: 'absolute', width: '100%', height: '100%'}}>
                                      {this.renderMenu()}
                                      {routers}
                                  </div>
                              </Content>
                          </Layout>
                      </Layout>
                  </div>
              </ConnectedRouter>
            </Provider>
        );
    }
}

ReactDOM.render((
    <App />
), document.getElementById('app'));
