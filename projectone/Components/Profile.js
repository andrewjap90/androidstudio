import React, {Component} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import style from '../Style'

const styles = StyleSheet.create(style);

class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>ini profile</Text>
      </View>
    )
  }
}

export default Home
