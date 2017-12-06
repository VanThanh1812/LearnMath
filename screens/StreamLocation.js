import React from 'react';
import { ScrollView, 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TextInput,
  TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Audio from 'expo';

import FillBlank from './FillBlank';
import CompareScreen from './CompareScreen';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo';


const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class StreamLocation extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      flag:true,
      scrore:0
    }
  }

  async playSound() {
    await Audio.setIsEnabledAsync(true);
    const sound = new Audio.Sound({
      source: require('../assets/music/kahootstream.m4a')
    });
    
    await sound.loadAsync();
    await sound.playAsync();
  }

  componentDidMount(){
    console.log('sound')
    //playSound()
  }

  render() {

    const { navigate } = this.props.navigation;
    console.log(""+this.props.navigation.state.params.level)

    return (
      <View style={{flex:1}}>
        {this._renderView()}
        <View style={{height:50, width:350, alignItems:'center'}}>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111"
            didFailToReceiveAdWithError={this.bannerError} />
        </View>
      </View>
    )
  }

  _addScore(){
    var newScore = this.state.scrore + 1;
    this.setState({
      scrore: newScore
    })
  }

  _renderView(){
    var random = this._randomIntFromInterval(1,2);
    if (random == 1){
      return (
            <FillBlank
              level={this.props.navigation.state.params.level}
              typeMath='1'
              navigate={this.props.navigation}
              reGenerate={()=> {
                this.setState({flag : !this.state.flag})
              }}
              addScore={()=> {
                  var newScore = this.state.scrore + 1;
                    this.setState({
                    scrore: newScore
                  })                  
                }
              }
              minusScore={()=>{
                var newScore = this.state.scrore - 1;
                this.setState({
                  scrore: newScore
                })
              }}
              currentScore={this.state.scrore}
          />
      )
    }

    if (random == 2){
      return (
            <CompareScreen 
              level={this.props.navigation.state.params.level} 
              typeMath='2'
              navigate={this.props.navigation}
              reGenerate={()=> {
                this.setState({flag : !this.state.flag})
              }}
              addScore={()=> {
                  var newScore = this.state.scrore + 1;
                    this.setState({
                    scrore: newScore
                  })                  
                }
              }
              minusScore={()=> {
                console.log('minusScore')
                var newScore = this.state.scrore - 1;
                this.setState({
                  scrore: newScore
                })
              }}
              currentScore={this.state.scrore}
          />
      )
    } 
  }

  _randomIntFromInterval(min,max)
    {
      return Math.floor(Math.random()*(max-min+1)+min);
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    backgroundColor: '#fff',
  },
  componentTitile:{
    alignItems:'center',
  },
  textTitle:{
    paddingTop:15,
    fontSize:25,
    color:'#03a9f4',
    fontWeight:'bold'
  },
  textTypeMath:{
    marginTop:20,
    fontSize:18,
    alignItems:'flex-start',
    marginLeft:10,
  },
  textAns:{
    marginRight:10,
    marginLeft:10,
    height: 50, 
    fontSize:18,
    width: 2*window.width/3,
    borderColor: '#f57c00', 
    borderWidth: 1,
    borderRadius:3,
    paddingLeft:5,
  },
  math:{
    alignItems:'center',
    justifyContent:'center',
    height:120,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    flexDirection:'row',
  },
  btnSubmit:{
    padding:5,
    fontSize:15,
    borderColor:'#f57c00',
    borderWidth:1,
    borderRadius:3,
  },
  viewResult:{
    height:40,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#fff',
    borderColor:'#03a9f4',
    borderWidth:1,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:3,
    borderWidth:1,
    borderColor:'#03a9f4',
    justifyContent:'center',
  },
  viewAnswer:{
    height:80,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  componentTextOperation:{
    padding:10,
    margin:5,
    fontSize:30,
  },
  funciton:{
    width: 30,
    height: 30,
    resizeMode: 'cover',
    margin: 3,
  },
  componentTextQuestion:{
    padding:10,
    margin:5,
    borderColor:'#03a9f4',
    fontSize:30,
    borderWidth:1,
    borderRadius:3,
  },
  textCorrect:{
    color:'#4caf50'
  }
});
