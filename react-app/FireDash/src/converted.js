
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import heatedmap from './images/img3converted.png'

class ConvertedScreen extends Component{

  render(){
    const serra = this.props.navigation.getParam('location');

    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      }}>
        <Text
        style={{fontSize:30, paddingBottom:10}}>
            Mapa das zonas mais secas
        </Text>
            <Image
            source={heatedmap}
            style={{width:290, height:400, paddingBottom: 20}}
            />
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
