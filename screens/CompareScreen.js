import React from 'react';
import { ScrollView, 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TextInput,
  TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ResultCompare from '../components/ResultCompare';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class CompareScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      typeMath:2,
      textAns:'',
      textTypeMath:'',
    };
  }

  _genTypeMath(){
    if (this.props.typeMath == 1){
      return 'Điền vào chỗ trống:'
    }
    if (this.props.typeMath == 2){
      return 'So sánh:'
    }
  }

  _randomIntByLevel(level){
    switch (level){
      case 1:
        return Math.floor(Math.random()*(10-0+1)+0);
        break;
      case 2:
        return Math.floor(Math.random()*(100-0+1)+0);
        break;
      case 3:{
        return Math.floor(Math.random()*(1000-0+1)+0);
        break;
      }
      default:{
        return Math.floor(Math.random()*(5000-0+1)+0);
      }
    }
  }

  _randomIntFromInterval(min,max)
    {
      return Math.floor(Math.random()*(max-min+1)+min);
    }

  _genTextOpera(n){
    if (n == 1){
      return '+'
    }else if (n ==2){
      return '-'
    }else if (n == 3){
      return 'x'  
    }else if (n == 4){
      return '/'
    }
  }

  _genNumber2(level, number1, operation){
    if (operation == '-'){
      var number2 = this._randomIntFromInterval(0, number1);
      return number2;
    }

    if (operation == '/'){
      var number2 = 1;
      do {
        number2 = this._randomIntFromInterval(0, number1);
        return number2;
      }while(number2 != 0 && (number1 % number2) == 0 && Math.floor(number1/number2) >= 1)
    }

    return this._randomIntByLevel(level)
  }

  _getScaleOperator(level){
    if(level == 1){
      return this._randomIntFromInterval(1,2)
    }else if (level == 2){
      return this._randomIntFromInterval(1,3)
    }else{
      return this._randomIntFromInterval(1,4)
    }
  }

  _caculate(number1, operation, number2){
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

  _actionBack(){
    console.log(this.props.navigate);
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    })
    this.props.navigate.goBack('Home')
  }

  render() {

    number1 = this._randomIntByLevel(this.props.level);     
    operation = this._genTextOpera(this._getScaleOperator(this.props.level));
    number2 = this._genNumber2(this.props.level, number1, operation);

    numberSum = this._caculate(number1, operation, number2);
    var number3 = 0;
    if (numberSum >= 2){
      number3 = this._randomIntFromInterval(numberSum-2, numberSum+2)
    }

    console.log(number1+operation+number2)

    return (
      <View style={{ flex: 1, backgroundColor:'#fff' }}>
        
        <ScrollView 
          style={{flex:1}}
          keyboardDismissMode='on-drag'
          showsVerticalScrollIndicator={true}
          keyboardShouldPersistTaps={'always'}>

        <View style={styles.componentTitile}>
          <TouchableOpacity style={{flex:1}} onPress={()=>{this._actionBack()}}>
                <Image
                  source={require('../assets/images/icon_arrowback.png')}
                  style={styles.arrowBack}
                />   
              </TouchableOpacity>
          <Text style={styles.textTitle}>
            Toán lớp {this.props.level}
          </Text>
          <TouchableOpacity style={{flex:1,alignItems:'flex-end'}}>
                <Image
                  source={require('../assets/images/icon_reload.png')}
                  style={{width:28, height:28, alignItems:'flex-end', marginRight:10,  }}
                />   
              </TouchableOpacity>
        </View>
        
        <Text style={styles.textTypeMath}>
          {this._genTypeMath()}
        </Text>
        
        <View style={styles.math}>
          <Text style={styles.componentTextQuestion}>
            {number1}
          </Text>
          <Text style={styles.componentTextOperation}>
            {operation}
          </Text>
          <Text style={styles.componentTextQuestion}>
            {number2}
          </Text>
          <View 
            style={{justifyContent:'center', alignItems:'center',width:60,height:60, borderWidth:1, borderColor:'#f57c00', borderRadius:3, marginLeft:10, marginRight:10}}>
            <Text style={{fontSize:18}}>
              ?
            </Text>            
          </View>
          <Text style={styles.componentTextQuestion}>
            {number3}
          </Text>
        </View>

          <ResultCompare
            number3 = {number3}
            numberSum = {numberSum}
            newQuestion={this.props.reGenerate}
            addScore = {this.props.addScore}
            currentScore={this.props.currentScore}
            minusScore = {this.props.minusScore}
          />

        </ScrollView>
      </View>
    );
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
    flexDirection:'row',
  },
  textTitle:{
    padding:10,
    fontSize:25,
    color:'#03a9f4',
    fontWeight:'bold',
    flex:2,
    textAlign:'center'
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
    height:50,
    fontSize:15,
    borderColor:'#f57c00',
    borderWidth:1,
    borderRadius:3,
    textAlignVertical :'center'
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
  },
  arrowBack:{
    width:30,
    height:30,
    paddingTop:15,
    marginLeft:10,
  }
});
