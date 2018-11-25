/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Login from '../view/Login';
import {View} from  'react-native'
import Guide from '../view/Guide';

export default class Start extends Component{

    constructor(props){
        super(props);

        this.state={
            text:this.loadFromLocal()

        }
    }
    loadFromLocal = async () => {
        let loginType= await storage.load({
            key:'login'
        })
        this.setState({
            text:loginType
        })
        console.warn("登录类型："+loginType);
    }


    render() {
        // if(this.state.text==1){
            return (
                <View style={{flex: 1}}>
                    <Login navigation={this.props.navigation}/>

                </View>

            )
        // }else{
        //     return ( <Guide navigation={this.props.navigation}/>)
        //     navigate={this.props.navigation.navigate}
        // }
    }

}


