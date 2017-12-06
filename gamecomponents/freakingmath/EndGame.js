import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TouchableOpacity,
} from 'react-native';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class EndGame extends React.Component {
  
  constructor(props){
    super(props);
  }

  render() {

    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
          
        <View style = {{padding: 20, backgroundColor: '#03a9f4', borderRadius:3, alignItems:'center'}}>
          
          <Text style = {{fontSize:30, color:'#fff'}}>Game Over</Text>
          <View style = {{padding:0, marginBottom:10}}>
            <Text style = {{fontSize:18, color:'#fff'}}> Score: {this.props.currentScore} </Text>
            <Text style = {{fontSize:18, color:'#fff'}}> HighScore: {this.props.highScore} </Text>
          </View>

          <TouchableOpacity  style={styles.optionItem} onPress = {()=> this.props.reStart()}>
            <Text style={styles.optionText}>Chơi lại</Text>
          </TouchableOpacity>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#fff',
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
    fontSize:15,
    color:'#f57c00',
  },
});
