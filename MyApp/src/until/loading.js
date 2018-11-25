

import React, { Component } from 'react';
import {
    View,
    Text,
    Modal,
    StyleSheet
} from 'react-native';

import * as Progress from 'react-native-progress';

export default class loading extends Component {
    // 构造
    constructor(props) {
        super(props);

    }

    render() {

        return(
            <Modal
                transparent = {true}
                onRequestClose={()=> this.onRequestClose()}
            >
                <View style={loadstytle.loadingBox}>
                    <Progress.Circle
                        size={50} indeterminate={true}
                        borderWidth={5}
                    />
                </View>
            </Modal>
        );
    }

}

const loadstytle = StyleSheet.create({
    loadingBox: { // Loading居中
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgba(0, 0, 0, 0.5)'
    }
})
