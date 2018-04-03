import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import Paginator from "../component/paginator/paginator.jsx"

export default class PaginatorPage extends Component{
    render(){
        return (<div>
            <Paginator total={this.state.total} pageSize={25} onChange={this.handleChange}/>
        </div>)
    }
    constructor(){
        super();
        this.state = {
            total:300
        }
    }
    componentDidMount(){

    }

    handleChange = (e,s)=>{
        console.log(s);
    }
}