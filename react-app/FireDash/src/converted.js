
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

import heatedmapse from './images/img1converted.png'
import heatedmapsa from './images/img2converted.png'
import heatedmapsc from './images/img3converted.png'
class ConvertedScreen extends Component{
  renderSwitch(param) {
    switch(param) {
      case 'se':
        return (
          <Image
          source={heatedmapse}
          style={{width:290, height:400, paddingBottom: 20}}
          />
        )
      case 'sa':
        return (
          <Image
          source={heatedmapsa}
          style={{width:290, height:400, paddingBottom: 20}}
          />
        )
        case 'sc':
          return (
            <Image
            source={heatedmapsc}
            style={{width:290, height:400, paddingBottom: 20}}
            />
        )
      default:
        return (
          <Image
          source={heatedmapse}
          style={{width:290, height:400, paddingBottom: 20}}
          />
        )
    }
  }
  render(){
    const location = this.props.navigation.getParam('location');
    
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      }}>
        <Text
        style={{fontSize:22, paddingBottom:10}}>
            Mapa das zonas mais secas
        </Text>
        {this.renderSwitch(location)}
        <Text style = {{paddingBottom:10}}></Text>
        <TouchableOpacity
        style = {{backgroundColor: '#f4511e', height: 50, width: 200, borderRadius:10, paddingTop:10}}
        onPress={()=>this.props.navigation.navigate('Users')}
        >
          <Text style = {{color:'#fff',textAlign:'center'}}>
            Imagem Original
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}


export default ConvertedScreen;
