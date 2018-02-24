import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { Provider,connect } from 'react-redux';
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from "./app.jsx";
import Dlog,{TestDlog} from "../component/dlog.jsx";
import { debug } from "util";

import todos from "../redux/reduce.js"

class Test2 extends Component{
    render(){
        return (<div onClick={this.test}>调用静态方法的弹窗</div>)
    }
    test = ()=>{
        alert(123);
    }
}

class Test extends Component{
	render(){
		return (<div>
			<button onClick={this.handleClick}>点击我调用的是静态方法</button>
			<button onClick={this.handleClick2}>点击我调用的是非静态方法</button>
			<button onClick={this.handleClick3}>组件继承使用弹窗</button>
		</div>)
	}
	handleClick = ()=>{
		Dlog.show(<Test2/>,()=>{
			alert(123123);
			return false;
		});

	}
	handleClick2 = ()=>{
		var dlog = new Dlog();
		dlog.content = <Test2/>;
		dlog.handleOk = ()=>{
			alert(123);
			dlog.close();
		}
		dlog.show();
	}

	handleClick3 = ()=>{
		var dlog = new TestDlog();
		dlog.show();
	}
}



const store = createStore(todos,applyMiddleware(thunk));

function showDlog(){
	var odiv = document.createElement("div");
	odiv.className = "loading";
	odiv.innerHTML = "数据加载中";
	document.body.appendChild(odiv);
}

function hideDlog(){
	if(document.querySelector(".loading")){
		document.querySelector(".loading").remove();
	}else{
		return false;
	}
}

function changeName(url){
	return function(dispatch){
		//showDlog();
		//showDlog();
		new Promise((resolve,reject)=>{
			setTimeout(() => {
				resolve(url);
			}, 2000);
		}).then((value)=>{
			dispatch({
				type: 'ADD_TODO',
				name: value
			});
			return value;
		}).then((value)=>{
			new Promise((resolve,reject)=>{
				setTimeout(() => {
					resolve(value);
				}, 2000);
			}).then((value)=>{
				dispatch({
					type: 'ADD_TODO',
					name: value+"adasdasdsadas"
				});
			});
		});
			
	}
}


class Atest extends Component{
	render(){
		return (<div>
			<span onClick={this.handleClick}>{this.props.data.todos1.name}</span>
			<Demo2 {...this.props}/>
			{/* <div onClick = {this.returnAll}>还原</div> */}
		</div>)
	}
	constructor(){
		super();
		console.log(this);
	}
	handleClick = ()=>{
		//console.log(this.props.dispatch);
		this.props.dispatch(changeName("https://www.baidu.com"));
	}
	returnAll = ()=>{
		this.props.dispatch({
			type: 'DEFAULT'
		});
	}
}

class Demo2 extends Component{
	render(){
		return (<div onClick={this.handleClick}>{this.props.data.todos2.age}</div>)
	}
	constructor(){
		super();
		console.log(this);
	}
	handleClick = ()=>{
		console.log(this.props.dispatch);
		this.props.dispatch({
			type: 'ADD_TODO2',
			age: 200
		});
	}
}


const mapStateToProps = (state) => {
	return {
	  data: state
	}
}
const Comp = connect(mapStateToProps)(Atest);


reactDOM.render(
	//<App/>,
	<Test/>,
	// <Provider store={store}>
	// 	<Comp/>
	// </Provider>,
	document.getElementById('contain')
);



