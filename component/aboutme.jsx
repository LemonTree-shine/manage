import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink } from 'react-router-dom';

export default class AboutMe extends Component{
    render(){
        return (<div className="x-aboutme">
            关于我的页面
        </div>)
    }
}