
import React, {Component} from 'react';
import {Text, View, Button, Picker, Image, TouchableOpacity} from 'react-native';
import imglogo from './images/fyredash.png'
class HomeScreen extends Component{
  state ={
    location: 'se'
  }
  render(){
    return(
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
      }}>
        <Image
          source = {imglogo}
          style={{width:230, height:230, paddingBottom: 20}}
        />
        <Text style={{fontSize:20, paddingTop:10}}>Por favor seleciona a tua localização</Text>
        <Picker
          selectedValue={this.state.location}
          style={{height: 50, width: 200}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({location: itemValue})
          }>
          <Picker.Item label="Serra da Estrela" value="se" />
          <Picker.Item label="Serra da Arrabida" value="sa" />
          <Picker.Item label="Serra da Corvo" value="sc" />
        </Picker>
        <TouchableOpacity
        style = {{backgroundColor: '#f4511e', height: 50, width: 200, borderRadius:10, paddingTop:10}}
        onPress={()=>this.props.navigation.navigate('Users',{location:this.state.location})}
        >
          <Text style = {{color:'#fff',textAlign:'center'}}>
            Ver Mapa
          </Text>
        </TouchableOpacity>
        <Text>
            {this.props.navigation.getParam('message')}
        </Text>
      </View>
    )
  }
}


export default HomeScreen;
