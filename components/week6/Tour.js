import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize : 20 }}>Tour</Text>
            <Text style={{ color:"grey" }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true} style={{ flexDirection : "row" , marginTop : 20}}>
                {/* <TourItem />
                <TourItem />
                <TourItem /> */}
                <View style={{marginRight:10}}>
                    <TourItem />
                </View>     
                <View style={{marginRight:10}}>
                    <TourItem />
                </View>     
                <View style={{marginRight:10}}>
                    <TourItem />
                </View>     
            </ScrollView>
        </View>
    );
}




