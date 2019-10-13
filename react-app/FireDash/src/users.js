
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import map from './images/img3.png'
import heatedmap from './images/img3converted.png'

class UsersScreen extends Component{
  state ={
    heat: false
  }

  render(){
    console.log(this.props)
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      }}>
        <Text
        style={{fontSize:30, paddingBottom: 10}}>
          Mapa Original
        </Text>

        <Image
          source={map}
          style={{width:290, height:400, paddingBottom: 20}}
        />
        <Text style = {{paddingBottom:10}}></Text>
        <TouchableOpacity
        style = {{backgroundColor: '#f4511e', height: 50, width: 200, borderRadius:10, paddingTop:10}}
        onPress={()=>this.props.navigation.navigate('Converted')}
        >
          <Text style = {{color:'#fff',textAlign:'center'}}>
            Converter Imagem
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default UsersScreen;
