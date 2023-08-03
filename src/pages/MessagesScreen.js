import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  StyleSheet,
  BackHandler,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const MessagesScreen = props => {

  let userName = 'John Snow';
  let userId = '9800270888';

  const staticMessages = [
    {
        userId: '9800270888',
        id: '1689234728343',
        message: "Night King has come to the walls, we need to prepare",
        user: 'John Snow',
        uploads: {},
        date: '12/03/2022 - 10:11',
        time: '10 : 11',
      },
      {
        userId: 'some other thing',
        id: '1689234728344',
        message: "Don't worry I have drogons, we will burn them all",
        user: props.route.params.name,
        uploads: {},
        date: '12/03/2022 - 10:11',
        time: '10 : 11',
      },
      {
        userId: '9800270888',
        id: '1689234728345',
        message: "What if, Fire of drogon doesen't work on them",
        user: 'John Snow',
        uploads: {},
        date: '12/03/2022 - 10:11',
        time: '10 : 11',
      },
      {
        userId: 'some other thing',
        id: '1689234728346',
        message: "Don't worry, we will see it there only, we are going to make it",
        user: props.route.params.name,
        uploads: {},
        date: '12/03/2022 - 10:11',
        time: '10 : 11',
      }
  ]



  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const flatListRef = useRef(null);

  const fetchMessages = async () => {
    setMessages(staticMessages.reverse())
  };

  useEffect(() => {
    // write the code here
    fetchMessages()
  }, [])


  const scrollToEnd = () => {
    if (flatListRef.current && messages.length > 0) {
      flatListRef.current.scrollToIndex({index: 0, animated: true});
    }
  };


  const renderChatItem = ({item}) => {
    const isCurrentUser = item.userId === userId;
    const bubbleColor = isCurrentUser ? '#394867' : '#E3F4F4';
    const textColor = isCurrentUser ? 'white' : 'black';


    return (
      <View>
        <View
          style={[
            styles.chatBubble,
            {
              backgroundColor: bubbleColor,
              alignSelf: isCurrentUser ? 'flex-end' : 'flex-start',
            },
          ]}>
          <Text
            style={{
              color: isCurrentUser ? 'white' : 'red',
              fontFamily: 'Montserrat-Bold',
              fontSize: 12,
              marginBottom: 3,
            }}>
            {item.userId === userId ? 'You' : item.user}
          </Text>
          <Text style={[styles.chatText, {color: textColor}]}>
            {item.message}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'Montserrat-Medium',
            alignSelf: isCurrentUser ? 'flex-end' : 'flex-start',
            fontSize: 11,
            color: '#454545',
            marginLeft: 8,
            marginTop: 4,
          }}>
          {item.date} | {item.time}
        </Text>
      </View>
    );
  };

  const sendMessage = async () => {
    let timeStamp = new Date().getTime();

    const newMessageData = {
      userId: userId,
      id: timeStamp,
      message: newMessage,
      user: userName,
      uploads: {},
      date:
        new Date(timeStamp).getDate() +
        '-' +
        String(new Date(timeStamp).getMonth() + 1),
      time:
        new Date(timeStamp).getHours() + ':' + new Date(timeStamp).getMinutes(),
    };


    const updatedMessages = [newMessageData, ...messages];

    setMessages(updatedMessages);
    setNewMessage('');
    scrollToEnd();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#E3F4F4" barStyle="dark-content" />
        <TouchableOpacity
          style={styles.backButton}
          onPress={async () => {
            console.log('Here is the statement...')
            props.navigation.navigate('ChatScreen')
          }}>
          <Ionicons name="arrow-back" size={25} color="grey" />
        </TouchableOpacity>

        <View style={styles.transactionInfo}>
          <Text style={styles.transactionType}>{props.route.params.name}
          </Text>
          <Text style={styles.transactionDateTime}>
          {props.route.params.description}
          </Text>
        </View>

        <EvilIcons name="user" color={'grey'} size={60} style={
            styles.transactionAmount} />
      </View>


      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderChatItem}
        contentContainerStyle={styles.chatContainer}
        inverted
      />


      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder='Type your message'
            value={newMessage}
            onChangeText={setNewMessage}
            autoFocus={true}
          />


          <TouchableOpacity
            style={[
              styles.sendButton,
              {backgroundColor: newMessage ? '#394867' : '#C3C3C3'},
            ]}
            onPress={() => {
              sendMessage();
            }}
            disabled={!newMessage}>
            <MaterialIcons name="send" size={27} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gradientContainer: {
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
  chatContainer: {
    padding: 16,
    paddingBottom: 0,
  },
  chatBubble: {
    borderRadius: 12,
    padding: 10,
    maxWidth: '75%',
    marginVertical: 5,
  },
  chatText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#E3E3E3',
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    marginRight: 10,
    fontFamily: 'Montserrat-Regular',
  },
  sendButton: {
    borderRadius: 25,
    padding: 8,
  },
});


export default MessagesScreen;



