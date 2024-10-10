import {
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import React, { memo } from "react";
import { ListingElem } from "@/interfaces/listingdata";
import { Link } from "expo-router";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import { useDynamicStyles } from "@/hooks/useDynamic";

interface Props {
  listings: ListingElem[];
  category: string;

}

const Listings = ({ listings: items, category }: Props) => {
  const dynamicStyle = useDynamicStyles();

  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listings/${item.id}`} asChild>
      <TouchableOpacity>
        <View style={[dynamicStyle.marginB, { position: "relative" }]}>
          <Image
            source={{ uri: item.medium_url }}
            resizeMode="cover"
            style={[dynamicStyle.imgWH, defaultStyles.imgRadius]}
          />
          <TouchableOpacity
            style={[dynamicStyle.heartIcon, { position: "absolute" }]}
          >
            <Ionicons
              name="heart-outline"
              size={25}
              color="#fff"
              fontFamily="mon-b"
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[dynamicStyle.font12, { fontFamily: "mon-b" }]}>
              {item.name}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
                paddingRight: 10,
              }}
            >
              <Ionicons name="star" size={24} />
              <Text>{item.review_scores_rating / 20}</Text>
            </View>
          </View>
          <View>
            <Text>{item.room_type}</Text>
            <Text>Hosted by {item.host_name}</Text>
            <View style={{ flexDirection: "row", gap: 4 }}>
              <Text style={{ fontFamily: "mon-sb" }}>$ {item.price}</Text>
              <Text style={{ fontFamily: "mon" }}>night</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={[defaultStyles.container, dynamicStyle.paddingH, { flex: 1 }]}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={items}
          renderItem={renderRow}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </GestureHandlerRootView>
  );
};

export default memo(Listings);
