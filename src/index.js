import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter,IndexRoute,Switch,Redirect } from 'react-router-dom';
import {configUrl} from "../sdk/common";
import "../common/control.less";

import Nav from "component/nav.jsx"

//导入所有路由
import {router} from "./router";

class IndexPage extends Component{
	render(){
		return (<div>
			<div className="c-nav-head">
				<div className="logo-text">
					<Link to="index">后台系统模版</Link>
					<i className="logo fa fa-youtube" aria-hidden="true"></i>
				</div>
				<div className="login-user-info">
					admin
					<div className="login-out">退出</div>
				</div>
			</div>
			<Nav/>
			<div className="c-content">
				<Switch>
					{/* 首页必须有 */}
					<Route exact path="/" component={require(`page/index`).default}></Route>
					{/* 动态生成路由 */}
					{router.map((value,index)=>{
						return <Route key={index} path={"/"+value.split("page/")[1].replace(/(page\/|\.jsx)/g,"")} component = {require(`page/${value.split("page/")[1]}`).default}></Route>
					})}
				</Switch>
			</div>
		</div>)
	}
	constructor(props){
		super(props);
	}
	componentDidMount(){
		
	}
}

//渲染根节点
reactDOM.render(
	<HashRouter>
		<IndexPage/>
	</HashRouter>,
	document.getElementById('contain'),
	()=>{
		//console.log(123);
	}
);



