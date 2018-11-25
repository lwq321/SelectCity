import React, { Component } from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'


export default class MenuList extends React.Component {

   constructor(props){
    super(props)
    data:[]
     
   }

    render() {
        return (

            <View style={stytles.main} >
                <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                />

                {/* <FlatList
                    data={[{ key: 'a' }, { key: 'b' }]}
                    renderItem={({ item }) => <Text>{item.key}</Text>}
                /> */}
            </View>


        )
    }


    


}
const stytles = StyleSheet.create({

    main: {
        flexDirection: 'row',
        backgroundColor: 'white'

    }

})