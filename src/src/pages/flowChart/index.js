import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Raphael from 'raphael';
import {Utils, Dropdown, Menu} from 'components';
const {UUID} = Utils;
import './style.scss';

class Page extends Component{
    constructor(props){
        super(props);
        this.startX = 45;
        this.startY = 30;
        this.itemWidth = 175;
        this.itemHeight = 56;
        this.levelGap = 140;

        this.items = {};
        this.lines = {};
        this.pBoxs = {};
        this.tBoxs = {};

        let newData = [];
        //this.rebuildData(data, newData, 0, 0, 1, {});

        this.state = {
            data: newData
        };

        this.itemIndex = 0;
    }

    /**
     * [rebuildData description]
     * @param  {[type]} data    [description]
     * @param  {[type]} newData [description]
     * @param  {[type]} level   [description]
     * @param  {[type]} index   [description]
     * @return {[type]}         [description]
     */
    rebuildData(data, newData, level, index, total, parent){
        data.level = level;
        data.index = index;
        data.total = total;
        data.parent = parent;
        newData.push(data);
        if(data.items){
            data.items.forEach((item, index)=>{
                this.rebuildData(item, newData, level + 1, index, data.items.length, data);
            });
        }
    }

    componentWillMount(){
        fetch('http://192.168.105.202:8415/mock/flow/getFlowData').then((res)=>{
            return res.json();
        }).then((ret)=>{
            let newData = [];
            this.rebuildData(ret, newData, 0, 0, 1, {});

            this.setState({
                data: newData
            }, ()=>{
                this.renderLinks();
                this.renderBoxes();
            });
        });
    }

    componentDidMount(){
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        this.paper = Raphael(canvas, canvas.offsetWidth, canvas.offsetHeight - 10);

        setTimeout(()=>{
            this.renderLinks();
            this.renderBoxes();
        }, 0);
    }

