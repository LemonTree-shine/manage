import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Button from "../component/button/button.jsx";
import Toast from "../component/toast/toast.jsx";

export default class ToastPage extends Component{
	render(){
		return (<div>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("默认右上角","")}>默认右上角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("左上角","leftTop")}>左上角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("左下角","leftBottom")}>左下角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("右下角","rightBottom")}>右下角</Button>
		</div>)
	}

	componentDidMount(){
		
		//Toast.show();
	}
	handleClick = (text,position)=>{
		Toast.show(text,position);
	}
}