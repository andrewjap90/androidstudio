/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StackNavigator } from 'react-navigation';
import {
  StyleSheet,
  Image,
} from 'react-native';

import HomeScreen from './Components/Home'
import ProfileScreen from './Components/Profile'

import News from './Components/News'

const Home = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      selectedTab: 'home'
    }
  }

  render() {
    return (
      <TabNavigator>
    <TabNavigator.Item
      selected={this.state.selectedTab === 'home'}
      title="Home"
      renderIcon={() => <Icon name="home" size ={20} color="#bbd3f7" /> }
      renderSelectedIcon={ () => <Icon name="home" size ={20} color="#161616" /> }
      //badgeText="1"
      onPress={() => this.setState({ selectedTab: 'home' })}>
      <Home />
    </TabNavigator.Item>
      <TabNavigator.Item
          selected={this.state.selectedTab === 'profile'}
          title="News"
          renderIcon={() => <Icon name="news" size ={20} color="#bbd3f7"  />}
          renderSelectedIcon={() => <Icon name="news" size ={20} color="#bbd3f7" />}
          onPress={() => this.setState({ selectedTab: 'profile' })}>
          <News />
      </TabNavigator.Item>
    </TabNavigator>

    );
  }
}
