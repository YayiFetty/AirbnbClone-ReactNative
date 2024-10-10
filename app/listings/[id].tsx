import { router, useLocalSearchParams, useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import listingsData from "../../assets/data/airbnb-listings.json";
import { Ionicons } from "@expo/vector-icons";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  const listingId = listingsData.find((item) => item.id === id);
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
      headerRight: () => (
        <View>
          <TouchableOpacity>
            <Ionicons name="share-outline" size={25} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={25} color="#000" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <ScrollView style={styles.container}>
      {/* Static Image */}
      <Image source={{ uri: listingId?.xl_picture_url }} style={styles.image} />

      {/* Details Section */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{listingId?.name}</Text>
        <Text style={styles.location}>
          {listingId?.room_type} in {listingId?.smart_location}
        </Text>
        <Text style={styles.rooms}>
          {listingId?.guests_included} guests· {listingId?.bedrooms} bedroom ·{" "}
          {listingId?.beds} bed · {listingId?.bathrooms} bathroom
        </Text>
        <Text style={styles.description}>{listingId?.description}</Text>
      </View>

      {/* Reserve Button */}
      <View style={defaultStyles.footer}>
        <View
          style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <TouchableOpacity style={styles.footerText}>
            <Text style={styles.footerPrice}>${listingId?.price}</Text>
            <Text>night</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[defaultStyles.btn, { paddingRight: 20, paddingLeft: 20 }]}>
            <Text style={defaultStyles.btnText}>Reserve</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height:300 ,
    width: "100%",
  },
  infoContainer: {
    padding: 24,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: 'mono-sb',
  },
  location: {
    fontSize: 18,
    marginTop: 10,
    fontFamily: 'mono-sb',
  },
  rooms: {
    fontSize: 16,
    color: Colors.grey,
    marginVertical: 4,
    fontFamily: 'mono',
  },
  ratings: {
    fontSize: 16,
    fontFamily: 'mono-sb',
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
    marginVertical: 16,
  },
  host: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: Colors.grey,
  },
  hostView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  footerText: {
    height: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  footerPrice: {
    fontSize: 18,
    fontFamily: 'mono-sb',
  },
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    color: Colors.primary,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  header: {
    backgroundColor: '#fff',
    height: 100,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,
  },

  description: {
    fontSize: 16,
    marginTop: 10,
    fontFamily: 'mono',
  },
});

export default DetailsPage;
