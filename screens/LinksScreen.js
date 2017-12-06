import React from 'react';
import {View, ScrollView, StyleSheet, AsyncStorage } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Start from '../gamecomponents/freakingmath/Start';
import InGame from '../gamecomponents/freakingmath/InGame';
import EndGame from '../gamecomponents/freakingmath/EndGame';

export default class LinksScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      screen:0,
      currentScore: 0,
      highscore:0,
    }
  }

  _saveScore(){
    highscoreAction = async ()=> {
      try{
        let value = await AsyncStorage.getItem('highscore')
        if (value < this.state.currentScore ){
          AsyncStorage.setItem('highscore', this.state.currentScore.toString());
          
        }else{
          
        }
        this._getHighScore()
      }catch(err){
        return 
      }
    }
    
    highscoreAction();

  }


  _getHighScore(){
    var highscore = 0;
    console.log('_getHighScore')
    highscoreAction = async ()=> {
      try{
        let value = await AsyncStorage.getItem('highscore')
        if (value == null){
          this.setState({highscore:0, screen:2})
        }else{
          this.setState({highscore:value, screen:2})
        }
      }catch(err){
        return 0
      }
    }
    
    highscoreAction();
     
  }

  render() {

    if(this.state.screen == 0){
      // start screen
      return(
        <View style={styles.container}>
          <Start 
            start = {()=> {this.setState({screen:1})}}
          />
        </View>
      )
    }else if (this.state.screen == 1){
      // begin screen
      return(
        <View style={styles.container}>
          <InGame
            currentScore = {this.state.currentScore}
            addScore = {()=> {this.setState({currentScore: this.state.currentScore + 1})}}
            saveScore = {()=> {this._saveScore()}}
            endGame = {()=> {this._getHighScore()}}
           />
        </View>
      )
    }else if (this.state.screen == 2){
      // end game
      return(
        <View style={styles.container}>
          <EndGame
            highScore = {this.state.highscore}
            currentScore = {this.state.currentScore}
            reStart = {()=> {this.setState({screen:1, currentScore: 0})}}
           />
        </View>
      )
    } 

    /*return (
      <View style={styles.container}>
        <ProgressView />
      </View>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
