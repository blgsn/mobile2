

import  React from 'react';

import {
  StyleSheet, Image,
  View, 
  FlatList,
  useWindowDimensions,
  TextInput,
} from 'react-native';
//
const INTRO_DATA = [
  { 
    key: '1',
    img: require('./assets/images/working.png'),
    image: require('./assets/images/company.png'),
  },
];
const INTRO_DATA1 = [
  {
      user_id: 1,
      user_image: require('./assets/images/menü.png'),
      user_name: 'Günün Menüsü',
      avatar: require('./assets/images/menü.png'),
  },
  {
      user_id: 2,
      user_image: require('./assets/images/kadincalisan.png'),
      user_name: "Bayram Kutlaması",
      avatar: require('./assets/images/kadincalisan.png'),
  },
  {
    user_id: 3,
    user_image: require('./assets/images/anket.png'),
    user_name: "Digitus Anket",
    avatar: require('./assets/images/anket.png'),
  },
  {
    user_id: 4,
    user_image: require('./assets/images/duyurular1.png'),
    user_name: "Duyuru ve Genelgeler",
    avatar: require('./assets/images/duyurular1.png'),
  },
  {
    user_id: 5,
    user_image: require('./assets/images/doğan1.png'),
    user_name: "Bugün Doğanlar",
    avatar: require('./assets/images/doğan1.png'),
  },
  {
    user_id: 6,
    user_image: require('./assets/images/katılanlar1.png'),
    user_name: "Aramıza Katılanlar",
    avatar: require('./assets/images/katılanlar1.png'),
  },
];




const App = () => {
  const { width } = useWindowDimensions();
  const renderItem = React.useCallback( 
 
    ({ item }) => {
  return (
    <View style={[styles.itemContainer, { width: width - 80 }]}>

    <Image source={item.img} style={styles.workImg}/>
    
    <Image source={item.image} style={styles.image4} />
   
    </View>
    
        );
        
}, [width],
  );
  const keyExtractor = React.useCallback((item) => item.key, []);

  return (
   
    
    <View style={[styles.container]}> 
    <FlatList
        data={INTRO_DATA}
        keyExtractor={keyExtractor}
        
        style={styles.flatList}
       
        renderItem={renderItem}
        />
     
     
			
		
 
   
            
			<Image style={styles.user} source={require('./assets/images/user.png')}></Image>
      <Image style={styles.not1} source={require('./assets/images/abc.png')}></Image>
      </View>
    );}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e7e8e9',
   marginBottom:-4120,
   marginTop:-5,
paddingBottom:10,
paddingTop:10,
    alignItems: 'center',
 zIndex:0,
    justifyContent: 'center',
  },
  workImg:
  {
    flex: 4,
  width: 375,
  height: 360,
  margin:10,
  marginTop: -460,
  marginBottom: 50,
  top:-1558,
  left:0,
  resizeMode: 'contain',
  },
  image4: {
    flex: 4,
    width: 370,
    height: 340,
    margin:10,
    marginTop: 40,
    marginBottom:-100,
    
    top:-1657,
    left:-5,
    marginLeft: 15,
    resizeMode: 'contain',
    },
    not1: {
      flex: 8,
      width: 428,
      height: 98,
      margin:1,
      marginTop: -3800,
      paddingBottom:-15,
      paddingTop:-15,
       marginBottom:-100,
       top: -1217,
       
       left:-4,
      resizeMode: 'contain',
      
    },
user: {
  flex: 4,
    width: 425,
    height: 265,
    margin:10,
    marginTop: -1200,
    marginBottom: 10,
    padding:-50,
    top:-1015,
    left:-2,
    marginLeft: 10,
    resizeMode: 'contain',
},
itemContainer: {
  
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#ffff',
  marginTop:2290,
  marginBottom:80,
  bottom:10,
  marginHorizontal: 20,
  paddingBottom:510,
  borderRadius: 20,
},
flatList: {
  flex: 1,
},
story:{
  flex:4,
  
}

  
});
export default App;
