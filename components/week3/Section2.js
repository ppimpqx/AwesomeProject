import React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import { View , Image , Text} from 'react-native';
export default function Section2() {
    return (
        <View style={{ padding : 20  }}>
            {/* View ก้อนที่ 1 */}
            
            <View style={{ alignItems: 'center', flex: 1, marginTop: -50, padding: 10, backgroundColor: '#fffafa' , borderRadius: 10 }}>
            {/* View ก้อนที่ 3 */}
            <View style={{ marginTop : 10 , alignItems: 'center'}}>
                <Text style={{ fontSize : 20 }}>Hilton San Francisco</Text>
            </View>
            {/* View ก้อนที่ 4 */}
            <View style={{ flexDirection : "row", justifyContent : "center", marginTop : 10}}>
                <View style={{ flexDirection : "row"}}>
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star" size={20} color="orange" />
                    <FontAwesome name="star-half" size={20} color="orange" />
                </View>
            </View>
            <View style={{ marginTop : 10}}>
                <Text style={{ textAlign : 'center',fontSize : 15 ,color : 'gray'}}>Facilities provided may range from a modest quality mattress in a small room to large suites
            </Text>
            </View>
            </View>
        </View>    
        
    );
}
