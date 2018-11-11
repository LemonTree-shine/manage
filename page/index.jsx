import React,{Component,ReactDOM,createContext} from "react";
import reactDOM,{render} from "react-dom";
import PropTypes from 'prop-types';

export default class Index extends Component{
    render(){
        return <div>
            <ProviderCom>
                <div>asdasd</div>
                <AAA/>
            </ProviderCom>
        </div>
    }
}

var obj = {
    color:"red"
}

var ContextTheme = createContext({});

class ProviderCom extends Component{
    render(){
        return <ContextTheme.Provider value={this.state}>
            {this.props.children}
        </ContextTheme.Provider>
    }
    state = {
        ...obj,
        dispatch:(a)=>{
            this.setState(a)
        }
    };

}


class Test extends Component{
    render(){
        return <div>
            <div style={{color:this.props.procide.color}}>chenze</div>
            <CCC/>
        </div>
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.procide.dispatch({color:"blue"});
        },1000)
        
        console.log(this)
    }
}


class C extends Component{
    render(){
        return <div>123</div>
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.procide.dispatch({color:"orange"});
        },2000)
    }
}

var AAA = higrCom(Test);

var CCC = higrCom(C);

//用高阶组件处理contex传值问题
function higrCom(Com){
    return class extends Component{
        render(){
            return <ContextTheme.Consumer>
                {value=>{
                    return <Com procide={value}/>
                }}
            </ContextTheme.Consumer>
        }
    }
}





