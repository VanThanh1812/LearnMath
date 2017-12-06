import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

const Dimensions = require('Dimensions');

const window = Dimensions.get('window');

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  
  constructor(props){
      super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/banner2.png')
                  : require('../assets/images/banner2.png')
              }
              style={styles.bannerImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {/*{this._maybeRenderDevelopmentModeWarning()}
            */}
            <Text style={styles.getStartedText}>Welcome to Math Fun app</Text>

          </View>

          <View style={styles.optionApp}>

              {/*1-2*/}
              <View style={styles.level}>
                <TouchableOpacity  style={styles.optionItem} onPress={()=> navigate('StreamLocation', {level:1})}>
                  
                    <Image
                      source={
                         __DEV__
                          ? require('../assets/images/level1.png')
                          : require('../assets/images/level1.png')
                      }
                      style={styles.welcomeImage}
                    /> 
                    <Text style={styles.optionText}>Lớp 1</Text>
                
              </TouchableOpacity>

              <View style={{width:10}}></View>

              <TouchableOpacity style={styles.optionItem} onPress={()=> navigate('StreamLocation',{level:2})}>
                  
                  <Image
                    source={
                      __DEV__
                        ? require('../assets/images/level2.png')
                        : require('../assets/images/level2.png')
                    }
                    style={styles.welcomeImage}
                  />

                  <Text style={styles.optionText}>Lớp 2</Text>
                
              </TouchableOpacity>
              </View>

              {/*3-4*/}
              <View style={styles.level}>
                <TouchableOpacity  style={styles.optionItem} onPress={()=> navigate('StreamLocation', {level:3})}>
                  
                    <Image
                      source={
                         __DEV__
                          ? require('../assets/images/level3.png')
                          : require('../assets/images/level3.png')
                      }
                      style={styles.welcomeImage}
                    /> 
                    <Text style={styles.optionText}>Lớp 3</Text>
                
              </TouchableOpacity>
              <View style={{width:10}}></View>
              <TouchableOpacity style={styles.optionItem} onPress={()=> navigate('StreamLocation', {level:4})}>
                  
                  <Image
                    source={
                      __DEV__
                        ? require('../assets/images/level4.png')
                        : require('../assets/images/level4.png')
                    }
                    style={styles.welcomeImage}
                  />

                  <Text style={styles.optionText}>Lớp 4</Text>
                
              </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.optionItem} onPress={()=> navigate('StreamLocation', {level:5})}>
                  
                  <Image
                    source={
                      __DEV__
                        ? require('../assets/images/level5.png')
                        : require('../assets/images/level5.png')
                    }
                    style={styles.welcomeImage}
                  />

                  <Text style={styles.optionText}>Lớp 5</Text>
              </TouchableOpacity>                
                
            </View>

        </ScrollView>

      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Hi huy, Im MRT, clàm ái j day mêe, I just to say JELLO. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will OKE.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/development-mode'
    );
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 10,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  bannerImage:{
    height:100,
    paddingLeft:10,
    paddingRight:10,
    resizeMode:'contain'
  },
  welcomeImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    margin: 2,
    marginLeft: 2,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  optionApp:{
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionItem:{
    flex:1,
    flexDirection: 'row',
    width: 2*window.width/3,
    backgroundColor:'#03a9f4',
    borderRadius:5,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
    flex:1,
    color: '#fff',
    lineHeight: 24,
    justifyContent:'center',
    textAlign: 'center',
    marginLeft:10,
  },
  level:{
    alignItems:'center',
    flexDirection:'row',
    margin:10,
  }
});
