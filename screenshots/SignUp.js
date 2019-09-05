import import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import {Container, Text, Item, Input} from 'native-base'

export default function SignUp(){
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
  async function fetchMyAPI() {
    await _cacheResourcesAsync()
  }

  fetchMyAPI();
}, []);

  const _cacheResourcesAsync = async () => {
    // Amplitude.initialize("26987e0dbb2a78f36735f04af2855fd7")
    // Segment.initialize({ androidWriteKey: "9eohLiNvvYCPmUVjDC98nCU87TWafmuU", iosWriteKey: "Ur6LbuXed9IJbleTxynzlEumTA6CGxT4" })

    await Font.loadAsync({
      Fredoka: require('./assets/Fredoka.ttf'),
      Concert: require('./assets/Concert.ttf'),
      Cabin: require('./assets/Cabin-Regular.ttf'),
      CabinB: require('./assets/Cabin-Bold.ttf'),
      CabinSB: require('./assets/Cabin-SemiBold.ttf'),
      CabinM: require('./assets/Cabin-Medium.ttf'),
    });


}

  if(!isReady){
    return(
      <AppLoading
        startAsync={_cacheResourcesAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    )
  }



  return(
    <Container style={{flex:1}}>
      <View style={{backgroundColor:'#4167B2', justifyContent:'center', alignItems:'center', height: 100}}>
        <Text
          style={{color: 'white', fontSize: 30, fontFamily: 'CabinB', letterSpacing: 10}}>
          AIHR
        </Text>
      </View>

      <View style={{margin: 20, padding: 20, justifyContent:'center', alignItems:'center'}}>

        <View>
          <Text style={{margin:5, padding: 5, fontSize: 30, fontFamily: 'CabinM', textAlign:'center'}}>
            Hello!
          </Text>
          <Text style={{margin:5, padding: 5, fontSize: 30, fontFamily: 'CabinM', textAlign:'center'}}>
            Let's get started.
          </Text>
        </View>
      </View>

      <View style={{marginLeft: 20, paddingLeft: 20, marginRight:20, paddingRight:20, marginBottom:20, justifyContent:'center', alignItems:'center'}}>
        <Item>
            <Input placeholder="First Name" style={{fontFamily:'Cabin'}} />
        </Item>

        <Item>
            <Input placeholder="Last Name" style={{fontFamily:'Cabin'}} />
        </Item>

        <Item>
            <Input placeholder="Email" style={{fontFamily:'Cabin'}} />
        </Item>
      </View>

      <View style={{backgroundColor:'#84CBCF', width: 200, marginTop:30, padding: 20, margin:20, alignSelf:'center', borderRadius:30}}>
        <Text
          style={{color: 'white', textAlign:'center', letterSpacing: 5, fontSize:20, fontFamily: 'CabinSB'}}>
          SUBMIT
        </Text>
      </View>
      <View style={{justifyContent:'center', alignItems:'center'}}>
        <Text note>
          By clicking above you agree to our Terms.
        </Text>
      </View>
    </Container>
  )
}
