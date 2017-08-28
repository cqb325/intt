import React from 'react';
import {Layout, Sider, Menu, Card, Form, FormControl, Utils, TextArea} from 'components';
import Data2Form from './data2Form';
import ItemRender from './itemRender';
import Rules from './rules';
import Messages from './messages';
const {Content} = Layout;
const {UUID} = Utils;
const {Item} = Menu;

import Types from './types';
import './form.scss';

class Page extends React.Component{
    constructor(props){
        super(props);

        this.elements = {};
        let formEle = {
            identify: 'form',
            method: 'get',
            action: '',
            layout: 'stack-inline',
            items: []
        };
        this.elements[formEle.identify] = formEle;
        this.containerItem = formEle;
        this.state = {
            component: 'Form',
            ref: 'form',
            formData: {
                'Form': formEle
            }
        };
    }

    switchComponent(comp, ref){
        if (comp === 'Form'){
            this.refs.data2form.onClick(null);
            this.containerItem = this.state.formData.Form;
        }
        this.setState({
            component: comp,
            ref
        });
    }

    showProps(){
        let comp = this.state.component;
        let propTypes = Types[comp].types;
        let defaultValues = Types[comp]['default'];
        let lastProps = this.elements[this.state.ref];

        defaultValues = Object.assign(lastProps, defaultValues);
        let ret = [];
        for (let key in propTypes){
            if (Object.prototype.hasOwnProperty.call(propTypes, key)) {
                ret.push(this.showProp(key, propTypes[key], defaultValues[key]));
            }
        }
        if (this.refs.rules && this.refs.rules.compKey !== this.state.ref){
            this.refs.rules.compKey = this.state.ref;
            this.refs.rules.reset(lastProps.rules || {});
        }
        return ret;
    }

    showProp(name, type, val){
        if (type === 'string'){
            return this.showStringProp(name, type, val);
        }
        if (type === 'number'){
            return this.showNumberProp(name, type, val);
        }
        if (type === 'object'){
            return this.showObjectProp(name, type, val);
        }
        if (type instanceof Array){
            return this.showOneOfProp(name, type, val);
        }
        if (type === 'bool'){
            return this.showBooleanProp(name, type, val);
        }
        if (type === 'item'){
            return this.showItemProp(name, type, val);
        }
    }

    /**
     *
     * @param  {[type]} name [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    showStringProp(name, type, defaultValue){
        return (
            <FormControl key={name} value={defaultValue} type='text' name={name}
                label={name + ': '} onChange={this.changeProperty.bind(this, name, 'string')}
            />
        );
    }

    /**
     *
     * @param  {[type]} name [description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    showNumberProp(name, type, defaultValue){
        return (
            <FormControl key={name} value={defaultValue} type='number' name={name}
                label={name + ': '} onChange={this.changeProperty.bind(this, name, 'string')}
            />
        );
    }

    showObjectProp(name, type, defaultValue){
        return (
            <FormControl key={name} value={JSON.stringify(defaultValue)} type='textarea' name={name}
                label={name + ': '} height={50} onChange={this.changeProperty.bind(this, name, 'object')}
            />
        );
    }

    showOneOfProp(name, type, defaultValue){
        let data = type.map((item)=>{
            return {id: item, text: item};
        });
        return (
            <FormControl key={name} value={defaultValue} type='radio' name={name}
                label={name + ': '} data={data} stick onChange={this.changeProperty.bind(this, name, 'string')}
            />
        );
    }

    showBooleanProp(name, type, defaultValue){
        return (
            <FormControl
                key={name}
                checked={defaultValue}
                type='switch'
                name={name}
                label={name + ': '}
                size='small'
                onChange={this.changeProperty.bind(this, name, 'bool')} />
        );
    }

    showItemProp(name, type, defaultValue){
        return (
            <ItemRender
                key={name}
                name={name}
                value={defaultValue}
                onChange={this.changeProperty.bind(this, name, 'array')}
            />
        );
    }

    changeProperty(name, type, value){
        if (type === 'object'){
            try {
                if (value !== ''){
                    value = JSON.parse(value);
                }
            } catch (e){
                console.log(e);
            }
        }

        if (type === 'bool'){
            value = !value;
        }

        let compProps = this.elements[this.state.ref];
        compProps[name] = value;
        if (value === ''){
            delete compProps[name];
        }
        this.setState({
            formData: this.state.formData
        });

        this.getConfig();
    }

    /**
     * 更新验证规则
     * @param  {[type]} rules [description]
     * @return {[type]}       [description]
     */
    updateRules(rules){
        let compProps = this.elements[this.state.ref];
        if (compProps.type && compProps.type !== 'row'){
            compProps['rules'] = rules;
            this.setState({
                formData: this.state.formData
            });

            this.getConfig();
        }
    }

