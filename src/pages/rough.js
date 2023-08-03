<View
        style={{
          height: '8%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={async () => {
            props.navigation.navigate('HomeScreen');
          }}>
          <Ionicons name="arrow-back" size={25} color="grey" />
        </TouchableOpacity>

        <View style={styles.transactionInfo}>
          <Text style={styles.transactionType}>Name of the person</Text>
          <Text style={styles.transactionDateTime}>Location of the user</Text>
        </View>

        <Entypo
            name='message'
            color={'grey'}
            size={60}
        />
      </View>