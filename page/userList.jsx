import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import {configUrl,Ajax} from "common/common";

export default class Index extends Component{
    render(){
        return <div>
            <a onClick={this.handleClick}>asdasda</a>
        </div>
    }

    handleClick = ()=>{
        console.log(this)
    }

    state={
        name:"asdasdsss"
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:"111"
            });
        },1000)
    }
}

class A extends Component{
    render(){
        return <div>
            <a onClick={this.handleClick}>asdasda</a>
        </div>
    }

    handleClick = ()=>{
        console.log(this)
    }
    // state = {
    //     name:"chenze"
    // }
    // componentWillMount(){
    //     console.log("componentWillMount");
    // }
    // componentDidMount(){
    //     console.log("componentDidMount");
    //     // this.setState({
    //     //     name:"111"
    //     // });
    //     // setTimeout(()=>{
    //     //     this.setState({
    //     //         name:"222"
    //     //     });
    //     // },1000);
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log(this.props);
    //     console.log(nextProps);
    //     console.log("shouldComponentUpdate");
    //     return this.props.a!==nextProps.a;
    // }

    // componentWillReceiveProps(a,b){
    //     console.log(this.props);
    //     console.log(a)
    //     console.log("componentWillReceiveProps");
    // }

    // componentWillUpdate(){
    //     console.log("componentWillUpdate");
    // }
    // componentDidUpdate(){
    //     console.log("componentDidUpdate");
    // }
}