import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex12() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex : 1 , flexDirection : 'row' }}>
        <View style={{ backgroundColor: '#50E3C2', flex: 1 }}></View>
        <View style={{ backgroundColor: '#4A90E2', flex: 1 }}></View>
        <View style={{ backgroundColor: '#9013FE', flex: 1 }}></View>
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex01")} />
    </View>
  );
}
