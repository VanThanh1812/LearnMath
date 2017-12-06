import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class Start extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
                
        <Image
            source={ require('./game.png')}
            style={styles.welcomeImage}
          />

        <TouchableOpacity  style={styles.optionItem} onPress={()=> this.props.start()} >
          <Text style={styles.optionText}>Chơi ngay</Text>
        </TouchableOpacity>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#03a9f4',
  },
  welcomeImage: {
    resizeMode: 'cover',
    margin: 2,
    marginLeft: 2,
  },
  optionItem:{
    borderRadius:3,
    backgroundColor:'#fff',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
  },
  optionText:{
    fontSize:18,
    color:'#f57c00',
  },
});
