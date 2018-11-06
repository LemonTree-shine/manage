import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import {configUrl,Ajax} from "common/common";

export default class Index extends Component{
    render(){
        return <div>
            用户查询列表
        </div>
    }

    componentDidMount(){
        Ajax({
            url:configUrl + "getLeaveWord",
            type:"post",
            contentType:"application/json",
            success:function(data){
                console.log(data)
            }
        })
    }
}