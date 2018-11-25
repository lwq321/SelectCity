import React,{Component} from 'react'
import {FlatList,View,Text} from 'react-native'

export default class FlatListView extends React.Component{

    constructor(props){
        super(props);
        this.dataSo=[];
        this.state={
            data:[],
            page:1

        }
    }


    _getNetWorkData=(page)=>{
        let options = {};
        options.headers = {"Content-Type": "application/json"};
        options.method = 'GET';
        fetch('https://facebook.github.io/react-native/movies.json',options)
            .then((response) => response.json())
            .then((responseJson) => {

                for(let i=0;i<responseJson.movies.length;i++){

                    console.warn("数量："+i+" ==="+responseJson.movies[i].title+"=="+responseJson.movies[i].releaseYear);
                }
                this.dataSo.push(...responseJson.movies);
                this.setState({
                    isLoading: false,
                    data: this.dataSo,
                }, function(){

                });

            })
            .catch((error) =>{
                console.error(error);
            });

    }




    _onRefesh=()=>{
        console.warn("刷新");
    }
    render(){
      return(

        <FlatList
          data={this.state.data}
          onRefresh={this._onRefesh}
          refreshing={false}

          onEndReachedThreshold={0.9}
          onEndReached={this._getNetWorkData(1)}
          renderItem={({item}) => <Text> {item.title}  </Text>}
          keyExtractor={(item, index) => {console.warn(index); return index}}

        >

        </FlatList>
      )

    }

}