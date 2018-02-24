import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink,HashRouter } from 'react-router-dom';

import "../style/index.less";

//引入组件
import Index from "../component/index.jsx";
import Live from "../component/live.jsx";
import Focus from "../component/focus.jsx";
import Find from "../component/find.jsx";
import AboutMe from "../component/aboutme.jsx";


class Main extends Component{
	render(){
		return (<div>
			<div className="c-index">
				{this.props.children}
			</div>
			<div id="app-footer">
				<div><NavLink activeClassName="active" exact to="/">首页aa</NavLink></div>
				<div><NavLink activeClassName="active" exact to="/live">直播sss</NavLink></div>
				<div><NavLink activeClassName="active" exact to="/focus">关注</NavLink></div>
				<div><NavLink activeClassName="active" exact to="/find">发现</NavLink></div>
				<div><NavLink activeClassName="active" exact to="/aboutme">我的</NavLink></div>
			</div>
		</div>);
	}


}


export default class App extends Component{
	render(){
		return (
			<BrowserRouter>
				<Main>
					<Route exact path="/" component={Index}></Route>
					<Route exact path="/live" component={Live}></Route>
					<Route exact path="/focus" component={Focus}></Route>
					<Route exact path="/find" component={Find}></Route>
					<Route exact path="/aboutme" component={AboutMe}></Route>
				</Main>
			</BrowserRouter>
		);
	}
	componentDidMount(){
		console.log(this);
	}

}

