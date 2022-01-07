import React,{useEffect, useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ItemList from '../components/ItemList';

export default function ListScreen({navigation,route}) {

    const [categoryList,setCatgeoryList]= useState([]);
    
    const rout = useRoute();

    
useEffect(() => {
    
    setCatgeoryList(rout.params.data.hotels)

}, [])
    //console.log(rout.params.data.hotels.map(e=>e.description))

     // AsyncStorage.setItem(
     //     'catg',
     //     JSON.stringify(rout.params.data.name),
     //   );



    return (
        <View>
            {/* {categoryList && categoryList.map(ele=>
            console.log(ele.description)
            )} */}

            <FlatList
            data={categoryList}
            columnWrapperStyle={styles.listContainer}
            horizontal={false}
            numColumns={2}
            keyExtractor={item => {
              return item.id;
            }}
         
            renderItem={post => {
              const item = post.item
              return <ItemList item={item} />
            }}
          />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      list: {
        paddingHorizontal: 5,
        backgroundColor: '#E6E6E6',
      },
      listContainer: {
        alignItems: 'center',
      },
      separator: {
        marginTop: 0,
      },
})
