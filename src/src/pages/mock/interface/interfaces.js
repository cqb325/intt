import React, {Component} from 'react';
import {Card, FontIcon, ButtonGroup, Button, Row, Col, Notification} from 'components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from 'actions/mock/interfaces';
import {Link} from 'react-router-dom';

class Page extends Component{
    componentWillMount(){
        let {actions, params} = this.props;
        actions.list(params.projectId);
    }

    /**
     * 清除数据和消息框
     * @return {[type]} [description]
     */
    componentWillUnmount(){
        let {actions} = this.props;
        actions.clear();
        Notification.clear();
    }

    /**
     * 切换渲染模式
     * @param  {[type]} btn [description]
     * @return {[type]}     [description]
     */
    switchLayout(btn){
        let type = btn.props["data-type"];
        let {actions} = this.props;
        actions.switchLayout(type);
    }

    /**
     * 删除提示
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    showDeleteConfirm(id){
        Notification.close('delete_confirm');
        Notification.question({
            title: 'Tip',
            duration: 0,
            key: 'delete_confirm',
            desc: 'delete this interface ?',
            btn: <Button flat theme='primary' onClick={this.deleteInterface.bind(this, id)}>confirm</Button>
        });
    }

    /**
     * 删除接口
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    deleteInterface(id){
        let {actions} = this.props;
        actions.deleteInterface(id);
    }

    /**
     * 复制提示
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    showCopyConfirm(id){
        Notification.close('copy_confirm');
        Notification.question({
            title: 'Tip',
            duration: 0,
            key: 'copy_confirm',
            desc: 'copy this interface ?',
            btn: <Button flat theme='primary' onClick={this.copyInterface.bind(this, id)}>confirm</Button>
        });
    }

    /**
     * 复制接口
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    copyInterface(id){
        let {actions} = this.props;
        actions.copyInterface(id);
    }

    /**
     * 列表形式渲染
     * @param  {[type]} interfaces [description]
     * @return {[type]}            [description]
     */
    listInterfaces(interfaces){
        if(interfaces){
            return interfaces.map((intf)=>{
                let type = intf.dataType === 'array'
                    ? <FontIcon icon='array' font='tools' color='#13CE66' style={{fontSize: 20}} className='mr-10' title='数组类型数据' />
                    : <FontIcon icon='obj' font='tools' color='#13CE66' style={{fontSize: 20}} className='mr-10' title='对象类型数据' />
                let lazy = intf.lazy
                    ? <span>
                        <FontIcon icon='lazy' font='tools' className='mr-5' title='延时' />
                        <span className='mr-10'>{intf.lazyTime}</span>
                    </span>
                    : null;
                return (
                    <Card style={{color: '#20A0FF', minWidth: 600}}
                        className='mb-15 animated zoomIn'>
                        <FontIcon icon='api' font='tools' style={{fontSize: 30}} className='mr-10' />
                        {
                            intf.schema
                            ? <FontIcon icon='rule' font='tools' className='mr-10' style={{fontSize: 20}} color='#13CE66' />
                            : null
                        }
                        {type}
                        <div className='pull-right mr-10'>
                            {lazy}
                            <FontIcon icon='request' font='tools' className='mr-5' title='请求数' />
                            <span className='mr-10'>{intf.reqNum}</span>
                            <FontIcon icon='clock' font='tools' className='mr-10' title='创建时间' />
                            <span>{intf.ct_time}</span>
                        </div>
                        <div style={{fontSize: 24}}>
                            <Link to={`/interface/${intf.id}`}>
                                <span className='mr-15'>{intf.url}</span>
                            </Link>
                            <span className='text-promote mr-20 ml-10'>{intf.desc ? `(${intf.desc})` : ''}</span>
                            <span className='pull-right'>
                                <FontIcon className='text-success mr-5' icon='copy' font='tools'
                                    style={{fontSize: 15}} title='复制接口'
                                    onClick={this.showCopyConfirm.bind(this, intf.id)} />
                                <FontIcon className='text-danger' icon='delete' font='tools'
                                    style={{fontSize: 15}} title='删除接口'
                                    onClick={this.showDeleteConfirm.bind(this, intf.id)} />
                            </span>
                        </div>
                        {
                            intf.ispassed
                            ? <FontIcon icon='pass' font='tools' className='mr-10' style={{fontSize: 65, position: 'absolute', right: -13, top: -21}} />
                            : null
                        }
                    </Card>
                );
            });
        }
        return null;
    }

