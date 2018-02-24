import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import { BrowserRouter,StaticRouter, Route,Link,hashHistory,NavLink } from 'react-router-dom';

export default class Index extends Component{
    render(){
        return (<div className="index-page" ref="aaa">
            <div className="head">
                <input className="search" type="text"/>
            </div>
            <div className="banner-box" ref={el=>{this.banner = el}}>
                <ul className="ul-box"  ref={el=>{this.ulBox = el}} style={{
                    width:this.state.list.length*750+"px",
                    height:"300px",
                    left:this.state.index*750+"px"
                }}>
                    {this.state.list.map((value,index)=>{
                        return <li key={index}>{value}</li>
                    })}
                </ul>
                <ul className="changeBtn">
                    {this.state.list.map((value,index)=>{
                        return <li className={Math.abs(this.state.index)==index?"current":""} key={index}></li>
                    })}
                </ul>
            </div>
            <div className="nav-list">
                <div className="list-box">
                    <div className="list"></div>
                </div>
                <div className="list-box">
                    <div className="list"></div>
                </div>
                <div className="list-box">
                    <div className="list"></div>
                </div>
                <div className="list-box">
                    <div className="list"></div>
                </div>
                <div className="list-box">
                    <div className="list"></div>
                </div>
                <div className="list-box">
                    <div className="list"></div>
                </div>
                <div className="list-box">
                    <div className="list"></div>
                </div>
                <div className="list-box">
                    <div className="list"></div>
                </div>
            </div>
        </div>)
    }
    constructor(prop){
        super(prop);
        this.state = {
            list:[1,2,3,4,5],
            index:0
        }
    }
    componentDidMount(){
        var startX;
        var finishX;

        this.banner.addEventListener('touchstart', (evt)=>{
            evt.preventDefault();
            startX = evt.touches[0].pageX;
        }, false); 
        this.banner.addEventListener('touchend', (evt)=>{
            finishX = evt.changedTouches[0].pageX;
            if((finishX-startX)<0){
                this.scrollBanner(1);
            }
            if((finishX-startX)>0){
                //alert("向左");
                this.scrollBanner(0);
            }
        }, false); 
	}
    scrollBanner = (value)=>{ 
        this.setState((prevState, props)=>{
            if(value==0){
                if(prevState.index!=0){
                    return {
                        index:prevState.index+1
                    }
                }
            }else if(value == 1){
                if(Math.abs(prevState.index)<(prevState.list.length-1)){
                    return {
                        index:prevState.index-1
                    }
                }
            } 
        });
    }
    moveTest=(e)=>{
        
    }
}