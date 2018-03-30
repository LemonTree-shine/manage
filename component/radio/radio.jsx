import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import "./radio.less";

export default class Radio extends Component{
    render(){
        return (<div className="c-radioBox">
            <input ref="thisRadio" value={this.props.value} className="c-radio" type="radio" name={this.props.name} onChange={(e)=>this.handleChange(e)}/>
            <div className={this.props.value == this.props.currentValue?"c-radioCss c-radioCss-active":"c-radioCss"}></div>
        </div>)
    }
    constructor(){
        super();
        this.state = {
            Css:""
        }
    }
    handleChange = (e)=>{
        this.props.propsFunction(e.target.value);
    }
    componentDidMount(){
        console.log(this);
    }
    
}
export class GroupRadio extends Component{
    render(){
        return <div>
            {
                React.Children.map(this.props.children,  (child)=>{
                    //return child;
                    var currentValue = {};
                    if(this.state.currentValue){
                        currentValue = {
                            currentValue:this.state.currentValue
                        }
                    }
                    return React.cloneElement(child, {
                        //父组件的方法挂载到props.showValue上，以便子组件内部通过props调用
                        propsFunction:this.propsFunction,
                        ...currentValue
                    })
                })
            }
        </div>
    }
    constructor(){
        super();
        this.state = {currentValue:""}
    }
    currentValue = "";
    propsFunction = (e)=>{
        //debugger;
        var a = new Date().getTime();
        this.setState({
            currentValue:e
        });
        this.currentValue = e;
        console.log(this);
    }
}