import React from 'react';
import { ScrollView, 
  StyleSheet, 
  View, 
  Text, 
  Image,
  AlertIOS,
  ToastAndroid,
  Platform,
  TextInput,
  TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import HiddenView from './HiddenView';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class ResultCompare extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      textShow:'Nothing',
      stateText:0,
    }
  }

  _textResponse(){
    if (this.state.stateText == 0){
      
      return (
        <View style={{flex:1, alignItems:'center'}}>
           
          </View>
      );

    }else if (this.props.stateText == 1){
      return (
        <View style={{flex:1, alignItems:'center'}}>
           <Text style={{color:'#4caf50', marginTop:10}}>
              {this.state.textShow} 
           </Text>
        </View>
      )
    }else if (this.state.stateText == 2){
      return (
        <View style={{flex:1, alignItems:'center'}}>
           <Text style={{color:'#f44336', marginTop:10}}>
              {this.state.textShow} 
           </Text>
        </View>
      )
    }
  }

  componentWillMount() {
    // if (this.state.stateText != 0){
    //   this.setTimeout( () => {
        
    //   },1000);
    //   this.setState({
    //       stateText:0
    //     })
    // }
  }

  _select(index){

    console.log('reRender')
    number3 = this.props.number3;
    numberSum = this.props.numberSum;

    if (index == 1 && numberSum > number3){      
      if (Platform.OS == 'ios'){
        AlertIOS.alert(
          'Kết quả',
          'Đáp án chính xác'
        );
      }else{
        ToastAndroid.show('Đáp án chính xác',ToastAndroid.SHORT);
      }
      this.props.addScore();
      this.setState({
        textShow:'Chính xác', 
        textAns:'',
        stateText:1,
      })       
    }else if (index == 2 && numberSum < number3){      
      if (Platform.OS == 'ios'){
        AlertIOS.alert(
          'Kết quả',
          'Đáp án chính xác'
        );
      }else{
        ToastAndroid.show('Đáp án chính xác',ToastAndroid.SHORT);
      }
      this.props.addScore();
      this.setState({
        textShow: 'Chính xác',
        textAns:'',
        stateText:1,
      })
    }else if (index == 3 && numberSum == number3){
      if (Platform.OS == 'ios'){
        AlertIOS.alert(
          'Kết quả',
          'Đáp án chính xác'
        );
      }else{
        ToastAndroid.show('Đáp án chính xác',ToastAndroid.SHORT);
      }
      this.props.addScore();
      this.setState({
        textShow: 'Chính xác',
        textAns:'',
        stateText:1,
      }) 
    }else{
      if (Platform.OS == 'ios'){
        AlertIOS.alert(
          'Kết quả',
          'Đáp án sai'
        );
      }else{
        ToastAndroid.show('Đáp án sai',ToastAndroid.SHORT);
      }
      this.props.minusScore();
      this.setState({
        textShow:'Chưa chính xác',
        stateText:2,
      })
    }
  }

  render() {

    return (
        <View style={{flex:1}}>
          <View style={styles.viewResult}>

            <Text style={{color:'#000', fontSize:16}}>
                Tổng điểm:
              </Text>
              <View style={{width:5, height:40}}>
              </View>
              <Text style={{color:'#f57c00', fontSize:20, fontWeight:'bold'}}>
                {this.props.currentScore}
              </Text>
          </View>

         {this._textResponse()}

        <View style={styles.viewAnswer}>
          <TouchableOpacity onPress={()=>{this._select(1)}}>
            <Image
              source={require('../assets/images/icon_lessthan2.png')}
              style={styles.imageOpera}
            />   
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._select(2)}}>
            <Image
              source={require('../assets/images/icon_lessthan.png')}
              style={styles.imageOpera}
            />  
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{this._select(3)}}>
            <Image
              source={require('../assets/images/icon_equal.png')}
              style={styles.imageOpera}
            />  
          </TouchableOpacity>
        </View>
          
      </View>
    )
  }
}


const styles = StyleSheet.create({
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
  imageOpera:{
    width:60,
    height:60,
    margin:10,
    borderColor:'#f57c00',
    borderRadius:3,
    borderWidth:1,
  },
  viewResult:{
    height:40,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#fff',
    borderColor:'#03a9f4',
    borderWidth:0,
    flexDirection:'row',
    alignItems:'center',
    borderRadius:3,
    borderWidth:1,
    borderColor:'#03a9f4',
    justifyContent:'center',
  },
  viewAnswer:{
    height:80,
    marginTop:15,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
})
