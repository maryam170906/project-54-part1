import React, { Component } from 'react';
import { Button, View, Text,TouchableOpacity,Alert } from 'react-native';

class SoundButton extends Component {
 displayAlert=()=>{
 alert(this.props.msg)}
  render(){
    return(
      <Button color={this.props.color} title={this.props.title}  onPress={this.displayAlert}/>
      
    );
  }

//    render() {
//      return (
//        <TouchableOpacity>
//       style={{
//           marginLeft: 100,
//           width: 100,
//           height: 100,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 50,
//         }}onPress={this.displayAlert}
//       <TouchableOpacity/>
//     )
//   }
}



export default class App extends Component {

  render() {
    return (
      <View style ={{width:"200",height:"100",marginTop:"100"}}>
       <Text>DJ WhiteHat</Text>

        <SoundButton 
         color="red" 
         title="Sound 1"
         msg= "redButtonPressed"/>
            
        <SoundButton
         color= "blue" 
         title="Sound 2"
         msg="blueButtonPressed"/>
        
          <SoundButton
         color= "purple" 
         title="Sound 3"
         msg="purpleButtonPressed"/>

          <SoundButton
         color= "green" 
         title="Sound 4"
         msg="greenButtonPressed"/>

          <SoundButton
         color= "yellow" 
         title="Sound 5"
         msg= "yellowButtonPressed"/>
        </View>

    );
  }
}