    getCanvasSize(){
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);
        return {
            w: canvas.offsetWidth,
            h: canvas.offsetHeight
        };
    }

    renderItems(){
        let eles = this.state.data.map((item)=>{
            return <Item ref={(ref)=>{ this.items[item.id] = ref; }} data={item} key={this.itemIndex++} root={this} />;
        });

        return eles;
    }

    renderLinks(){
        let data = this.state.data;
        data.forEach((item)=>{
            if(item.level > 0){
                let id = item.id;
                let pos = item.position;
                let parentPos = item.parent.position;

                this.renderLink(id, pos, parentPos, item.ratio);
            }
        });
    }

    renderBoxes(){
        let data = this.state.data;
        data.forEach((item)=>{
            this.renderBox(item, 15);
        });
    }

    renderLink(id, pos, parentPos, ratio){
        let x = parentPos.x + this.itemWidth;
        let y = parentPos.y + this.itemHeight / 2;
        let itemx = pos.x;
        let itemy = pos.y + this.itemHeight / 2;

        let H = 56;
        if(ratio){
            H = Math.max(H * ratio / 100, 15) - 4;
        }

        let line = this.polyline(x, y, x + 100, y, itemx - 50, itemy, itemx, itemy, H);
        line.attr("fill", "#daecff");
        this.lines[id] = line;

        //this.renderBox(id, x, y, itemx, itemy, 15);
    }

    renderBox(item, h){
        let H = h + 6;
        if(item.level && !this.pBoxs[item.id]){
            let boxH = 56;
            if(item.ratio){
                boxH = Math.max(boxH * item.ratio / 100, 15);
            }
            let x = item.position.x;
            let y = item.position.y + this.itemHeight / 2;

            let box = this.paper.rect(x-6, y-boxH/2, 6, boxH).attr({"fill": "rgb(137, 183, 232)", "stroke-width": 0});
            this.pBoxs[item.id] = box;
        }

        if(item.items && item.items.length && !this.tBoxs[item.id]){
            let x = item.position.x + this.itemWidth;
            let y = item.position.y + this.itemHeight / 2;

            let box = this.paper.rect(x, y-H/2, 6, H).attr({"fill": "rgb(137, 183, 232)", "stroke-width": 0});
            this.tBoxs[item.id] = box;
        }
    }

    polyline(x, y, ax, ay, bx, by, zx, zy, H){
        var h = H / 2;
        zx = zx - 6;
        let lineWidth = 2;
        var path = [["M", x, y - lineWidth], ["C", ax, ay - lineWidth, bx, by - h, zx, zy - h],
            ["L", zx, zy + h], ["C", bx, by + h, ax, ay + lineWidth, x, y + lineWidth, "Z"]];
        return this.paper.path(path).attr({stroke: '#daecff', "stroke-width": 1, "stroke-linecap": "round"});
    }

    getFlowData(itemData){
        this.clearAllNextLevel(-1);
        fetch('http://192.168.105.202:8415/mock/flow/getFlowData').then((res)=>{
            return res.json();
        }).then((ret)=>{
            let newData = [];
            this.rebuildData(ret, newData, 0, 0, 1, {});

            this.setState({
                data: newData
            }, ()=>{
                this.renderLinks();
                this.renderBoxes();
            });
        });
    }

    getNextFlowData(item, itemData){
        this.clearAllNextLevel(itemData.level);

        fetch('http://192.168.105.202:8415/mock/flow/getNextFlowData').then((res)=>{
            return res.json();
        }).then((items)=>{
            itemData.items = items;

            let data = this.state.data;
            items.forEach((sub, index)=>{
                sub.level = itemData.level + 1;
                sub.index = index;
                sub.total = items.length;
                sub.parent = itemData;

                data.push(sub);
            });

            this.setState({
                data: data
            }, ()=>{
                items.forEach((sub, index)=>{
                    let id = sub.id;
                    let pos = sub.position;
                    let parentPos = sub.parent.position;

                    this.renderLink(id, pos, parentPos, sub.ratio);
                    this.renderBox(sub, 15);
                });
                this.renderBox(itemData, 15);

                this.updateCanvasSize();
            });
        });
    }

    updateCanvasSize(){
        let data = this.state.data;
        let last = data[data.length - 1];
        let level = last.level;
        let width = this.startX + (this.itemWidth + this.levelGap) * level + this.itemWidth;
        let canvas = ReactDOM.findDOMNode(this.refs.canvas);

        width = Math.max(width, canvas.clientWidth);
        width = width > canvas.clientWidth ? width + 50 : width;
        this.paper.setSize(width, canvas.offsetHeight - 10);
        let placeHelper = ReactDOM.findDOMNode(this.refs.placeHelper);
        placeHelper.style.width = width + 'px';
        placeHelper.style.height = canvas.clientHeight + 'px';
    }

    clearAllNextLevel(level){
        let data = this.state.data;
        for(let i = data.length - 1; i >= 0; i--){
            let item = data[i];
            if(item.level > level){
                data.splice(i, 1);
                let line = this.lines[item.id];
                if(line){
                    line.remove();
                    delete this.lines[item.id];
                }

                let box = this.pBoxs[item.id];
                if(box){
                    box.remove();
                    delete this.pBoxs[item.id];
                }
                let pbox = this.tBoxs[item.parent.id];
                if(pbox){
                    pbox.remove();
                    delete this.tBoxs[item.parent.id];
                }
            }
        }
    }

    render(){
        return (
            <div style={{width: '100%', height: '100%', position: 'relative', overflow: 'auto'}}>
                <div ref='canvas' style={{width: '100%', height: '100%'}}></div>
                <div ref='placeHelper' style={{position: 'absolute', top: '0', left: 0, width: '100%', height: '100%'}}>
                    {this.renderItems()}
                </div>
            </div>
        );
    }
}

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: props.data,
            active: false,
            x: 0,
            y: 0,
            hover: false
        };

        this.level = props.data.level;
        this.index = props.data.index;
        this.total = props.data.total;

        this.itemWidth = 175;
        this.itemHeight = 56;
        this.itemGap = 20;
        this.levelGap = 140;
    }

    isRoot(){
        return !this.level;
    }

    getParentPosition(){
        return this.state.data.parent.position;
    }

    position(){
        return {
            x: this.state.x,
            y: this.state.y
        }
    }

    renderItem(){
        let data = this.state.data;
        if(this.props.renderItem){
            return this.props.renderItem;
        }
        return <div>
            <div className='flow-ratio'>{data.ratio + '%'}</div>
            <div className='flow-item-name'>{data.name}</div>
        </div>;
    }

    setRoot(e){
        e.preventDefault();
        e.stopPropagation();

        this.props.root.getFlowData(this.state.data);
        return false;
    }

    renderTools(){
        if(this.level){
            let details = this.renderDetails();
            return (
                <div className='flow-item-tools' style={{display: this.state.hover ? '' : 'none'}}>
                    <i className='fa fa-gear' title='设为根节点' onClick={this.setRoot.bind(this)}></i>
                    <Dropdown ref='dropdown' action="click" overlay={details} onVisibleChange={this.updateContent.bind(this)}>
                        <i className='fa fa-list' title='查看详情'></i>
                    </Dropdown>
                </div>
            );
        }else{
            return null;
        }
    }

    updateContent(visible){
        if(visible){
            this.refs.dropdown.refs.trigger.popupRef.setContent(this.renderDetails());
        }
    }

    renderDetails(){
        let data = {
            count: Math.round((Math.random() * 1000)),
            time: Math.round((Math.random() * 100)),
            ratio: Math.round((Math.random() * 0.5) * 100) / 100
        };
        return <div className='flow-details'>
            <div>访问次数： {data.count}</div>
            <div>访问停留时间：{data.time}</div>
            <div>页面跳出率：{data.ratio}</div>
        </div>;
    }

    showTools(){
        if(this.level){
            if(this.props.root.lastHoverItem){
                this.props.root.lastHoverItem.hideTools();
            }
            this.props.root.lastHoverItem = this;
            this.setState({hover: true});
        }
    }

    hideTools(){
        if(this.level){
            this.setState({hover: false});
        }
    }

    getNextFlowData(){
        this.props.root.getNextFlowData(this, this.state.data);
    }

    componentDidMount(){
        let root = this.props.root;
        let parent = this.state.data.parent;
        let x = root.startX + (this.itemWidth + this.levelGap) * this.level;
        let y = 0;

        if (!this.level) {
            y = (root.getCanvasSize().h - this.itemHeight) / 2;
        }else{
            let parentPos = this.getParentPosition();
            let allH = (this.itemHeight + this.itemGap) * this.total - this.itemGap;
            let offsetH = parentPos.y + this.itemHeight / 2 - allH / 2;
            offsetH = Math.max(root.startY, offsetH);

            y = offsetH + (this.itemHeight + this.itemGap) * this.index;
        }

        this.setState({
            x: x,
            y: y
        });

        this.state.data.position = {
            x: x,
            y: y
        };
    }

    render(){
        let style = {
            position: 'absolute',
            left: this.state.x,
            top: this.state.y,
            width: this.itemWidth,
            height: this.itemHeight
        };
        return (
            <div className='flow-item' style={style}
                onClick={this.getNextFlowData.bind(this)}
                onMouseEnter={this.showTools.bind(this)}
                >
                {this.renderItem()}
                {this.renderTools()}
            </div>
        );
    }
}

export default Page;
