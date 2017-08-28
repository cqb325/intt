import React, {Component} from 'react';
import {Card, FontIcon, ButtonGroup, Button, Row, Col, Notification, Form, FormControl} from 'components';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import actions from 'actions/mock/projects';

class Page extends Component{
    componentWillMount(){
        let {actions} = this.props;
        actions.list();
    }

    /**
     * 删除确认
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    deleteConfirm(id){
        Notification.close('delete_confirm');
        Notification.question({
            title: 'Tip',
            duration: 0,
            key: 'delete_confirm',
            desc: 'delete Project ?',
            btn: <Button flat theme='primary' onClick={this.deleteProject.bind(this, id)}>confirm</Button>
        });
    }

    /**
     * 删除项目
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
     */
    deleteProject(id){
        let {actions} = this.props;
        actions.deleteProject(id);
    }

    /**
     * 项目列表展示
     * @param  {[type]} projects [description]
     * @return {[type]}          [description]
     */
    listProjects(projects){
        if(projects){
            return projects.map((project)=>{
                return (
                    <Card style={{color: '#20A0FF', minWidth: 600}}
                        className='mb-15 animated zoomIn'>
                        <FontIcon icon='mock' font='tools' style={{fontSize: 30}} />
                        <div className='pull-right mr-10'>
                            <FontIcon icon='apis' font='tools' className='mr-10' title='接口数' />
                            <span className='mr-10'>{project.interfaceNum}</span>
                            <FontIcon icon='clock' font='tools' className='mr-10' />
                            <span>{project.ct_time}</span>
                        </div>
                        <div style={{fontSize: 24}}>
                            <Link to={'/interfaces/' + project.id}>
                                <span className='mr-15'>{project.alias}</span>
                                <span className='text-promote'>{'/' + project.name}</span>
                            </Link>
                            <span className='pull-right'>
                                <FontIcon icon='delete' title='删除项目' font='tools' className='mr-10' color='red' onClick={this.deleteConfirm.bind(this, project.id)} />
                            </span>
                        </div>
                    </Card>
                );
            });
        }else{
            return null;
        }
    }

    /**
     * 格子样式渲染
     * @param  {[type]} projects [description]
     * @return {[type]}          [description]
     */
    gridProjects(projects){
        if(projects){
            return projects.map((project)=>{
                return (
                    <Col grid={0.25}>
                        <Card style={{color: '#20A0FF'}} className='mb-15 project-item animated flipInX'>
                            <div style={{fontSize: 24}} className='inner-vertical-align'>
                                <Link to={'/interfaces/'+project.id}>
                                    <span style={{color: '#20A0FF'}}>
                                        <FontIcon icon='mock' font='tools' style={{fontSize: 30}} className='mr-10' />
                                        <span className='mr-15' style={{whiteSpace: 'nowrap'}}>{project.alias}</span>
                                    </span>
                                </Link>
                            </div>
                            <div className='mb-15'>
                                <span className='text-promote'>{'/' + project.name}</span>
                            </div>
                            <div>
                                <FontIcon icon='apis' font='tools' className='mr-10' title='请求数' />
                                <span className='mr-10'>{project.interfaceNum}</span>
                                <FontIcon icon='clock' font='tools' className='mr-10' title='创建时间' />
                                <span>{project.ct_time}</span>
                                <span className='pull-right'>
                                    <FontIcon icon='delete' title='删除项目' font='tools' className='mr-10'
                                        color='red' onClick={this.deleteConfirm.bind(this, project.id)} />
                                </span>
                            </div>
                        </Card>
                    </Col>
                );
            });
        }else{
            return null;
        }
    }

    /**
     * 渲染项目
     * @return {[type]} [description]
     */
    renderProjects(){
        let {state} = this.props;
        let {projects, layout} = state;

        if(layout === 'list'){
            return this.listProjects(projects);
        }else{
            return <Row>{this.gridProjects(projects)}</Row>;
        }
    }

    /**
     * 切换列表模式
     * @param  {[type]} btn [description]
     * @return {[type]}     [description]
     */
    switchLayout(btn){
        let type = btn.props["data-type"];
        let {actions} = this.props;
        actions.switchLayout(type);
    }

    /**
     * 保存项目
     * @return {[type]} [description]
     */
    saveProject(){
        let {actions} = this.props;
        if (this.refs.form.isValid()) {
            actions.saveProject(this.refs.form.getFormParams());
        }
    }

    /**
     * 打开新增项目的弹框
     * @return {[type]} [description]
     */
    openAddProject(){
        Notification.open({
            duration: 0,
            key: 'add_project',
            title: 'add project',
            desc: <Form ref={(ref)=>{this.refs.form = ref;}} labelWidth={50} useDefaultSubmitBtn={false} method='ajax'>
                <FormControl type='text' name='alias' label='name: ' required />
                <FormControl type='text' name='name' label='url: ' required
                    rules={{remote: '/project/exist'}} messages={{remote: '已存在'}} />
            </Form>,
            btn: <Button flat theme='primary' onClick={this.saveProject.bind(this)}> save </Button>
        });
    }

    /**
     * 清除数据
     * @return {[type]} [description]
     */
    componentWillUnmount(){
        let {actions} = this.props;
        actions.clear();
        Notification.clear();
    }

    render(){
        let {state, actions} = this.props;
        let {layout, addProjectRet, deleteProjectRet} = state;
        if(addProjectRet){
            Notification.close('add_project');
            actions.list();
        }
        if(deleteProjectRet){
            Notification.close('delete_confirm');
            if(!deleteProjectRet.success){
                Notification.error({
                    title: '提示',
                    desc: '删除失败'
                });
            }else{
                actions.list();
            }
        }
        return (
            <div style={{padding: 50}}>
                <div className='inner-vertical-align'>
                    <FontIcon font='tools' icon='mock' color='#20A0FF' className='mr-10' style={{fontSize: 50}} />
                    <span>Mock 项目</span>
                    <span className='pull-right mt-20' style={{fontSize: 14}}>
                        <Button onClick={this.openAddProject.bind(this)} theme="primary" className='mr-10'>添加项目</Button>
                        <ButtonGroup style={{color: '#20A0FF'}} onSelect={this.switchLayout.bind(this)}>
                            <Button icon='th-large' theme="primary" active={layout === 'grid'} data-type='grid'></Button>
                            <Button icon='th-list' theme="primary" active={layout === 'list'} data-type='list'></Button>
                        </ButtonGroup>
                    </span>
                </div>
                {this.renderProjects()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    state: state.mockState
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
