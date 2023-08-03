import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import UserDetail from '../components/userDetail';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const ChatScreen = (props) => {

  const staticUserData = [
    {
      name : 'Samwell Tarly',
      description : 'The book keeper',
      distance : 1
    },
    {
      name : 'Daenerys Targaryen',
      description : 'Mother of Dragons',
      distance : 1
    },
    {
      name : 'Sansa Stark',
      description : 'Queen in the North',
      distance : 1
    },
    {
      name : 'John Snow',
      description : 'Basterd Son',
      distance : 1
    },
    {
      name : 'Jaime Lannister',
      description : 'Brother of Cersi',
      distance : 1
    },
    {
      name : 'Melisandre',
      description : 'Red Woman',
      distance : 1
    },
    {
      name : 'Brandon Stark',
      description : 'Watcher from far',
      distance : 1
    },
    {
      name : 'Arya Stark',
      description : 'Girl has no name',
      distance : 1
    },
    {
      name : 'Tyrion Lannister',
      description : 'The OG....',
      distance : 1
    },
    {
      name : 'Jorah Mormont',
      description : 'Sir Jorah Mormant',
      distance : 1
    },
    {
      name : 'Catelyn Stark',
      description : 'Mother of all...',
      distance : 1
    }
  ]

  const [userData, setUserData] = useState([]);

  const fetchUserData = () => {
    setUserData(staticUserData)
  }

  useEffect(() => {fetchUserData()}, [])


  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, {flexDirection: 'row', alignItems: 'center'}]}>
        <StatusBar backgroundColor="#E3F4F4" barStyle="dark-content" />
        <TouchableOpacity
          style={styles.backButton}
          onPress={async () => {
            props.navigation.navigate('HomeScreen');
          }}>
          <Ionicons name="arrow-back" size={25} color="grey" />
        </TouchableOpacity>

        <View style={styles.transactionInfo}>
          <Text style={styles.transactionType}>Hey There ! ! ! !
          </Text>
          <Text style={styles.transactionDateTime}>
            Active users in your location
          </Text>
        </View>

        <EvilIcons name="user" color={'grey'} size={60} style={styles.transactionAmount} />

      </View>
      <UserDetail userData={userData} navigation={props.navigation}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#E3F4F4',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    // shadowColor: '#000',
    // shadowOffset: {
    // width: 0,
    // height: 2,
    // },
    // shadowOpacity: 0.3,
    // shadowRadius: 3,
    // elevation: 5,
    // borderWidth: 2,
    // borderColor: '#cccccc',
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 10,
  },
  transactionType: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: '#394867',
  },
  transactionDateTime: {
    fontFamily: 'Montserrat-Regular',
    color: 'black',
    fontSize: 12,
  },
  transactionAmount: {
    fontFamily: 'Montserrat-SemiBold',
    marginRight: 12,
  },
});

export default ChatScreen;
