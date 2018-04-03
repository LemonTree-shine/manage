import React,{Component,ReactDOM} from "react";
import reactDOM,{render} from "react-dom";

import CheckBox,{CheckBoxGroup} from "../component/checkbox/checkbox.jsx";
import Button from "../component/button/button.jsx";

export default class CheckBoxPage extends Component{
    render(){
        return (
            <div>
                <CheckBoxGroup ref={(input)=>{return this.thisCom = input}}>
                    <CheckBox name="book" value="看书"/>
                    <CheckBox name="sing" value="唱歌"/>
                    <CheckBox name="movie" value="看电影"/>
                </CheckBoxGroup>
                <br/>
                <Button onClick={this.handleClick}>点击</Button>
            </div>
        )
    }

    handleClick = ()=>{
        //debugger;
        console.log(this.thisCom);
        console.log(this.thisCom.value);
    }
}