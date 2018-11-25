
import React,{Component} from 'react'
import {View, Text} from 'react-native'
export default class  DeatilParam extends React.Component{


    constructor(props){
        super(props)
        this.state={
            text2:this.props.text1
        }
    }

    render(){
        return(
            <View>

                 <Text>{this.state.text2}</Text>

            </View>
        )
    }
}