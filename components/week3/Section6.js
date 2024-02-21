import React from 'react';
import { View , Image , Text} from 'react-native';

export default function Section6() {
    return (
        <View style={{ padding : 20 ,borderBottomWidth: 0.5}}>
            
            
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Location</Text>
                <Text style={{ color : '#444444' }}>218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
</Text>
            </View>
            <View style={{ flexDirection : "row"}}>
                <Image style={{ flex : 1 , resizeMode : "cover", aspectRatio : 4/2 }} source={require("../../assets/week3/map.jpg")} />
            </View>
        </View>    
    );
}
