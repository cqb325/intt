import React, {Component} from 'react';
import {Card, FontIcon, Button, Form, FormControl, Spin, Notification, MessageBox} from 'components';
import { connect } from 'react-redux';
import JSONEditor from '../JSONEditor';
import { bindActionCreators } from 'redux';
import actions from 'actions/mock/interface_add';
import {Link} from 'react-router-dom';

class Page extends Component{
    /**
     * 保存接口数据
     * @return {[type]} [description]
     */
    saveInterface(){
        let {actions} = this.props;
        if(this.refs.form.isValid()){
            let data = this.refs.form.getFormParams();
            actions.save(data);
        }
    }

    /**
     * 返回
     * @return {[type]} [description]
     */
    goBack(){
        let {actions} = this.props;
        actions.goBack();
    }

    /**
     * 清空数据还原
     * @return {[type]} [description]
     */
    componentWillUnmount(){
        let {actions} = this.props;
        actions.clear();
        Notification.clear();
    }

    render(){
        let {state, params} = this.props;
        let {ret, isFetching} = state;

        if(ret && !ret.success){
            Notification.error({
                title: '提示',
                desc: '创建接口失败'
            });
        }

        let width = {width: 450};
        return (
            <Spin.SVGSpin spinning={isFetching}>
                <div style={{width: 580, margin: '0 auto', padding: '50px 0'}} key='add_interface'>
                    <Form ref='form' layout='stack-inline' labelWidth={80} useDefaultSubmitBtn={false}>
                        <FormControl type='hidden' name='prj_id' value={params.projectId} />
                        <FormControl type='text' ref='url' name='url' label='URL: ' itemStyle={width} required rules={{
                            remote: ()=>{
                                return '/interface/exist?prj_id=' + params.projectId + '&url=' + this.refs.url.getValue()
                            }
                        }} messages={{remote: '已存在'}} />
                        <FormControl type='switch' name='type' label='Type: ' checkedText='post' unCheckedText='get' />
                        <FormControl type='switch' name='jsonp' label='JSONP: ' checkedText='yes' unCheckedText='no' />
                        <Form.Row className='cm-form-inline'>
                            <FormControl type='switch' name='lazy' label='Lazy: ' checkedText='on' unCheckedText='off' />
                            <FormControl type='text' name='lazyTime' style={{width: 60}} grid={1} value={0} />
                            <span>ms</span>
                        </Form.Row>
                        <FormControl type='text' name='desc' label='Desc: ' height={80} itemStyle={width} />
                        <FormControl type='json' className='top-label-group' required name='template' label='Template: ' height={500} width={450} />
                    </Form>
                    <div style={{marginLeft: 90, marginTop: 60}}>
                        <Button raised theme='primary' onClick={this.saveInterface.bind(this)}>保 存</Button>
                    </div>
                    <MessageBox ref='tip' title='提示' msg='创建接口成功' open={ret && ret.success} confirm={this.goBack.bind(this)} />
                </div>
            </Spin.SVGSpin>
        );
    }
}

const mapStateToProps = (state, props) => ({
    state: state.interfaceAdd,
    params: props.params
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
