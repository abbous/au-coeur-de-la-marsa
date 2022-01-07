import React,{Fragment, useState}from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Modal,
    Alert,
    ActivityIndicator,
    ToastAndroid,
    Dimensions
  } from 'react-native';
  import { BASE_URL } from "@env";


const ItemList = ({item}) => {
    const [productVisible, setProductVisible] = useState(false);
    console.log(item.location.Address);
    const ToggleProductVisible = () => {
        setProductVisible(!productVisible);
      };

    return (
    <Fragment>
<View style={styles.container}>
    <TouchableOpacity style={styles.card} onPress={() => ''}>
        {/* {item && item.image.map((image,i)=>
        <Image
        key={i}
        style={styles.cardImage}
        source={{ uri: `${BASE_URL + image.url}` }}     
           />
        )} */}
         <Image
        style={styles.image}
        source={{ uri: `${BASE_URL + item.seo.metaImage.url}` }}     
           />
    <View style={styles.cardContent}>

            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>{item.seo.metaDescription}</Text>
            <Text style={styles.address}>{item.location.Address}</Text>
          {/* <TouchableOpacity
            style={styles.followButton}
            >
            <Text style={styles.followButtonText}>Afficher</Text>
          </TouchableOpacity> */}
          </View>
    
  
  </TouchableOpacity>
  </View>
  </Fragment> 
)
}

export default ItemList

const styles = StyleSheet.create({
    container: {
        flex:1,
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
    /******** card **************/
    // card: {
    //   shadowColor: '#00000021',
    //   shadowOffset: {
    //     width: 2,
    //   },
    //   shadowOpacity: 0.5,
    //   shadowRadius: 4,
    //   marginVertical: 8,
    //   backgroundColor: 'white',
    //   flexBasis: '47%',
    //   marginHorizontal: 5,
    //   borderRadius: 4,
    // },
 
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 12.5,
      paddingBottom: 10,
      paddingHorizontal: 16,
      borderBottomLeftRadius: 1,
      borderBottomRightRadius: 1,
    },
    cardImage: {
      borderRadius: 3.5,
      flex: 1,
      height: 150,
      width:150,
      resizeMode: 'center',
    },
    /******** card components **************/
    // title: {
    //   fontSize: 18,
    //   flex: 1,
    // },
    // price: {
    //   fontSize: 16,
    //   color: 'green',
    //   marginTop: 5,
    // },
    // name: {
    //   fontSize: 18,
    //   color: 'black',
    //   marginTop: 5,
    // },
    // buyNow: {
    //   color: 'purple',
    // },
    // icon: {
    //   width: 25,
    //   height: 25,
    // },
    // /******** footer content ******************/
    // footerBarContainer: {
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   flexDirection: 'row',
    //   flex: 1,
    // },
    // footerBarSection: {
    //   justifyContent: 'center',
    //   flexDirection: 'row',
    //   flex: 1,
    // },
  
    // buyButton: {
    //   marginTop: 10,
    //   height: 35,
    //   width: 100,
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   borderRadius: 30,
    //   backgroundColor: '#00BFFF',
    // },
    // buyButtonText: {
    //   color: '#FFFFFF',
    //   fontSize: 20,
    // },
    ///******new desgin */

    header:{
        backgroundColor: "#00CED1",
        height:200
      },
      headerContent:{
        padding:30,
        alignItems: 'center',
        flex:1,
      },
      detailContent:{
        top:80,
        height:500,
        width:Dimensions.get('screen').width - 90,
        marginHorizontal:30,
        flexDirection: 'row',
        position:'absolute',
        backgroundColor: "#ffffff"
      },
      userList:{
        flex:1,
      },
      cardContent: {
          flex:1,
    marginVertical: 8,
    marginHorizontal: 16,
      },
      image:{
        width:90,
        height:90,
        borderRadius:2,
        resizeMode:'cover'
      },
    
    
    
      card:{
        shadowColor: '#00000021',
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
    
        marginVertical: 10,
        marginHorizontal:10,
        backgroundColor:"white",
        flexBasis: '46%',
        padding: 10,
        flexDirection:'row',
      },
    
      name:{
        fontSize:18,
        color:"#008080",
        fontWeight:'bold',
      },
      position:{
        fontSize:15,
        alignSelf:'center',
        color:"black"
      },
      address:{
        fontSize:14,
        alignSelf:'center',
        color:"grey"
      },
      about:{
        marginHorizontal:10
      },
    
      followButton: {
        marginTop:10,
        height:35,
        width:100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:30,
        backgroundColor: "#00BFFF",
      },
      followButtonText:{
        color: "#FFFFFF",
        fontSize:20,
      },
     /************ modals ************/
      popup: {
        backgroundColor: 'white',
        marginTop: 80,
        marginHorizontal: 20,
        borderRadius: 7,
      },
      popupOverlay: {
        backgroundColor: "#00000057",
        flex: 1,
        marginTop: 30
      },
      popupContent: {
        //alignItems: 'center',
        margin: 5,
        height:250,
      },
      popupHeader: {
        marginBottom: 45
      },
      popupButtons: {
        marginTop: 15,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: "#eee",
        justifyContent:'center'
      },
      popupButton: {
        flex: 1,
        marginVertical: 16
      },
      btnClose:{
        height:20,
        backgroundColor:'#20b2aa',
        padding:20
      },
      modalInfo:{
        alignItems:'center',
        justifyContent:'center',
      }
  });