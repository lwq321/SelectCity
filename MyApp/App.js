/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import {StackNavigator} from "react-navigation";
import {View} from 'react-native'
import setStackNavigator from './src/view/SetStup'
import Start from './src/view/Start'
let route = setStackNavigator.set();
let routes = {...route};

const Navigator = StackNavigator(
    {
 
        ...routes,
    },
    {
        initialRouteName: 'CityPicker', // 默认显示界面
        //设置导航全局样式
        navigationOptions:({ navigation,screenProps }) => ({
            // header:<NavigateView navigation={navigation}/>,
            //返回键文字
            headerBackTitle:null,
            //是否显示图标，默认关闭
            showIcon:true,
            //是否允许在标签之间进行滑动
            swipeEnabled:false,
            //是否在更改标签时显示动画
            animationEnabled:false,
            // headerStyle:[{backgroundColor:global.maincolor}, isIphoneX ? {marginTop: -44 } : null],
            // //后退键
            // headerLeft:(
            //     <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{width:50,paddingLeft:10}}>
            //         <Image source={require('./img/icon_fanghuibai.png')}/>
            //     </TouchableOpacity>
            // ),
            //文字样式
            //Android中headerTitleStyle默认为alignSelf:'flex-start'
            headerTitleStyle:{alignSelf:'center',},
            headerTintColor: '#fff',
            //Android需要加上一個headerRight讓title居中
            headerRight: <View style={{ width: 40 }}/>

        }),
        //定义跳转风格
        //card：使用iOS和安卓默认的风格
        //modal：iOS独有的使屏幕从底部画出。类似iOS的present效果
        mode:'card',
        headerMode:'none'
        //控制安卓切换页面动作,跟IOS保持一致
        // transitionConfig:()=>({
        //     screenInterpolator: CardStackStyleInterpolator.forHorizontal,
        // })
        //导航切换事件
        //onNavigationStateChange: (event)=>{
        //    console.log(event)
        //},
    }
);
export default Navigator

