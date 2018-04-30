import React , {Component} from 'react';
import TabNavigator from 'react-native-tab-navigator';
import axios from 'axios'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import style from '../Style.js'

const styles = StyleSheet.create(style);

const api = 'https://newsapi.org/v2/top-headlines?sources=the-verge&apiKey=ffd17f007dbf415e962ee7ffeef7605b'

class News extends Component {
  constructor(props){
    super(props)
    this.state={
      news: []
    }
  }
  componentDidMount(){
    axios.get(api)
    .then(news=> {
      this.setState({
        news: news.data.articles
      })
    })

    .catch(err=>{
      alert(err)
    })
  }
  render(){
    return(
      <ScrollView>
        <View style={styles.newsRow}>
        {(this.state.news.length === 0)
          ? <Text style={styles.textStyle}>Loading...</Text>
          : (this.state.news.map((n,i)=>
                <View key={i}>
                  <Text>{n.title}</Text>
                  <Text>{n.url}>{n.url}</Text>
                  <Image style={styles.image} source={{uri: n.urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/600px-No_image_available_600_x_450.svg.png'}} />
                </View>
        ))
      }
      </View>
      </ScrollView>
    );
  }
}

export default News
