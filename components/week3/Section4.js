import React from 'react';
import { View , Image , Text} from 'react-native';

export default function Section4() {
    return (
        <View style={{ borderTopWidth : 0.5 , borderBottomWidth: 0.5 ,padding : 10  }}>
            {/* View ก้อนที่ 3 */}
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize : 20 }}>Hotel Description</Text>
                <Text style={{ color : '#444444' }}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text>
            </View>
        </View>    
    );
}
