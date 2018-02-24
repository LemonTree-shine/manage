import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";
import "../style/dlog.less"

export default class Dlog extends Component{
    render(){
        return (<div className="c-dlog" ref={div => {
                this.dlogElem = div
            }}>
            <div className="c-dlog-body" ref={div => {
                this.dlogBody = div
            }}>
                {this.dlogHead()}
                <div className="c-dlog-content">
                    {this.content}
                </div>
                {this.dlogFoot()}
            </div>
        </div>);
    }
    constructor(){
        super();
    }

    dlogHead = ()=>{
        return (<div className="c-dlog-head">{this.title}<span style={{"float":"right"}} onClick={this.close}>关闭</span></div>)
    }
    dlogFoot = ()=>{
        return (<div className="c-dlog-bottom">
            <button className="c-space default" onClick = {this.handleOk}>确定</button>
            <button onClick = {this.handleCancle}>取消</button>
        </div>)
    }

    /**
     * 弹窗标题的头部
     */
    title = "提示";


    /**
     * 弹窗的默认内容
     */
    content = "默认内容";


    /**
     * 弹窗关闭的函数
     */
    close = (e)=>{
        //console.log(this.dlogBody.className);
        this.dlogBody.className = "c-dlog-body c-dlog-body-hidden";
        new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve()
            },150)
        }).then(()=>{
            this.dlogElem.remove();
        })
        //return false;
        
    }


    /**
     * 弹窗显示的入口
     */
    show(){
        console.log(this);
        var oDiv = document.createElement("div");
        document.body.append(oDiv);
        reactDOM.render(
            this.render(),
            oDiv
        );
    }

    /**
     * 确认按钮
     */

    handleOk = ()=>{
        this.close();
    }

    /**
     * 取消按钮
     */
    handleCancle = ()=>{
        this.close();
    }


    /**
     * 默认的静态方法
     */
    static show(content,success){
        var r = new Dlog();
        r.content = content?content:r.content;
        if(success){
            r.handleOk = ()=>{
                let falg = success();
                //console.log(falg);

                //success不return false的时候，返回undefined
                if(falg == false){
                    
                }else{
                    r.close();
                }   
            }
        }
        r.show();
        return r;
    }
}


export class TestDlog extends Dlog{
	constructor(){
		super();
	}
	content = <Test/>;
    title = "温馨提示";
    handleOk = ()=>{
        alert(123);
        //this.close();
    }
    
}

class Test extends Component{
    render(){
        return (<div onClick={this.test}>aaa</div>)
    }
    test = ()=>{
        alert(123);
    }
}

