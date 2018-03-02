import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Form,{Input} from "../component/form/form.jsx";
import Button from "../component/button/button.jsx";

export default class FormPage extends Component{
	render(){
		return (<div>
            <Form ref="form" onSubmit={this.handleSubmit}>
                <label>年龄：</label>
                <div className="c-textBox c-space">
                    <Input name="userName" required requiredmessage="填写数据不能为空" patternmessage="只能填写数字" pattern={/^\d+$/} value={12}/>
                </div>
                <label>邮箱地址：</label>
                <div  className="c-textBox">
                    <Input name="age" required pattern={/^.+@.+\.com$/} patternmessage="邮箱格式有错误" value={123}/>
                </div>
                <div style={{marginTop:"10px"}}>
                    {/* <input type="submit" defaultValue="submit"/> */}
                    <Button className="c-button-primary" onSubmit = {this.handleSubmit}>提交</Button>
                </div>
            </Form>
        </div>)
	}
    handleSubmit = (value)=>{
        //var formDate = value;
        console.log(this.refs.form);
        console.log(this.refs.form.state);
        console.log(this.refs.form.state.onvalid);
        console.log(this.refs.form.state.value);
        //console.log(this.refs.form.refs.form);
        //this.find("#UploadDlog").reportValidity().valid
        if(this.refs.form.onvalid){
            alert("恭喜你，通过了验证");
        }else{
            alert("不要意思，没有通过验证哦！");
        }
    }
}