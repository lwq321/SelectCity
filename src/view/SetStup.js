'use strict'
import React from 'react'
import Login from '../view/Login'
import Start from '../view/Start'
import FlatListView from "./FlatListView";
import HomeMain from "./HomeMain";
import Home from '../view/Home'
import Bill from '../view/Bill'
import Me from '../view/Me'
import Navbar from '../view/Navbar'
import TestNavbar from '../view/TestNavbar'
import DeatilParam from '../view/DeatilParam'
import CityPicker from '../demo/CityPicker'

class setStackNavigator {

    constructor(props, context) {
        this.lastBackPressed = 0;
    }

    static addData = (data, components) => {
        let Item = {...data};
        for (let i = 0; i < components.length; i++) {
            let key = components[i].component;
            let title = components[i].title;
            let route = components[i].route;
            Item[key] = {
                screen: route,
                navigationOptions: {
                    title: title
                }
            }
        }
        return Item;
    }

    static set() {
        this.data = {
            //tab
            TestNavbar:{screen:TestNavbar},
            Login: {screen: Login},
            Start:{screen:Start},
            FlatListView:{screen:FlatListView},
            HomeMain:{screen:HomeMain},
            Home:{screen:Home},
            Me:{screen:Me},
            Bill:{screen:Bill},
            DeatilParam:{screen:DeatilParam},
            Navbar:{screen:Navbar},
            CityPicker:{screen:CityPicker}
        

        }

        // this.data = this.addData(this.data, components)

        return this.data
    }

    // componentDidMount() {
    //     // LyProgressHud.showHud();
    //     BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid );
    // }
    //
    // componentUnWillMount(){
    //     BackHandler.addEventListener('hardwareBackPress', this._onBackAndroid);
    // }
    //
    // _onBackAndroid=()=>{
    //     console.warn('111111111');
    //     // let now = new Date().getTime();
    //     // if(now - this.lastBackPressed < 2500) {
    //     //     return false;
    //     // }
    //     // this.lastBackPressed = now;
    //     // Toast.showShortCenter('再点击一次退出应用');
    //     return true;
    // }
}
export default setStackNavigator