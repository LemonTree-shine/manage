import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Button from "../component/button/button.jsx";

export default class ButtonPage extends Component{
	render(){
		return (<div>
			<Button className="c-space">默认</Button>
			<Button className="c-button-primary c-space">主色调</Button>
			<Button className="c-button-success c-space">成功</Button>
			<Button className="c-button-warning c-space">警告</Button>
			<Button className="c-button-danger c-space">危险</Button>
			<Button className="c-button-danger c-space" disabled="disabled">禁用</Button>
			<Button className="c-button-primary c-button-small c-space">小尺寸</Button>
			<Button className="c-button-primary c-button-large c-space">大尺寸</Button>
		</div>)
	}
}