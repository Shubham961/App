import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const UserDetail = ({userData, navigation}) => {
  const renderPeople = ({item, index}) => {
    return (
      <TouchableOpacity
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('MessagesScreen', {
            name: item.name,
            description: item.description,
          });
        }}>
        <EvilIcons name="user" color={index%2 == 0 ? '#3AA6B9' : 'grey'} size={60} />
        <View
          style={{
            height: 45,
            width: 2,
            backgroundColor: 'grey',
            marginRight: 10,
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '70%',
            maxWidth: '65%',
            minWidth: '65%',
          }}>
          <Text style={{color : index%2 == 0 ? '#3AA6B9' : 'grey', fontWeight: 700, fontSize : 18}}>{item.name}</Text>
          <Text>
            {item.description}
            {' | Distance : '}
            {item.distance}{' kms.'}
          </Text>
        </View>
        <Entypo name="message" color={index%2 == 0 ? '#3AA6B9' : 'grey'} size={60} />
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={userData}
        keyExtractor={item => item.id}
        renderItem={renderPeople}
        contentContainerStyle={styles.userContainer}
        inverted
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    paddingLeft: 8,
    // paddingBottom: 0,
  },
});

export default UserDetail;