    /**
     * 格子形式渲染
     * @param  {[type]} interfaces [description]
     * @return {[type]}            [description]
     */
    gridInterfaces(interfaces){
        if(interfaces){
            return interfaces.map((intf)=>{
                let type = intf.dataType === 'array'
                    ? <FontIcon icon='array' font='tools' color='#13CE66' style={{fontSize: 20}} className='mr-10' title='数组类型数据' />
                    : <FontIcon icon='obj' font='tools' color='#13CE66' style={{fontSize: 20}} className='mr-10' title='对象类型数据' />
                let lazy = intf.lazy
                    ? <span>
                        <FontIcon icon='lazy' font='tools' className='mr-5' title='延时' />
                        <span className='mr-10'>{intf.lazyTime}</span>
                    </span>
                    : null;
                return (
                    <Col grid={0.25}>
                        <Card style={{color: '#20A0FF'}}
                            className='mb-15 project-item animated flipInX'>
                            <div style={{whiteSpace: 'nowrap'}}>
                                <FontIcon icon='api' font='tools' style={{fontSize: 30}} className='mr-10' />
                                {
                                    intf.schema
                                    ? <FontIcon icon='rule' font='tools' className='mr-10' style={{fontSize: 20}} color='#13CE66' />
                                    : null
                                }
                                {type}
                                <div className='pull-right mr-10 mt-10' style={{whiteSpace: 'nowrap'}}>
                                    {lazy}
                                    <FontIcon icon='request' font='tools' className='mr-5' title='请求数' />
                                    <span className='mr-10'>{intf.reqNum}</span>
                                    {/* <FontIcon icon='clock' font='tools' className='mr-10' title='创建时间' />
                                    <span>{intf.ct_time}</span> */}
                                </div>
                            </div>
                            <div style={{fontSize: 20, position: 'relative'}}>
                                <Link to={`/interface/${intf.id}`}>
                                    <span className='mr-15'>{intf.url}</span>
                                </Link>
                                <span style={{position: 'absolute', right: 10, top: 0}}>
                                    <FontIcon className='text-success mr-5' icon='copy' font='tools'
                                        style={{fontSize: 15}} title='复制接口'
                                        onClick={this.showCopyConfirm.bind(this, intf.id)} />
                                    <FontIcon className='text-danger' icon='delete' font='tools'
                                        style={{fontSize: 15}} title='删除接口'
                                        onClick={this.showDeleteConfirm.bind(this, intf.id)} />
                                </span>
                            </div>
                            {
                                intf.ispassed
                                ? <FontIcon icon='pass' font='tools' className='mr-10' style={{fontSize: 65, position: 'absolute', right: -13, top: -21}} />
                                : null
                            }
                        </Card>
                    </Col>
                );
            });
        }
        return null;
    }

    /**
     * 渲染列表
     * @return {[type]} [description]
     */
    renderInterfaces(){
        let {state} = this.props;
        let {interfacesData, layout} = state;

        if(interfacesData){
            if(layout === 'list'){
                return this.listInterfaces(interfacesData.interfaces);
            }else{
                return <Row>{this.gridInterfaces(interfacesData.interfaces)}</Row>;
            }
        }

        return null;
    }

    /**
     * 处理某些状态信息
     * @return {[type]} [description]
     */
    delSomeStatus(){
        // 处理删除状态
        this.delDeleteStatus();
        // 处理复制状态
        this.delCopyStatus();
    }

    /**
     * 处理删除状态
     * @return {[type]} [description]
     */
    delDeleteStatus(){
        let {state, params, actions} = this.props;
        let {deleteFlag} = state;

        if(deleteFlag){
            Notification.close('delete_confirm');
            if(!deleteFlag.success){
                Notification.error({
                    title: '提示',
                    desc: '删除失败'
                });
            }else{
                actions.list(params.projectId);
            }
        }
    }

    /**
     * 处理复制状态
     * @return {[type]} [description]
     */
    delCopyStatus(){
        let {state, params, actions} = this.props;
        let {copyFlag} = state;

        if(copyFlag){
            Notification.close('copy_confirm');
            if(!copyFlag.success){
                Notification.error({
                    title: '提示',
                    desc: '复制失败'
                });
            }else{
                actions.list(params.projectId);
            }
        }
    }

    render(){
        let {state, params} = this.props;
        let {layout, interfacesData} = state;
        // 处理某些状态信息
        this.delSomeStatus();

        return (
            <div style={{padding: 50}} key='interface_list'>
                <div className='inner-vertical-align'>
                    <FontIcon font='tools' icon='apis' color='#20A0FF' className='mr-10' style={{fontSize: 50}} />
                    <span>{interfacesData ? interfacesData.project.alias : ''}
                        （/{interfacesData ? interfacesData.project.name : ''}）项目接口列表
                    </span>
                    <span className='pull-right mt-20' style={{fontSize: 14}}>
                        <Link to={`/interfaces_add/${params.projectId}`}>
                            <Button theme='primary' raised className='mr-10'>添加接口</Button>
                        </Link>
                        <ButtonGroup style={{color: '#20A0FF'}} onSelect={this.switchLayout.bind(this)}>
                            <Button icon='th-large' theme="primary" active={layout === 'grid'} data-type='grid'></Button>
                            <Button icon='th-list' theme="primary" active={layout === 'list'} data-type='list'></Button>
                        </ButtonGroup>
                    </span>
                </div>
                {this.renderInterfaces()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    state: state.interfaces,
    params: props.params,
    match: props.match
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
