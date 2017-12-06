import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CircleProgress from './CircleProgress';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

export default class InGame extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      
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

  _getScaleOperator(level){
    if(level == 1){
      return this._randomIntFromInterval(1,2)
    }else if (level == 2){
      return this._randomIntFromInterval(1,3)
    }else{
      return this._randomIntFromInterval(1,4)
    }
  }

  _genNumber2(level, number1, operation){
    if (operation == '-'){
      var number2 = this._randomIntFromInterval(0, number1);
      return number2;
    }
    return this._randomIntFromInterval(0, 10)
  }

  _getNumber3(number1, number2, operation, result){
    console.log(result)
    number3 = 0
    if (operation == '-'){
        number3 = number1 - number2
      }else{
        number3 = number1 + number2
      }
    if (result == 0){
      var n = 0
      do {
        n = this._randomIntFromInterval(number3-1, number3+2)
      }while(n == number3)
      return n;
    }else{
      return number3
    }
  }

  _check(select, result){
    if (select == result){
      this.props.addScore()
    }else{
      //cache
      //show Eng game
      this.props.saveScore()
    }
  }

  _timeOut(){
    this.props.saveScore()
  }

  render() {

    number1 = this._randomIntFromInterval(0, 10);     
    operation = this._genTextOpera(this._getScaleOperator(1));
    number2 = this._genNumber2(1, number1, operation);
    result = this._randomIntFromInterval(0, 1);
    number3 = this._getNumber3(number1, number2, operation, result);

    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <CircleProgress
            seconds={1}
            radius={30}
            borderWidth={8}
            color="#f57c00"
            bgColor="#03a9f4"
            shadowColor='#fff'
            textStyle={{ fontSize: 20 , color:'#03a9f4'}}
            onTimeElapsed={() => this._timeOut()}
         />
        
        <View style = {{height:50, flexDirection:'row', alignItems:'center'}}>
          <Text style = {{fontSize:18, color:'#fff', flex:1, margin:3}}>
            Điểm số: 
          </Text>
          <Text style = {styles.optionText}>
            {this.props.currentScore}
          </Text>
          <View style = {{flex:1}}></View>
        </View>

        <View style = {{height:1, width: window.width, backgroundColor:'#fff'}}></View>

        <View style = {styles.mathLeft}>
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
        </View>

        <View style = {styles.mathRight}>
          
          <Text style={styles.componentTextOperation}>
            =
          </Text>
          <Text style={styles.componentTextQuestion}>
            {number3}
          </Text>
        </View>

        <View style = {styles.select}>
          <TouchableOpacity style={styles.optionItem} onPress = {()=> {this._check(1, result)}} >
                  
            <Image
                source={require('./icons_correct.png')}
                style={styles.welcomeImage}
                />

          </TouchableOpacity>

          <TouchableOpacity style={styles.optionItem} onPress = {()=> {this._check(0, result)}} >
                  
            <Image
                source={require('./icons_wrong.png')}
                    style={styles.welcomeImage}
                  />
                
              </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    margin:10,
  },
  optionText:{
    fontSize:40,
    color:'#fff',
    fontWeight:'bold',
  },
  mathLeft:{
    flexDirection:'row',
    alignItems:'center',
  },
  mathRight:{
    margin:10,
    flexDirection:'row',
    alignItems:'center',
  },
  select:{
    margin:10,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#03a9f4',
  },
  componentTextQuestion:{
    paddingLeft:30,
    paddingRight:30,
    marginTop:10,
    color: '#fff',
    fontSize:70,
  },
  componentTextOperation:{
    padding:10,
    margin:5,
    color: '#fff',
    fontSize:70,
  },
});
