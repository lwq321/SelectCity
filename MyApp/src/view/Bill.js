import React,{Component} from 'react'
import {View, Text,DeviceEventEmitter} from 'react-native'

var dics = {text1:"niahoweqw",name:"zhangsan"}

export default class Bill extends React.Component{



    render(){
        return(
            <View >

                <Text onPress={()=>{
                    console.warn("菜單")
                    DeviceEventEmitter.emit('Home',dics)
                }}>  账单</Text>
            </View>
        );
    }
}