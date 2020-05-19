import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from "react-native";

export default class MainScreen extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.hello}>Hello, FlappyBird!</Text>
        </View> 
      </SafeAreaView>
    )
  }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hello: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})