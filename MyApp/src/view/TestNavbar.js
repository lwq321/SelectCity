import React, { Component } from 'react'
import { View, StyleSheet,Button,Text } from 'react-native'
import Navbar from './Navbar'
import Progress from './Progress';
import MenuList from './MenuList'
export default class TestNavbar extends React.Component {


  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      progress: 0
    };
    this.currProgress = 0;
    
  }

  // componentDidMount() {
  //   let self = this;
  //   this.timer = setInterval(() => {
  //     if (self.currProgress >= 10) {
  //       console.warn("取消")
  //       clearTimeout(this.timer);
  //       return
  //     }
  //     console.warn("uuu"+self.currProgress)
  //     self.currProgress += 1;
  //     console.warn("uuu1"+self.currProgress)
  //     self.refs.progressBar.progress = (self.currProgress)/10;
     
  //   }, 1000);
  // }

  render() {

    return (<View style={stytles.main}>
      <Navbar

        title={'cell'}
        style ={{backgroundColor: 'blue'}}
        styleRightText ={{color: 'blue'}}
        styleTitle ={{color: 'blue'}}
        rightText={'提交'}
        isShowDel={true}
        isShowRightText={true}
        isShowFirstRightIcon={true}
        isShowLastRightIcon={true}
        
        imgRightFirstIcon={require('../img/icon_fh.png')}

        onLeftItemPress={
          () => {
            console.warn("0000000")
          }
        }

        onDelPress={
          () => {
            console.warn("22222")
          }
        }
        onRightFirstItemPress={
          () => {
            console.warn("33333")
          }
        }
        onRightLastItemPress={
          () => {
            console.warn("44444")
          }
        }
      onRightTextPress={
          this.onBack
        }
      />


      <Progress
        ref="progressBar"
        style={{
          marginTop: 100,
        }}
      ></Progress>


       <Button title={"减掉"} onPress={this.remove}></Button>
       <Button title={"增加"} onPress={this.add}></Button>

       <MenuList ></MenuList>
    </View>)
  }

   add=()=>{
    let self = this;
    self.currProgress += 1;
    self.refs.progressBar.progress = (self.currProgress)/10;
   }
   remove=()=>{
    let self = this;
    self.currProgress -= 1;
    self.refs.progressBar.progress = (self.currProgress)/10;
   }
   

   onBack=()=>{
     console.warn("你好")
   }

}
const stytles = StyleSheet.create({

  main: {
    flex: 1,

  }

})