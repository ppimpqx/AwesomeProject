import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { Button, View } from 'react-native';

export default function Ex10() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor : '#4A90E2' , flex : 1 }}></View>
      <Button title="Next" onPress={() => navigation.navigate("Ex11")} />
    </View>      
  );
}
