import { View, Text, SafeAreaView, } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Stack } from 'expo-router'
import ExploreHeader from '@/components/explore/ExploreHeader'
import ListingsData from '../../assets/data/airbnb-listings.json'
import Listings from '@/components/listings/Listings'
import ListingsDataGeo from "../../assets/data/airbnb-listings.geo.json"
import ListingsMap from '@/components/listingmap/ListingsMap'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ListingsBottomSheet from '@/components/listingsBottom/ListingsBttmSheet'
const Index = () => {
  const [category, setCategory] = useState("Tine homes")
  const items = useMemo(() => ListingsData as any, [])
  const geoItems = useMemo(() => ListingsDataGeo, [])
  const onDataChanged = (category:string) =>{
    console.log("Changed", category)
    setCategory(category)
  }
  return (
   <GestureHandlerRootView>
     <View style={{flex:1}}>
        <Stack.Screen
        options={{
          header:() => <ExploreHeader onCategoryChanged={onDataChanged}/>
        }}/>
          {/* <Listings listings={items} category={category}/>   */}
          <ListingsMap  geoItem={geoItems}/> 
          <ListingsBottomSheet listings={items} category={category} refresh={0} />
    </View>
   </GestureHandlerRootView>
  )
}

export default Index