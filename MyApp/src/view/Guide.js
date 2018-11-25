import React,{Component} from 'react'
import {ScrollView,Image,Button,StyleSheet,View,Text}from 'react-native'
import {NavigationActions} from 'react-navigation'

import Login from '../view/Login';
import Util from '../until/Dimensions'
import  global from '../until/storage'

let image1 = require('../img/img1.jpg');
let image2 = require('../img/img2.jpg');
let image3 = require('../img/img3.jpg');

// const resetAction = NavigationActions.reset({
//     index: 0,
//     actions: [
//         NavigationActions.navigate({ routeName: 'Login' })
//     ]
// });
export default class Guide extends React.Component{

    constructor(props){
        super(props);
        thisz =this;
        storage.save({
            key:'login',
            data: 0,
            expires: null
        });

    }
    // _onLogin=()=>{
    //     console.warn("跳转登录页面")
    //     thisz.props.navigation.navigate('Login',{name:'ee'});
    // }
    render(){

        return(

            <ScrollView

                contentContainerStyle={styles.contentContainer}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}>
                <Image source={image1} style={styles.backgroundImage} />
                <Image source={image2} style={styles.backgroundImage} />
                <Image source={image3} style={styles.backgroundImage}/>
                <Image source={image3} style={styles.backgroundImage} onPress={console.warn("点击图片")}/>
                <Text   style={styles.backgroundImage} onPress={()=>{this.props.navigation.navigate('Login');
                    // this.props.navigation.dispatch(resetAction);
                }}>sdfsdsdfsdfdsffd</Text>
                {/*onPress={() =>*/}
                {/*navigate('Login', { name: 'Jane' })}*/}

            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
    contentContainer: {
        width: Util.size.width*5,
        height: Util.size.height,
    },
    backgroundImage: {
        width: Util.size.width,
        height: Util.size.height,
    },
});
