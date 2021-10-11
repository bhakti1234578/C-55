import * as React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
     await Audio.Sound.createAsync(
       {uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3'},
       {shouldPlay: true}
     )

  }

  render() {
    return (
    <TouchableOpacity
    style= {{
      marginLeft: 100,
      borderWidth: 5,
      borderColor: "blue",
      alignItems: 'center',
      width: 200,
      height: 200,
      backgroundColor: "pink",
      borderRadius: 50,
      justifyContent: 'center',
          }}
          onPress= {this.playSound}
    >
    <Text style= {{
      fontWeight:'bold',
      fontSize: 20
    }}> Press Me </Text>
    </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


