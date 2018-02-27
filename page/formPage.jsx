import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Form,{Input} from "../component/form/form.jsx";

export default class FormPage extends Component{
	render(){
		return (<Form ref="form" onSubmit={this.handleSubmit}>
            <div className="c-textBox">
                <Input name="userName" required requiredmessage="填写数据不能为空" patternmessage="只能填写数字" pattern={/^\d+$/} value={12}/>
            </div>
            <div  className="c-textBox">
                <Input name="age" required pattern={/^.+@.+\.com$/} patternmessage="邮箱格式有错误" value={123}/>
            </div>
            
            <input type="submit" defaultValue="submit"/>
        </Form>)
	}
    handleSubmit = (value)=>{
        var formDate = value;
        console.log(this.refs.form);
        //console.log(this.refs.form.refs.form);
        //this.find("#UploadDlog").reportValidity().valid
    }
}