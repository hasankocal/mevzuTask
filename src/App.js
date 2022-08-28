import { SafeAreaView, StyleSheet, Text, View, LogBox } from 'react-native'
import React, { useEffect, useState } from 'react'
import SwipeCards from 'react-native-swipe-cards';
import axios from 'axios';


import NoMoreCards from './NoMoreCards';
import Card from './Card';

const App = () => {
  LogBox.ignoreAllLogs(true)
  const [data, setData] = useState()


  const getData = async () => {
    const { data } = await axios.get(`https://api.mevzu.app/api/bundle/temp/?format=json`);
    setData(data.meta_data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleYup = (user) => {
    console.log(user.user_2_full_name + " Liked");
  }
  const handleNope = (user) => {
    console.log(user.user_2_full_name + " Unliked");

  }

  const handleMaybe = (user) => {
    console.log(user.user_2_full_name + " Maybe");
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF1E6" }}>
      <View style={{ backgroundColor: "#FFF1E6" }}>
        <SwipeCards
          cards={data}
          renderCard={(cardData) => <Card {...cardData} />}
          renderNoMoreCards={() => <NoMoreCards />}

          handleYup={handleYup}
          handleNope={handleNope}
          handleMaybe={handleMaybe}
          hasMaybeAction
        />
      </View>
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})