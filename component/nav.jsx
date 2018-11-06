import React, { Component, ReactDOM } from "react";
import reactDOM, { render } from "react-dom";
import { BrowserRouter, StaticRouter, Route, Link, hashHistory, NavLink, HashRouter, IndexRoute, Switch, Redirect } from 'react-router-dom';
import { throws } from "assert";

var renderMenu = (menu, _this) => {
    return menu.map((value, index) => {
        return value.children && value.children.length ? <li className="li-f c-navmenu-collapsable" key={index}>
            <a href="javascript:;" onClick={(e) => { _this.expand(e) }}>{value.name}</a>
            <ul>
                {renderMenu(value.children, _this)}
            </ul>
            <i className="chevron-right fa fa-chevron-right"></i>
            {/* 菜单前面图标 */}
            {value.icon ? <i className={"nav-icon fa " + value.icon}></i> : null}
        </li> :
            <li title={value.name} key={index}>
                <NavLink activeClassName="current" onClick={(e) => { _this.changePage(e) }} to={value.link}>
                    {value.name}
                    {value.icon ? <i className={"nav-icon fa " + value.icon}></i> : null}
                </NavLink>
            </li>
    });
}

export default class Nav extends Component {
    render() {
        return <div className="c-nav-menu">
            <ul ref={(ul) => { this.menuUl = ul }} className="c-nav-ul">
                {renderMenu(this.menu, this)}
            </ul>
        </div>
    }
    constructor(props) {
        super(props);
    }

    menu = [{
        name: "用户管理",
        icon: "fa-address-book",
        children: [{
            link: "/userList",
            name: "用户列表查询"
        }, {
            name: "充值订单查询",
            children: [{
                link: "/userListdf",
                name: "用户列表查询"
            },
            {

                name: "三级菜单",
                children: [{
                    link: "/userList33344",
                    name: "用户列表查询"
                }]
            }]
        }]
    }, {
        name: "数据管理",
        icon: "fa-cubes",
        children: [{
            link: "/dataInfo",
            name: "用户信息管理"
        }, {
            link: "/bigData",
            name: "大数据信息"
        }]
    }, {
        link: "/car",
        icon: "fa-car",
        name: "汽车管理"
    }, {
        link: "/info",
        icon: "fa-envelope",
        name: "消息管理"
    }]

    componentDidMount() {
        if (this.menuUl.querySelector(".current")) {
            this.changePage(this.menuUl.querySelector(".current"));
            initExpand(this.menuUl.querySelector(".current").parentNode.parentNode.parentNode);
        }
    }

    //切换页面的情况
    changePage = (e) => {
        console.log(e.target);
        var target = e.target ? e.target : e;
        var navmenuSelect = this.menuUl.querySelectorAll(".c-navmenu-selected");
        navmenuSelect.forEach(elem => {
            elem.className = elem.className.replace(/ c-navmenu-selected/, "");
        })
        findParent(target.parentNode.parentNode.parentNode, this);
    }

    //收缩展开菜单
    expand = (e) => {
        var elem = e.target ? e.target.parentNode : e.parentNode.parentNode.parentNode;

        //判断是否过度中
        if (/c-navmenu-collapsing/.test(elem.className)) {
            return false;
        }

        //添加一个正在过渡中的class
        elem.className = elem.className + " c-navmenu-collapsing";

        if (/c-navmenu-expanded/.test(elem.className)) {
            elem.children[1].style.display = "block";
            var oh = elem.children[1].offsetHeight;
            elem.children[1].style.height = oh + "px";
            elem.className = elem.className.replace(/ c-navmenu-expanded/, "");
            setTimeout(function () {
                elem.children[1].style.transition = "height .2s ease";
                elem.children[1].style.height = "0px";
                setTimeout(function () {
                    //清除样式
                    elem.children[1].style = "";
                    elem.children[1].style.display = "none";
                    //清除过渡中的class
                    elem.className = elem.className.replace(/ c-navmenu-collapsing/, "");
                }, 220)
            }, 0);
        } else {
            elem.children[1].style.display = "block";
            var oh = elem.children[1].offsetHeight;
            elem.children[1].style.height = "0px";
            elem.className = elem.className + " c-navmenu-expanded";
            setTimeout(function () {
                elem.children[1].style.transition = "height .2s ease";
                elem.children[1].style.height = oh + "px";
                setTimeout(function () {
                    //清除样式
                    elem.children[1].style = "";
                    //清除过渡中的class
                    elem.className = elem.className.replace(/ c-navmenu-collapsing/, "");
                }, 220)
            }, 0);
        }
    }

}
//寻找所有指定父级元素
function findParent(elem, _this) {
    if (!elem) {
        return;
    }
    //console.log(elem.className);
    if (/c-navmenu-collapsable/.test(elem.className)) {
        elem.className = elem.className + " c-navmenu-selected"
        return findParent(elem.parentNode.parentNode);
    } else {
        return false;
    }
}

//默认展开选中的菜单
function initExpand(elem, _this) {
    console.log(elem);
    if (!elem) {
        return;
    }
    //console.log(elem.className);
    if (/c-navmenu-collapsable/.test(elem.className)) {
        elem.className = elem.className + " c-navmenu-expanded";
        return initExpand(elem.parentNode.parentNode);
    } else {
        return false;
    }
}