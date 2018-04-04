import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import { Button,CheckBox,CheckBoxGroup,DatePick,Dlog,Form,Input,Paginator,Radio,GroupRadio,Toast } from "../component/common.js";

export default class Index extends Component{
	render(){
		return (<div>
			<Form ref="thisForm" onSubmit={this.handleSubmit}>
				<div className="c-form-field">
					<label className="c-form-label">姓名：</label>
					<div className="c-textBox">
						<Input name="userName"/>
					</div>
				</div>
				<div className="c-form-field">
					<label className="c-form-label">电话号码：</label>
					<div className="c-textBox">
						<Input name="mobile" required pattern={/^\d{11}/} patternmessage="手机号码格式不正确"/>
					</div>
				</div>
				<div className="c-form-field">
					<label className="c-form-label">地址：</label>
					<div className="c-textBox">
						<Input name="adress"/>
					</div>
				</div>
				<div className="c-form-field">
					<label className="c-form-label">工作：</label>
					<div className="c-textBox">
						<Input name="job"/>
					</div>
				</div>
				<div className="c-form-field">
					<label className="c-form-label">上传时间：</label>
					<DatePick name="submitTime"/>
				</div>
				<div className="c-form-field">
					<label className="c-form-label">审批时间：</label>
					<DatePick name="approvalTime"/>
				</div>
				<div className="c-form-field">
					<label className="c-form-label"></label>
					<Button className="c-button-primary">查询</Button>
				</div>
			</Form>
			<div className="c-mb10">
				<Button className="c-button-primary" onClick={this.approval}>全部审批</Button>
			</div>
			<div className="c-table-box c-mb10">
				<table>
					<thead>
						<tr>
                            <th>序号</th>
                            <th>用户</th>
                            <th>用户类型</th>
                            <th>手机号</th>
                            <th>身份证号</th>
                            <th>银行卡</th>
                            <th>操作</th>
                        </tr>
					</thead>
					<tbody>
						{this.state.tableData.length?this.state.tableData.map((value,index)=>{
							return <tr key={index}>
								<td>{index+1}</td>
								<td>{value.userName}</td>
								<td>{value.type}</td>
								<td>{value.mobile}</td>
								<td>{value.idCard}</td>
								<td>{value.bankCard}</td>
								<td><a onClick={()=>this.update(value)}>修改</a></td>
							</tr>
						}):<tr>
							<td className="table-empty" colSpan='100'>(暂无数据)</td>
						</tr>}
					</tbody>
				</table>
			</div>
			<Paginator total={this.state.total} pageSize={20} onChange={this.getPaginatorData}/>
		</div>)
	}

	constructor(){
		super();
		this.state = {
			tableData:[],
			total:0
		}
	}

	handleSubmit = ()=>{
		console.log(this.refs.thisForm);
		if(this.refs.thisForm.onvalid){
			//alert(123);
			this.setState({
				tableData:this.mockData,
				total:this.mockData.length
			});
		}
	}

	approval = ()=>{
		Dlog.show("审批","确认全部审批？","warning",()=>{
			Dlog.show(undefined,"全部审批成功","success");
		});
	}
	update = (value)=>{
		var content = <div className="c-form-field">
			<label>电话号码：</label>
			<Input name="mobile" required pattern={/^\d{11}/} patternmessage="手机号码格式不正确" value={value.mobile}/>
		</div>;
		Dlog.show("修改",content,undefined,()=>{
			Dlog.show(undefined,"修改成功","success");
		});
	}

	getPaginatorData = (e,s)=>{
		console.log(e);
		console.log(s);
	}

	mockData = [{
		"userName":"tom",
		"type":"超级会员",
		"mobile":"18815278945",
		"idCard":"xxxxxxxxxxxxxx",
		"bankCard":"330xxxxxxxxxx6787"
	},{
		"userName":"tom",
		"type":"超级会员",
		"mobile":"18815278945",
		"idCard":"xxxxxxxxxxxxxx",
		"bankCard":"330xxxxxxxxxx6787"
	},{
		"userName":"tom",
		"type":"超级会员",
		"mobile":"18815278945",
		"idCard":"xxxxxxxxxxxxxx",
		"bankCard":"330xxxxxxxxxx6787"
	},{
		"userName":"tom",
		"type":"超级会员",
		"mobile":"18815278945",
		"idCard":"xxxxxxxxxxxxxx",
		"bankCard":"330xxxxxxxxxx6787"
	},{
		"userName":"tom",
		"type":"超级会员",
		"mobile":"18815278945",
		"idCard":"xxxxxxxxxxxxxx",
		"bankCard":"330xxxxxxxxxx6787"
	},{
		"userName":"tom",
		"type":"超级会员",
		"mobile":"18815278945",
		"idCard":"xxxxxxxxxxxxxx",
		"bankCard":"330xxxxxxxxxx6787"
	}]
}