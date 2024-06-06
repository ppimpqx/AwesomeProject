import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Event(props) {

    const [onlineTours, setOnlineTours] = useState([]);
    const loadOnlineTours = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json');
            let data = await promise.json();
            console.log("Load Data : ", data);
            //SET STATE
            setOnlineTours(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        loadOnlineTours();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 }}>Up Coming Events</Text>
            <Text style={{ color: "grey", marginVertical: 10 }}>What's the worst That Could Happend</Text>
            <FlatList
                horizontal={true}
                data={onlineTours}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.uri);
                        return (
                            <View style={{ marginRight: 10 }}>
                            <Image style={{ width: 50, height: 50, borderRadius: 50 / 2 }} source={require("../../assets/week3/profile-2.jpg")} />
                                <View style={{flexDirection : "row", marginTop: -30, height: 70, width: 260, paddingHorizontal: 10, backgroundColor: 'lightyellow', borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderColor:"gray" ,borderWidth:1}}>
                                    <View style={{ padding:8 }}>

                                        <Text style={{ fontSize: 16, color: "red" }}>{item.month}</Text>
                                        <Text style={{ textAlign:'center',fontSize: 12, color: "gray" }}>{item.date}</Text>
                                    </View>
                                    <View style={{ padding:8 }}>
                                        <Text style={{ fontSize: 16, color: "black" }}>{item.title}</Text>
                                        <Text style={{ fontSize: 10, color: "gray" }}>{item.datetime}</Text>
                                        <Text style={{ fontSize: 10, color: "gray" }}>{item.place}</Text>
                                    </View>


                                </View>
                            </View>
                        );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>

    );
}