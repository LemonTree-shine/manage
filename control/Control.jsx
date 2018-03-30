import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';

import "../style/control.less";

import {menu as getMenuDate} from "../mock/menu.js";


//加载页面
import Index from "../page/index.jsx";
import ButtonPage from "../page/buttonPage.jsx";
import FormPage from "../page/formPage.jsx";
import DlogPage from "../page/dlogPage.jsx";
import SelectPage from "../page/selectPage.jsx";
import ToastPage from "../page/toastPage.jsx";
import RadioPage from "../page/RadioPage.jsx";

class Main extends Component{
	render(){
		return (<div className="clearfix">
            <div className="c-head">
                <div className="title"><a href="#/">后台管理系统模板</a></div>
                <div className="loginInfo">{this.state.userInfo.userName},<a href="http://www.xiaogangji.com/blog2/index.html" target="_blank">退出</a></div>
            </div>
            <div className="c-nav">
                {this.props.nemu.map((value,index)=>{
                    return (<div key={index}><NavLink className="c-nav-link" activeClassName="active" exact to={value.link}>{value.name}</NavLink></div>)
                })}
			</div>
			<div className="c-contain">
				{this.props.children}
			</div>
		</div>);
    }
    constructor(){
        super();
        this.state = {
            userInfo:{}
        }
    }
    componentDidMount(){
        console.log(this);
        this.setState({
            userInfo:{
                userName:"chen.ze"
            }
        });
	}
}

export default class Control extends Component{
	render(){
		return (
			<HashRouter>
				<Main nemu={this.state.menuData}>
					<Route exact path="/" component={Index}></Route>
                    <Route exact path="/button" component={ButtonPage}></Route>
                    <Route exact path="/form" component={FormPage}></Route>
                    <Route exact path="/dlog" component={DlogPage}></Route>
                    <Route exact path="/select" component={SelectPage}></Route>
                    <Route exact path="/toast" component={ToastPage}></Route>
                    <Route exact path="/radio" component={RadioPage}></Route>
				</Main>
			</HashRouter>
		);
    }
    constructor(){
        super();
        this.state = {
            menuData:[]
        }
    }
	componentDidMount(){
        console.log(this);
        //alert(123);
        setTimeout(()=>{
            this.setState({menuData:getMenuDate});
        },100);
        
	}
}

