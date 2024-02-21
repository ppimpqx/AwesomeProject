import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { View , Image , Text} from 'react-native';
import { Button } from 'react-native';
export default function Hotel() {
    return (
        <View style={{ padding : 20 , flexDirection : "row" , justifyContent : "space-between"}}>
            
            <View style={{ marginTop : 10 }}>
                <Text style={{ fontSize : 15 }}>Price</Text>
                <Text  style={{ fontSize : 20 , color : 'red'}} >$399.99</Text>
                <Text  style={{ fontSize : 15 }} >AVG/Night</Text>
            </View>
            
            <View style={{ flexDirection : "column", marginTop : 10 , padding:20 }}>
                <Button title="Sign up" color="red" />
            </View>
            
        </View>    
    );
}