    updateMessages(messages){
        let compProps = this.elements[this.state.ref];
        if (compProps.type && compProps.type !== 'row'){
            compProps['messages'] = messages;
            this.setState({
                formData: this.state.formData
            });

            this.getConfig();
        }
    }

    onSelectItem(item){
        if (item){
            let type = item.getType();
            window.setTimeout(()=>{
                this.setState({
                    component: type,
                    ref: item.getIdentify()
                });
            }, 10);
        }
    }

    selectContainer(item){
        this.containerItem = item;
    }

    /**
     * 添加元素
     * @param {[type]} ele [description]
     */
    addElement(ele){
        if (this.containerItem.items){
            this.containerItem.items.push(ele);
        } else {
            if (!this.containerItem.children){
                this.containerItem.children = [];
            }
            this.containerItem.children.push(ele);
        }
    }

    getConfig(){
        let data = this.state.formData.Form;
        data = JSON.parse(JSON.stringify(data));
        delete data.identify;
        for (let i = 0; i < data.items.length; i++){
            delete data.items[i].identify;
            delete data.items[i].block;
            if (data.items[i].children){
                this.deleteIdentify(data.items[i].children);
            }
        }
        this.refs.result.setValue(JSON.stringify(data, null, 4));
    }

    /**
     * 删除identify
     * @param  {[type]} arr [description]
     * @return {[type]}     [description]
     */
    deleteIdentify(arr){
        for (let i = 0; i < arr.length; i++){
            delete arr[i].identify;
            delete arr[i].block;
        }
    }

    addControl(item){
        let type = item.props['data-item'];
        let block = item.props['block'];

        let ele = {
            identify: UUID.v4(),
            name: type,
            type: type,
            block: block,
            label: 'Undefined'
        };
        if (type === 'row'){
            ele.children = [];
            delete ele.label;
        }
        this.elements[ele.identify] = ele;
        if (type === 'row'){
            this.state.formData.Form.items.push(ele);
        } else {
            this.addElement(ele);
        }

        this.setState({
            formData: this.state.formData,
            component: type,
            ref: ele.identify
        });

        window.setTimeout(()=>{
            this.getConfig();
        }, 0);
    }

    onRemoveItem(){
        if (this.refs.rules){
            this.refs.rules.reset({});
        }
        this.getConfig();
    }

    onSortItem(){
        this.getConfig();
    }

    componentDidMount(){
        this.getConfig();
    }

    render(){
        return (
            <Layout>
                <Sider width={150}>
                    <Menu onClick={this.addControl.bind(this)} style={{width: 150}}>
                        <Item data-item='input'>Input</Item>
                        <Item data-item='inputnumber'>InputNumber</Item>
                        <Item data-item='radio'>Radio</Item>
                        <Item data-item='checkbox'>CheckBox</Item>
                        <Item data-item='switch'>Switch</Item>
                        <Item data-item='textarea'>TextArea</Item>
                        <Item data-item='upload'>Upload</Item>
                        <Item data-item='select'>Select</Item>
                        <Item data-item='datetime'>DateTime</Item>
                        <Item data-item='daterange'>DateRange</Item>
                        <Item data-item='row'>Row</Item>
                        <Item data-item='button'>Button</Item>
                        <Item data-item='label'>Label</Item>
                        <Item data-item='promote' block>Promote</Item>
                    </Menu>
                </Sider>
                <Content style={{padding: 0}} >
                    <Card title='表单'>
                        <div onClick={this.switchComponent.bind(this, 'Form', 'form')}>
                            <Data2Form ref='data2form' data={this.state.formData.Form}
                                onSelect={this.selectContainer.bind(this)}
                                onClick={this.onSelectItem.bind(this)}
                                onRemove={this.onRemoveItem.bind(this)}
                                onSort={this.onSortItem.bind(this)}
                            />
                        </div>

                        <div className='mt-20'>
                            <span>最终结构</span>
                            <TextArea autoHeight grid={1} ref='result' height={300} />
                        </div>
                    </Card>

                </Content>
                <Sider style={{width: 400}}>
                    <Card title='Props'>
                        <Form labelWidth={80} useDefaultSubmitBtn={false}>
                            {this.showProps()}
                        </Form>
                    </Card>
                    <Card title='Rules'>
                        <Rules ref='rules' onChange={this.updateRules.bind(this)} />
                    </Card>
                    <Card title='Messages'>
                        <Messages ref='messages' onChange={this.updateMessages.bind(this)} />
                    </Card>
                </Sider>
            </Layout>
        );
    }
}

export default Page;
