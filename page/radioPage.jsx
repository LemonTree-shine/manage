import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Radio,{GroupRadio} from "../component/radio/radio.jsx"


export default class ButtonPage extends Component{
	render(){
		return (<GroupRadio>
			<Radio value="1" name="adress"/>
			<Radio value="2" name="adress"/>
			<Radio value="3" name="adress"/>
			<Radio value="4" name="adress"/>
		</GroupRadio>)
	}
}