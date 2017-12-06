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

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class Response extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      textAns:'',
      textShow:'N01',
      stateText:0,
    }
  }

  _actionSubmit(){
    console.log('click')

    if (this.state.textAns == this._getResult()){
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
        textShow: this.props.number1 + ' '+ this.props.operation+' '+ this.props.number2 + ' = ' + this._getResult(),
        textAns:'',
        stateText:1,
      })
      this.props.newQuestion();      
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

  _getResult(){
    number1 = this.props.number1;
    number2 = this.props.number2;
    operation = this.props.operation;

    switch(operation){
      case '+':
        return number1+number2
        break;
      case '-':
        return number1-number2
        break;
      case 'x':
        return number1*number2
        break;
      case '/':
        return number1/number2
        break;
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
    
  }

  render() {

    number1 = this.props.number1;
    number2 = this.props.number2;
    operation = this.props.operation;

    console.log(number1+operation+number2);

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
          <TextInput
            style={styles.textAns}
            onChangeText={(textAns) => {
              console.log(textAns)
              this.setState({textAns})
              
            }}
            value={this.state.textAns}
            keyboardType={'numeric'}
            placeholder={'Viết đáp án của bạn...'}
            selectionColor={'#f57c00'}
            underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TouchableOpacity onPress={()=>{this._actionSubmit()}}>
            <Text style={styles.btnSubmit}>Trả lời</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

    // return (
    //     <CompareScreen level={1} typeMath='2'/>
    //   )

    // return (
    //   <View style={{flex:1}}>
    //     {this._renderView()}
    //   </View>
    // )
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
  viewResult:{
    height:40,
    marginTop:20,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#fff',
    borderColor:'#03a9f4',
    borderWidth:0,
    alignItems:'center',
    borderRadius:3,
    flexDirection:'row',
    borderWidth:1,
    borderColor:'#03a9f4',
    justifyContent:'center',
  },
  btnSubmit:{
    padding:5,
    height:50,
    fontSize:15,
    borderColor:'#f57c00',
    borderWidth:1,
    borderRadius:3,
    textAlignVertical :'center'
  },
  viewAnswer:{
    height:80,
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
});
