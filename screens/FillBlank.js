import React from 'react';
import { ScrollView, 
  StyleSheet, 
  View, 
  Text, 
  Image,
  TextInput,
  TouchableOpacity } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Response from '../components/Response';
import { NavigationActions } from 'react-navigation';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

var genDer = true;

export default class FillBlank extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number1:0,
      number2:0,
      operation:'+',
      textTypeMath:'',
      gen:true,
    };

    //this._autogenerate();
  }

  _genTypeMath(){
    if (this.props.typeMath == 1){
      return 'Điền vào chỗ trống:'
    }
    if (this.props.typeMath == 2){
      return 'So sánh:'
    }
  }

  _randomIntFromInterval(min,max)
    {
      return Math.floor(Math.random()*(max-min+1)+min);
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

  /*
  1 2 3 4
  + - x /
  */
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

  _getScaleOperator(level){
    if(level == 1){
      return this._randomIntFromInterval(1,2)
    }else if (level == 2){
      return this._randomIntFromInterval(1,3)
    }else{
      return this._randomIntFromInterval(1,4)
    }
  }

  /*
  gen number2 - /
  */
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

  _autogenerate(){
      var level = this.props.level;
      var operation = this._genOperaByLevel(level);

      console.log(level);

      switch(level){
        case 1:
          
          number1 = this._randomIntFromInterval(0,10);     
          operation = this._genTextOpera(this._randomIntFromInterval(1,2));
          number2 = this._genNumber2(level, number1, operation);

          this.setState(previousState=>{
            return (
              {
                number1: number1,
                number2: number2,
                operation: operation,
              }
            )
          });
          break;
        case 2:
          
          number1 = this._randomIntFromInterval(0,100);     
          operation = this._genTextOpera(this._randomIntFromInterval(1,3));
          number2 = this._genNumber2(level, number1, operation);

          
          break;
        case 3:
          number1 = this._randomIntFromInterval(0,1000);     
          operation = this._genTextOpera(this._randomIntFromInterval(1,4));
          number2 = this._genNumber2(level, number1, operation);

          
          break;
        case 4:
          number1 = this._randomIntFromInterval(0,100000);     
          operation = this._genTextOpera(this._randomIntFromInterval(1,4));
          number2 = this._genNumber2(level, number1, operation);

          
          break;
        case 5:

          break;
      }
    }

  _actionBack(){
    console.log(this.props.navigate)
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home'})
      ]
    })
    this.props.navigate.dispatch(resetAction)

  }

  render() {

    number1 = this._randomIntByLevel(this.props.level);     
    operation = this._genTextOpera(this._getScaleOperator(this.props.level));
    number2 = this._genNumber2(this.props.level, number1, operation);

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
            {/*number1*/}
            {number1}
          </Text>
          <Text style={styles.componentTextOperation}>
            {/*operation*/}
            {operation}
          </Text>
          <Text style={styles.componentTextQuestion}>
            {/*number2*/}
            {number2}
          </Text>
          <Text style={styles.componentTextOperation}>
            =
          </Text>
          <Text style={styles.componentTextQuestion}>
            ...
          </Text>
        </View>

        <Response 
          number1={number1} 
          operation={operation} 
          number2={number2}
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
