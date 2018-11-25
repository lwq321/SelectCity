import React, {Component} from 'react';
import {
    Modal,
    Image,
    Alert,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    DeviceEventEmitter
} from 'react-native';
import FlatListView from "./FlatListView";
import Dimensions from 'Dimensions';
import Toast from 'react-native-easy-toast'
import Loading from "../until/loading";
import {NavigationAction} from 'react-navigation'

var lwith = Dimensions.get('window').width;


let image1 = require('../img/img1.jpg');
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usename: '',
            password: '',
            isShow: false
        }

    }

    componentDidMount() {
        // DeviceOrientationEvent.addEventListener(, )

        this.subscription = DeviceEventEmitter.addListener('Home', (dic) => {
            console.warn("點擊了" + dic.text1)
            // Alert(dic.title);
        })
    }

    //在组件销毁的时候要将其移除
    componentWillUnmount() {
        this.subscription && this.subscription.remove();
    }

    _textUNOnchange = (usename) => {
        this.setState({
            usename: usename,
        });
    }
    _textPWOnchange = (password) => {
        this.setState({
            password: password
        });
    }

    _onButton = () => {

        if (this.state.usename == null || this.state.usename.length == 0) {
            // alert('用户名不能为空');
            // Alert.alert(
            //     'Alert Title',
            //     'My Alert Msg',
            //     [
            //         {text: 'Ask me later', onPress: () => console.warn('Ask me later pressed')},
            //         {text: 'Cancel', onPress: () =>{
            //                 // this._progress.dismiss();
            //            }, style: 'cancel'},
            //         {text: 'OK', onPress: () => console.warn('OK Pressed')},
            //     ],
            //     { cancelable: false }
            // )
            this.refs.toast.show("账号不能为空1");
            return
        }
        if (this.state.password == null || this.state.password.length == 0) {
            this.refs.toast.show("密码不能为空");
            return;
        }

        // if (this.state.usename === '1' && this.state.password === '1') {
        //     console.warn('usename:' + this.state.usename + "  password:" + this.state.password);
        //     this.props.navigation.navigate('HomeMain')
        // }

        this._Login()


    }

    _Login = () => {

       this.props.navigation.navigate("TestNavbar")

        // this.setState(
        //     {
        //         isShow: true
        //     }
        // )

        // let formData = new FormData();
        // formData.append("studentNo", "181159193546");
        // formData.append("password", "123456");
        // formData.append("version", "1.0.0");
        // formData.append("deviceToken", "000");
        // formData.append("deviceType", "ANDROID");

        // fetch("http://47.105.62.94:8080/app/student/login", {
        //     method:'POST',
        //     headers:{},
        //     body:formData,
        // }).then((response)=>{
        //     if (response.ok) {
        //         return response.json();
        //     }
        // }).then((json)=>{
        //     this.setState(
        //         {
        //             isShow: false
        //         }
        //     )

        //      if(json.result==200){
        //          alert(JSON.stringify(json.object.studentName));
        //      }else {
        //          alert(JSON.stringify(json));
        //      }


        // }).catch((error)=>{
        //     this.setState(
        //         {
        //             isShow: false
        //         }
        //     )

        //     console.error(error);
        // })

    }


    render() {
        return (
            <View style={styles.container}>

                {
                    this.state.isShow == true ? (<Loading/>) : (null)
                }


                <Image style={styles.img} source={image1}></Image>
                {/*<Text style={styles.img}/>*/}
                <View style={styles.username}>
                    <TextInput
                        placeholder="用户名"
                        placeholderTextColor="#c4c4c4"
                        onChangeText={this._textUNOnchange}
                        clearButtonMode={'while-editing'}
                        keyboardType='numeric'
                        maxLength={11}
                        value={this.state.usename}
                    />
                    <TextInput
                        placeholder="密码"
                        placeholderTextColor="#c4c4c4"
                        onChangeText={this._textPWOnchange}
                        value={this.state.password}
                    />
                </View>
                <View style={styles.out}>
                    <Text style={{color: '#1E90FF', flex: 1}}>注册 </Text>
                    <Text style={styles.forgetPw}>忘记密码 </Text>
                </View>
                <TouchableHighlight underlayColor={'#87CEEB'} onPress={this._onButton} style={styles.button}>
                    <Text style={{color: 'white'}}>登 录</Text>
                </TouchableHighlight>

                <Toast ref="toast" opacity={0.8}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    img: {
        width: 100,
        height: 100,
        backgroundColor: 'red',

    },
    username: {
        width: lwith - 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        width: 170,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#1E90FF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20
    },
    out: {

        width: lwith - 30,
        flexDirection: 'row',

    },
    forgetPw: {
        color: '#1E90FF',
        alignSelf: 'flex-end',
        flex: 1,
        textAlign: 'right'
    }


});
