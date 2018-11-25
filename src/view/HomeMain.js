import React, {Component} from 'react'
import {View,Text, Image, StyleSheet} from 'react-native'
import {StackNavigator, TabBarBottom, TabNavigator} from 'react-navigation'
import Home from '../view/Home'
import Bill from '../view/Bill'
import Me from '../view/Me'


let image1 = require('../img/img1.jpg');
let image2 = require('../img/img2.jpg');
let image3 = require('../img/img3.jpg');

const TabRouteConfigs = {
    Home: {
        screen: Home,
        navigationOptions:{
            title: '首页',
            tabBarLabel: '首页',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        image1
                    }
                    // style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        }
    },
    NearBy: {
        screen: Bill,
        navigationOptions: {
            title: '账单',
            tabBarLabel: '账单',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                        image2
                    }
                    // style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        },
    }
    ,
    Mine: {
        screen: Me,
        navigationOptions: {
            title: '我的',
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={
                       image3
                    }
                    // style={[styles.icon,{tintColor: tintColor}]}// {tintColor: tintColor} 选中的图片和文字颜色
                />
            ),
            headerTitleStyle: {
                alignSelf:'center'
            }
        },
    }
};
const TabNavigatorConfigs = { animationEnabled: true, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: true, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#0F9C00', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了， 不知道还有没有其它方法隐藏？？？
        style: {
            backgroundColor: '#444', // TabBar 背景色
            height:50
        },
        labelStyle: {
            fontSize: 12, // 文字大小,
            marginTop: 0,
        },

    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon:{
        width:20,
        height:20
    }
});


const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);

// const StackRouteConfigs = {
//     Tab: {
//         screen: Tab,
//     }
// };
// const StackNavigatorConfigs = {
//     initialRouteName: 'Tab',
//     navigationOptions: {
//         title:,
//         headerStyle: {backgroundColor: '#5da8ff'},
//         headerTitleStyle: {color: '#333333'},
//     },
// };
// const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

module.exports=Tab;