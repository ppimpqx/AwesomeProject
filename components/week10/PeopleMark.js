import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

export default function PeopleMark(props) {

  return props.items.map((item) => (
    <Marker
      coordinate={{
        "latitude": Number(item.latitude),
        "longitude": Number(item.longitude)
      }}
      title={item.user_id}
      key={item.id.toString()}
      description={item.address}
    >
        <FontAwesome name="user" size={20} color="tomato" />
    </Marker>
  ));
}

