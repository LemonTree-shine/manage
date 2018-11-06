import React,{Component,ReactDOM,createContext} from "react";
import reactDOM,{render} from "react-dom";

var ContextTheme = createContext({},(pre,next)=>{
    console.log(pre,next,i++);
    return i;
});

console.log(ContextTheme);

export default class Index extends Component{
    render(){
        return <ContextTheme.Provider value={this.state}>
            <Header/>
        </ContextTheme.Provider>
    }
    state = {};
    componentDidMount(){  

    }
}

class Header extends Component{
    render(){
        return <div>
            <Son/>
        </div>
    }
}

class Son extends Component{
    render(){
        /**
             * 上面说到的第二个属性Consumer就在这里用到啦！
             * 其实ContextTheme的Consumer属性也是一个react组件，如果说Provider是传context值的，那么Consumer就可以取到context值啦！
             * 要注意的一点就是，Consumer组件是通过render prop模式传值的，它的children是一个方法，参数就是context，返回的值即为render的值
             * 在返回值中写组件就好了，context也能拿到；
            */
        return <ContextTheme.Consumer>
            {context=>{
                return <div style={{"color":context.color}}>hello world</div>
            }}
        </ContextTheme.Consumer>
    }
}