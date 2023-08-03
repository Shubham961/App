import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center',
          backgroundColor: '#3AA6B9',
          height: '100%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#C1ECE4',
            borderRadius: 10
          }}
          onPress={() => {
            props.navigation.navigate('ChatScreen', {props: props});
          }}>
          <Text style={[styles.text, {paddingTop: 10, paddingBottom: 10, paddingLeft: 60, paddingRight: 60}]}>Chat Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={{
          backgroundColor: '#C1ECE4',
          borderRadius: 10,
          marginTop: 10
        }}
          onPress={() => {
            props.navigation.navigate('MapScreen');
          }}>
          <Text style={[styles.text, {paddingTop: 10, paddingBottom: 10, paddingLeft: 60, paddingRight: 60}]}>Map Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      // marginBottom: 20,
    },
  });

export default HomeScreen;
