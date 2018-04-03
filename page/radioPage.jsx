import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Radio,{GroupRadio} from "../component/radio/radio.jsx";
import Button from "../component/button/button.jsx"


export default class ButtonPage extends Component{
	render(){
		return (
		<div>
			<GroupRadio ref = {(radio)=>{this.textInput = radio}}>
				<Radio value="1" name="adress"/>
				<Radio value="2" name="adress"/>
				<Radio value="3" name="adress"/>
				<Radio value="4" name="adress"/>
			</GroupRadio>
			<GroupRadio>
				<Radio value="1" name="name"/>
				<Radio value="2" name="name"/>
				<Radio value="3" name="name"/>
				<Radio value="4" name="name"/>
			</GroupRadio>
			<Button className="c-button-primary" onClick={this.handleClick}>点击</Button>
		</div>
		)
	}

	handleClick = ()=>{
		console.log(this.textInput);
	}

	componentDidMount(){
		console.log(this.textInput);
	}
}