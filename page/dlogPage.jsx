import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

// import Form,{Input} from "../component/form/form.jsx";
import Button from "../component/button/button.jsx";
import Dlog from "../component/dlog/dlog.jsx";

export default class DlogPage extends Component{
	render(){
		return (<div>
            <Button className="c-button-primary c-space" onClick={this.handleClick}>调用静态方法</Button>
			<Button className="c-button-primary c-space" onClick={this.handleClick2}>调用非静态方法</Button>
			<Button className="c-button-primary" onClick={this.handleClick3}>组件继承使用弹窗</Button>
        </div>)
	}
	handleClick = ()=>{
		Dlog.show("温馨提示","调用静态方法","success",()=>{
			alert(123123);
			return false;
		});

	}
	handleClick2 = ()=>{
		var dlog = new Dlog();
		dlog.content = "使用new操作弹窗";
		dlog.title = "操作提示";
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

export class TestDlog extends Dlog{
	constructor(){
		super();
	}
	content = "继承方式操作弹窗";
    title = "温馨提示";
    handleOk = ()=>{
        alert(123);
        this.close();
    }
    
}