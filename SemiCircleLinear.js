import React from 'react'
import {View} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const SemiCircleLinear = () => {
  return(
    <View  style={{height:100, width:200, borderTopLeftRadius:100, borderTopRightRadius: 100}}>
       <LinearGradient
         colors={['green', 'blue', 'orange']}
         style={{
           width: 200,
           height:200,
           borderTopLeftRadius:50,
           borderTopRightRadius:50,
           padding: 15,
           alignItems: 'center'
         }}
         >
       </LinearGradient>
     </View>
  )
}

export default SemiCircleLinear
