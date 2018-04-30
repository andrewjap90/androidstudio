import React, {Component} from 'react';
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.menuIconRow}>
          <TouchableOpacity style={styles.menuIcon}
          onPress={() =>
            navigate('Profile')
          }>
            <Text>ke profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIcon}
            onPress={() =>
              navigate('News')
            }>
            <Image style={styles.menuImage} source={{uri:'https://cdn3.iconfinder.com/data/icons/ballicons-reloaded-free/512/icon-70-512.png'}} />
          </TouchableOpacity>
        </View>
        <View style={styles.menuIconRow}>
          <TouchableOpacity>
            <Image style={styles.menuImage} source={{uri:'https://cdn3.iconfinder.com/data/icons/casino-solid-icons-2/48/76-512.png'}} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuIconCircle}>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


export default Home
