import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Dimensions,

} from "react-native";
import React, { useRef, useState } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "nativewind";
import { Link } from "expo-router";
import * as Haptics from "expo-haptics"
import { explorescroll } from "@/constants/explorescroll";
import { useDynamicStyles } from "@/hooks/useDynamic";



interface Props{
  onCategoryChanged:(category:string) => void
}

const ExploreHeader = ({onCategoryChanged}:Props) => {
  const [active, setActive] = useState(0);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const scrollRef = useRef<ScrollView>(null);

  const dynamicStyle = useDynamicStyles();

  const selectCategory = (index:number) => {
    const selected = itemsRef.current[index];
    
    setActive(index);

    selected?.measure((x) => {
      scrollRef.current?.scrollTo({x: x - 8, y:0})
    })
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
    onCategoryChanged(explorescroll[index].name)
  }
  return (
    <SafeAreaView style={{ backgroundColor:"#fff", paddingTop: (StatusBar.currentHeight || 0) + 30 }}>
      
      <View style={[styles.exploreRow, dynamicStyle.paddingH]}>
       <Link href='/(modals)/booking' asChild>
       <TouchableOpacity style ={styles.exploreSearch} >
          <Ionicons name="search" size={25} color="#000" />
          <View>
            <Text style={{fontFamily:"mon-b"}}>Where to?</Text>
            <Text>Anywhere • Any week • Add guests</Text>
          </View>
        </TouchableOpacity>
       </Link>

        <TouchableOpacity style={styles.exploreOption}>
          <Ionicons name="options" size={25} />
        </TouchableOpacity>
      </View>

        <ScrollView horizontal
        ref={scrollRef} 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            alignContent:"center",
            gap:20,
            marginTop:15,
            paddingHorizontal: 20
        }} >
            {
                explorescroll.map((item, index) => (
                    <TouchableOpacity
                    ref={(el) => (itemsRef.current[index])= el}
                    onPress={() => selectCategory(index)} key={index} style={[styles.scroll, (active === index && styles.scrollAct)]}>
                       <MaterialIcons name={item.icon as any} size={25}/> 
                       <Text style={[styles.scrollName, (active === index  && styles.scrollNameAct)]}>{item.name}</Text>
                    </TouchableOpacity>
                ))
            }

        </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  exploreRow:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",

    gap:22,
  },
  exploreSearch:{
    flex:3,
    padding:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    borderWidth:2,
    borderRadius:40,
  },

  exploreOption:{
    
    padding:10,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:10,
    borderWidth:2,
    borderRadius:40,
  },
  scroll:{
    flexDirection:"column",
    gap:10,
    justifyContent:"center",
    alignItems:"center"
    
  },
  scrollAct:{
    borderBottomWidth:3,
    borderColor:"#000"
  },
  scrollName:{
      fontSize:16,
      paddingBottom:10,
  },
  scrollNameAct:{
    color:"#000"
  }
})

export default ExploreHeader;
