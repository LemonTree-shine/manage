import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Button from "../component/button/button.jsx";
import Toast from "../component/toast/toast.jsx";

export default class ToastPage extends Component{
	render(){
		return (<div>
			{/* <Button className="c-space">默认</Button>
			<Button className="c-button-primary c-space">主色调</Button>
			<Button className="c-button-success c-space">成功</Button>
			<Button className="c-button-warning c-space">警告</Button>
			<Button className="c-button-danger c-space">危险</Button>
			<Button className="c-button-danger c-space" disabled="disabled">禁用</Button>
			<Button className="c-button-primary c-button-small c-space">小尺寸</Button>
			<Button className="c-button-primary c-button-large c-space">大尺寸</Button> */}
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("默认右上角","")}>默认右上角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("左上角","leftTop")}>左上角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("左下角","leftBottom")}>左下角</Button>
			<Button className="c-button-primary c-space" onClick={()=>this.handleClick("右下角","rightBottom")}>右下角</Button>
			{/* <Toast/> */}
		</div>)
	}

	componentDidMount(){
		
		//Toast.show();
	}
	handleClick = (text,position)=>{
		Toast.show(text,position);
	}
}