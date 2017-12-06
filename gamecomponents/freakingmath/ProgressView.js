import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import ProgressBar from './ProgressBar';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class ProgressView extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      progress: 0.0,
    };
  }

  
  componentWillMount(){
    
  }

  render() {
    var interval_obj = setInterval(function(){
      /*if (this.state.progress == 1.0){
        clearInterval(interval_obj);
        console.log('call timeOut')
//        this.props.timeOut()
        }
      */
      if (this.state.progress == 1.0){
        clearInterval(interval_obj);
        console.log('call timeOut')
        this.props.timeOut()
      }
      console.log('say hello')
      this.setState({ progress: this.state.progress + 0.1});  
    }, 100);

    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ProgressBar  
          progress={this.state.progress} 
          width = {window.width}
          color = {'#fff'}
          height = {20}
          unfilledColor = {'#03a9f4'}
          />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
