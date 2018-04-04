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
import CheckBoxPage from "../page/CheckBoxPage.jsx";
import PaginatorPage from "../page/PaginatorPage.jsx";

class Main extends Component{
	render(){
		return (<div className="clearfix">
            <div className="c-head">
                <div className="title"><a href="#/">后台管理系统模板</a></div>
                <div className="loginInfo">{this.state.userInfo.userName},<a href="http://www.xiaogangji.com/blog2/index.html" target="_blank">退出</a></div>
            </div>
            <div className="c-nav">
                {this.props.nemu.map((value,index)=>{
                    return (<div onClick={()=>this.addTitleNav(value)} key={index}><NavLink className="c-nav-link" activeClassName="active" exact to={value.link}>{value.name}</NavLink></div>)
                })}
			</div>
			<div className="c-contain">
                <div className="c-control-nav">
                    {this.state.titleNav.map((value,index)=>{
                        return (<NavLink key={index} className="c-title-nav" activeClassName="active" exact to={value.link}>
                            {value.name}
                            <div className="nav-close" onClick={()=>this.closeNav(index)}>x</div>
                        </NavLink>)
                    })}
                </div>
                <Route exact path="/" component={Index}></Route>
                <Route exact path="/button" component={ButtonPage}></Route>
                <Route exact path="/form" component={FormPage}></Route>
                <Route exact path="/dlog" component={DlogPage}></Route>
                <Route exact path="/select" component={SelectPage}></Route>
                <Route exact path="/toast" component={ToastPage}></Route>
                <Route exact path="/radio" component={RadioPage}></Route>
                <Route exact path="/checkBox" component={CheckBoxPage}></Route>
                <Route exact path="/paginator" component={PaginatorPage}></Route>  
			</div>
		</div>);
    }
    constructor(){
        super();
        var setTitleNav = [];
        if(window.sessionStorage.navDate){
            setTitleNav = JSON.parse(window.sessionStorage.navDate);
        }else{
            setTitleNav = [{
                name:"首页",
                link:"/"
            }];
            window.sessionStorage.navDate = JSON.stringify(setTitleNav);
        }
        this.state = {
            userInfo:{},
            titleNav:setTitleNav
        }
    }
    componentDidMount(){
        this.setState({
            userInfo:{
                userName:"chen.ze",
            }
        });
    }
    closeNav = (index)=>{
        //debugger;
        var newNav = JSON.parse(window.sessionStorage.navDate);
        newNav.splice(index,1);
        window.sessionStorage.navDate = JSON.stringify(newNav);
        this.setState({
            titleNav:JSON.parse(window.sessionStorage.navDate)
        },()=>{
            if(newNav.length){
                location.replace("#"+newNav[newNav.length-1].link);
            }else{
                location.replace("#/");
            }
            
        });
    }
    addTitleNav = (value)=>{
        if(window.sessionStorage.navDate){
            var pushFlag = true;
            var add = window.sessionStorage.navDate;
            var newAdd = JSON.parse(add);
            for(var i = 0;i < newAdd.length;i++){
                if(newAdd[i].link == value.link){
                    pushFlag = false;
                }
            }

            if(pushFlag){
                newAdd.push(value);
                window.sessionStorage.navDate = JSON.stringify(newAdd);
            } 
        }else{
            var add = [];
            add.push(value);
            window.sessionStorage.navDate = JSON.stringify(add);
        }
        //console.log(window.sessionStorage);
        this.setState({
            titleNav:JSON.parse(window.sessionStorage.navDate)
        });
    }
}

export default class Control extends Component{
	render(){
		return (
			<HashRouter>
				<Main nemu={this.state.menuData}/>	
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

