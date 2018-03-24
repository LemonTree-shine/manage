import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Form,{Input} from "../component/form/form.jsx";
import Button from "../component/button/button.jsx";
import Select,{ListItem} from "../component/select/select.jsx";

import DatePick from "../component/datepick/datepick.jsx";

export default class FormPage extends Component{
	render(){
		return (<div>
            
            <Form ref="form" onSubmit={this.handleSubmit}>
                <label>开始时间：</label>
                <DatePick  className="c-space" name="startName" format="yyyy/MM/dd HH:mm:ss" type="datetime" theme="#ff0000" min="2018-02-01" max="2018-03-01" done={(value, date, endDate)=>{console.log(value)}} mark={{"0-06-01":"儿童节"}}/>
                <label>结束时间：</label>
                <DatePick  className="c-space" name="endName"/>
                <label>年龄：</label>
                <div className="c-textBox c-space">
                    <Input name="userName" required value={12}/>
                </div>
                <label>邮箱地址：</label>
                <div  className="c-textBox c-space">
                    <Input name="age" required pattern={/^.+@.+\.com$/} patternmessage="邮箱格式有错误" value="18815288453@163.com"/>
                </div>
                {/* <label>状态：</label>
                <Select name="status" placeholder="请选择" value="code1">
                    <ListItem code="code1">第1个</ListItem>
                    <ListItem code="code2">第2个</ListItem>
                </Select>
                <Select name="status2" placeholder="请选择" value="code1">
                    <ListItem code="code1">第1个</ListItem>
                    <ListItem code="code2">第2个</ListItem>
                </Select> */}
                <div style={{marginTop:"10px"}}>
                    {/* <input type="submit" defaultValue="submit"/> */}
                    <Button className="c-button-primary" onSubmit = {this.handleSubmit}>提交</Button>
                </div>
            </Form>
        </div>)
	}
    handleSubmit = (value)=>{
        if(this.refs.form.onvalid){
            alert("恭喜你，通过了验证");
            console.log(this.refs.form);
        }else{
            alert("不要意思，没有通过验证哦！");
        }
    }
}