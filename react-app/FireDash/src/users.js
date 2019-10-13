
import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import mapse from './images/img.png'
import mapsa from './images/img2.png'
import mapsc from './images/img3.png'


class UsersScreen extends Component{
  renderSwitch(param) {
    switch(param) {
      case 'se':
        return (
          <Image
          source={mapse}
          style={{width:290, height:400, paddingBottom: 20}}
          />
        )
      case 'sa':
        return (
          <Image
          source={mapsa}
          style={{width:290, height:400, paddingBottom: 20}}
          />
        )
        case 'sc':
          return (
            <Image
            source={mapsc}
            style={{width:290, height:400, paddingBottom: 20}}
            />
        )
      default:
        return (
          <Image
          source={mapse}
          style={{width:290, height:400, paddingBottom: 20}}
          />
        )
    }
  }
  render(){
    const location = this.props.navigation.getParam('location')

    console.log(this.props)
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      }}>
        <Text
        style={{fontSize:22, paddingBottom: 10}}>
          Mapa Original
        </Text>
        {this.renderSwitch(location)}

        <Text style = {{paddingBottom:10}}></Text>
        <TouchableOpacity
        style = {{backgroundColor: '#f4511e', height: 50, width: 200, borderRadius:10, paddingTop:10}}
        onPress={()=>this.props.navigation.navigate('Converted', {location})}
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
