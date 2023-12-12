import React from "react";
import { View } from "react-native";
import { Text, Button } from 'react-native-elements';

const Graph = () =>{
    return(
        <View>
            <Text h1>Hello, React Native Elements for Graph!</Text>
      <Button
        title="Press me"
        onPress={() => console.log('Button pressed')}
      />
        </View>
    )
}


export default Graph