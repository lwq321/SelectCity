import React,{Component} from 'react'
import {View, Text} from 'react-native'
import {DeatilParam} from "./DeatilParam";


export default class Me extends React.Component{

    render(){
        return(
            <View >

                <Text onPress={()=>{


                    this.props.navigation.push({
                        comment:DeatilParam,
                        passProps:{
                            text1:"我的界面我做主"

                        }
                        }

                    )
                }}>  我的</Text>
            </View>
        );
    }
}