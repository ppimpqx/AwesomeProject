import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex11() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <><View style={{ backgroundColor: '#4A90E2', flex: 1 }}></View>
      <View style={{ backgroundColor: '#50E3C2', flex: 1 }}></View></>
      <Button title="Next" onPress={() => navigation.navigate("Ex12")} />
    </View>
  );
}
