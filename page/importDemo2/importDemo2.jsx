import React,{Component,ReactDOM} from "react";
import "./importDemo2.less";
import {configUrl,Ajax} from "common/common";
import a,{b} from "common/util"

export default class Index extends Component{
    render(){
        return <div className="c-importDemo2">hello world</div>
    }
    componentDidMount(){
        console.log(a);
        console.log(b);
    }
}