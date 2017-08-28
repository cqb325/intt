import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Card, FontIcon, ButtonGroup, Button, Row, Col, IconButton, Spin, Notification, FormControl} from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import JSONEditor from '../JSONEditor';
import Mock from 'mockjs';
import actions from 'actions/mock/interface';
import {Link} from 'react-router-dom';

class Page extends Component{
    constructor(props){
        super(props);
        this.actions = this.props.actions;
        this.interfaceId = this.props.params.id;
        this.rerenderTemplate = true;
        this.timer = null;
        this.duration = 500;

        this.state = {
            editURL: false
        };
    }

    /**
     * 请求接口信息数据
     * @return {[type]} [description]
     */
    componentWillMount(){
        this.actions.get(this.interfaceId);
    }

    /**
     * 清空数据还原
     * @return {[type]} [description]
     */
    componentWillUnmount(){
        this.actions.clear();
        Notification.clear();
    }

    /**
     * 模板json渲染
     * @return {[type]} [description]
     */
    renderTemplate(){
        let {state} = this.props;
        let {intf} = state;
        if(intf){
            if(intf.template){
                let temp = JSON.parse(intf.template);
                return <JSONEditor ref='template' json={temp}
                    height={600} mode='tree' name='template' onChange={this.saveTemplate.bind(this)} />
            }
        }
        return null;
    }

    /**
     * 数据json的渲染
     * @return {[type]} [description]
     */
    renderData(){
        let {state} = this.props;
        let {intf, data} = state;
        if(data){
            return <JSONEditor ref='data' json={data} height={600} mode='view' name='data'></JSONEditor>
        }else{
            if(intf){
                this.actions.req(intf);
            }
        }
        return null;
    }

    /**
     * 刷新请求模拟数据
     * @return {[type]} [description]
     */
    refreshData(){
        let {state} = this.props;
        let {intf} = state;
        this.actions.req(intf);
    }

    /**
     * 验证数据格式
     * @return {[type]} [description]
     */
    checkData(){
        let {state} = this.props;
        let {intf, data} = state;

        let ret = Mock.valid(intf.schema, data);

        console.log(ret);
    }

    /**
     * 修改完模板进行保存
     * @return {[type]} [description]
     */
    saveTemplate(){
        // 防止高频保存
        if(this.timer){
            window.clearTimeout(this.timer);
            this.timer = null;
        }

        this.timer = window.setTimeout(()=>{
            let data = this.refs.template.getData();

            if(data){
                let {state} = this.props;
                let {intf} = state;
                data = JSON.stringify(data);
                this.actions.saveTemplate(intf.id, data);
            }
        }, this.duration);
    }

    /**
     * 生成template的schema
     * @return {[type]} [description]
     */
    buildSchema(){
        let {state} = this.props;
        let {intf} = state;
        let temp = this.refs.template.getData();
        let schema = Mock.toJSONSchema(temp);
        this.actions.saveSchema(intf.id, schema);
    }

    /**
     * 开始编辑地址
     * @return {[type]} [description]
     */
    startToEditURL(){
        this.setState({
            editURL: true
        });
    }

    editURL(){
        let {state} = this.props;
        let {intf} = state;
        let url = this.refs.url.getValue();
        if(this.refs.url.check()){
            this.actions.updateURL(intf.id, url);
        }
        this.setState({
            editURL: false
        });
    }

    createPaginationTemplate(){
        if(this.refs.template){
            this.refs.template.setData({
                "total": 500,
                "pageNum|1-20": 1,
                "pageSize": 10,
                "data|10":[
                    {"id":"@guid"}
                ]
            });
        }
    }

    render(){
        let {state} = this.props;
        let {intf, data, isFetching, schemaRet, templateRet, urlRet} = state;
        if(schemaRet && !isFetching){
            if(schemaRet.success){
                Notification.success({
                    title: "提示",
                    desc: '生成Schema成功'
                });
            }else{
                Notification.error({
                    title: "提示",
                    desc: '生成Schema失败'
                });
            }
        }

        if(templateRet && !templateRet.success){
            Notification.error({
                title: "提示",
                desc: '保存模板失败'
            });
        }

        if(urlRet){
            if(!urlRet.success){
                Notification.error({
                    title: "提示",
                    desc: '修改接口地址失败'
                });
            }else{
                this.actions.get(this.interfaceId);
            }
        }

        return (
            <Spin.SVGSpin spinning={isFetching}>
                <div style={{padding: '50px 150px'}}>
                    <div className='inner-vertical-align'>
                        <FontIcon font='tools' icon='api' color='#20A0FF' className='mr-10' style={{fontSize: 50}} />
                        {this.state.editURL
                            ? <FormControl ref='url' type='text' required style={{marginBottom: 0}} rules={{
                                remote: ()=>{
                                    return '/interface/exist?prj_id=' + intf.prj_id +
                                    '&url=' + this.refs.url.getValue() + '&id=' + intf.id
                                }
                            }}
                                name='url' value={intf.url} className='mr-10' />
                            : <span className='mr-10'>{intf.url}</span>
                        }
                        {
                            this.state.editURL
                            ? <FontIcon icon='save' className='mr-5 text-link'
                                onClick={this.editURL.bind(this)} />
                            : <FontIcon font='tools' icon='edit' className='mr-5 text-link'
                                    onClick={this.startToEditURL.bind(this)} />
                        }
                        <span className='pull-right mt-25'>
                            <FontIcon font='tools' icon='request' className='mr-5' />
                            <span className='mr-10'>{intf.reqNum}</span>
                            <FontIcon font='tools' icon='clock' className='mr-5' />
                            <span>{intf.ct_time}</span>
                        </span>
                    </div>
                    <div className='text-promote'>{intf.desc}</div>
                    <div className='pull-right'>
                        {/* <FontIcon icon='check' onClick={this.checkData.bind(this)} /> */}
                    </div>
                    <Row className='mt-40'>
                        <Col grid={0.5} className='pd-10'>
                            <Card title='接口数据' className='animated slideInLeft transparent'
                                tools={<span>
                                    <IconButton icon='refresh'
                                        onClick={this.refreshData.bind(this)}
                                        style={{fontSize: 16, marginTop: -7}} />
                                </span>}
                                >
                                {this.renderData()}
                            </Card>
                        </Col>
                        <Col grid={0.5} className='pd-10'>
                            <Card title='Template' className='animated slideInRight transparent'
                                tools={
                                    <span>
                                        <a href='javascript:void(0)' className='mr-10'
                                            onClick={this.createPaginationTemplate.bind(this)}>分页模板</a>
                                        <a href='javascript:void(0)' onClick={this.buildSchema.bind(this)}>生成Schema</a>
                                    </span>
                                }>
                                {this.renderTemplate()}
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Spin.SVGSpin>
        );
    }
}

const mapStateToProps = (state, props) => ({
    state: state.interface,
    params: props.params
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
