import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

// import Form,{Input} from "../component/form/form.jsx";
import Select,{ListItem} from "../component/select/select.jsx";

export default class SelectPage extends Component{
	render(){
		return (<Select name="hello" pervalue="第一个">
			<ListItem value="第一个">第1个</ListItem>
			<ListItem value="第二个">第2个</ListItem>
		</Select>)
	}

}
