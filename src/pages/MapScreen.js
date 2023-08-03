import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import MapboxGL from '@rnmapbox/maps';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

MapboxGL.setAccessToken(
  'sk.eyJ1Ijoic2h1YmhhbTY5OTY2OTk2IiwiYSI6ImNsa3MzZTFoMzNhcHMzY2tnbTh5dmJsMmQifQ.AoTheZJlkUykz9MPfgWdfg',
);

const MapScreen = props => {
  const coordinates = [
    [-73.96682739257812, 40.761560925502806],
    [-74.00751113891602, 40.746346606483826],
    [-73.95343780517578, 40.7849607714286],
    [-73.98880004882812, 40.758960433915284],
    [-73.96064758300781, 40.718379593199494],
    [-73.95172119140624, 40.82731951134558],
    [-73.9829635620117, 40.769101775774935],
    [-73.9822769165039, 40.76273111352534],
    [-73.98571014404297, 40.748947591479705],
  ];

  const renderAnnotation = counter => {
    const id = `pointAnnotation${counter}`;
    const coordinate = coordinates[counter];
    const title = `Longitude: ${coordinates[counter][0]} Latitude: ${coordinates[counter][1]}`;

    return (
      <MapboxGL.PointAnnotation
        key={id}
        id={id}
        title="Test"
        onSelected={() => {props.navigation.navigate('ChatScreen');}}
        coordinate={coordinate}>
        <View
          style={{
            height: 40,
            width: 40,
          }}>
          <Entypo name="location-pin" color={'red'} size={20} />
        </View>
      </MapboxGL.PointAnnotation>
    );
  };

  const renderAnnotations = () => {
    const items = [];

    for (let i = 0; i < coordinates.length; i++) {
      items.push(renderAnnotation(i));
    }

    return items;
  };

  return (
    <View style={styles.page}>
      
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} key="mainmap">
          <MapboxGL.Camera
            zoomLevel={12}
            centerCoordinate={[-73.98330688476561, 40.761560925502806]}
          />
          {renderAnnotations()}
          <TouchableOpacity style={{marginTop: 50, marginLeft: 20}} onPress={() => {props.navigation.navigate('HomeScreen');}}>
            <FontAwesome name="backward" color={'black'} size={20} />
          </TouchableOpacity>
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 20,
    marginRight: 12,
  },
});

export default MapScreen;
