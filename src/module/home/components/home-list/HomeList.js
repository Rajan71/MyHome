import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Pressable, FlatList, Image } from 'react-native';
import styles from "./HomeListStyles";
import { Images } from "../../../../assets";
import { navigate, vh } from "../../../../utils";

const hoemData = [
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '1', distance: 60 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '2', distance: 30 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '3', distance: 280 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '4', distance: 20 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '5', distance: 40 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '6', distance: 35 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '7', distance: 60 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '8', distance: 40 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '9', distance: 15 },
    { name: 'Sumit Kumar', address: 'U-66,u-block,phase-3, Gurgaon', gender: 'Male', age: '28', image: Images.myHome, id: '10', distance: 10 }
]



const HomeList = () => {
    return (
        <View style={styles.listContainer}>
            <FlatList
                data={hoemData}
                ItemSeparatorComponent={() => <View style={{ marginTop: vh(10) }} />}
                keyExtractor={(item) => item?.id}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable style={styles.listView}
                            onPress={() => navigate('HomeDetailScreen', { home: item })}>
                            <View style={styles.txtContainer}>
                                <Text style={styles.nameTxt}>{`${`Name: `}${item?.name}`}</Text>
                                <Text style={styles.listTxt}>{`${`Gender: `}${item?.gender}`}</Text>
                                <Text style={styles.listTxt}>{`${`Age: `}${item?.age}`}</Text>
                                <Text numberOfLines={2} style={styles.listTxt}>{`${`Address: `}${item?.address}`}</Text>
                            </View>
                            <Image source={item?.image} style={styles.homeIcon} resizeMode="contain" />
                        </Pressable>
                    )
                }
                } />
        </View>
    )
}

export default HomeList;