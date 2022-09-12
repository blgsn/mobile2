import  React from 'react';
import {
  StyleSheet, Image,
  View,
   Text,FlatList,SafeAreaView,
} from 'react-native';

export default function App(){
const data = [
  
 
  {
    key: '2',
    user_image: require('./assets/images/kadincalisan.png'),
user_name: "  Bayram\n Kutlaması",
},
{
  key: '3',
  user_image: require('./assets/images/anket.png'),
user_name: "   Digitus\n    Anket",
},
{
  key: '4',
  user_image: require('./assets/images/duyurular1.png'),
user_name: " Duyuru ve\nGenelgeler",
},
{
  key: '5',
  user_image: require('./assets/images/doğan1.png'),
user_name: "    Bugün\n  Doğanlar",
},
{
  key: '6',
  user_image: require('./assets/images/katılanlar1.png'),
 user_name: "   Aramıza\n  Katılanlar",
 
},];

const oneData=({item})=>(
  <View style={styles.item}>
   
    <View style={styles.avatarContainer} >
    <Image source={item.user_image} style={styles.userimg}/>   
    
    </View>
    
  <Text style={styles.name}>{item.user_name}</Text>
  
  </View>
  
)
headerComponent=()=>{
  return <View style={styles.headContainer}>
  <Image style={styles.head} source={require('./assets/images/menü.png')}/>
  <Text style={[styles.name,{marginTop:6},{marginLeft:2}]}> Günün{'\n'}Menüsü</Text>
   </View>
}

itemSeparator=()=>{
  return <View style={styles.separator}/>
}

  
  return (
    <SafeAreaView> 
     <View style={styles.s1}></View>
     <FlatList
     data={data}
     renderItem={oneData}
     ItemSeparatorComponent={itemSeparator}
     ListHeaderComponentStyle={styles.listHeader}
     ListFooterComponent={headerComponent}
     horizontal
     pagingEnabled
     showsVerticalScrollIndicator={false}
        
        decelerationRate={'normal'}
        scrollEventThrottle={16}
     />
      <View style={styles.container}>
        <Image style={styles.user} source={require('./assets/images/user.png')}></Image>
        <Image style={styles.workImg} source={require('./assets/images/working.png')}></Image>
        <Image style={styles.image4} source={require('./assets/images/company.png')}></Image>
        <Image style={styles.not1} source={require('./assets/images/abc.png')}></Image>
        <View style={styles.s} ></View>
        </View>
      </SafeAreaView>
        );
}        




const styles = StyleSheet.create({
  listHeader:{
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  headContainer:{
    borderRadius:100,
    height:59,
    width:59,
    borderColor:'#adb1af',
    borderWidth:1.5,
    right:278,
    top:12,
    justifyContent: 'space-between',
  alignItems: 'center',
  },
  container:{
    backgroundColor: '#dbdcdb',
paddingBottom:'100%',
paddingTop:'100%',

borderTopColor:'#c9caca',
borderWidth:3,
left:-1.7,
  },
  s:{
    width: 415,
height: 90,
borderBottomRightRadius:20,
borderBottomLeftRadius:20,
overflow:'hidden',
backgroundColor: "black",
top:215,
zIndex:-1,
},
s1:{
width: 415,
height: 90,
borderTopRightRadius:20,
borderTopLeftRadius:20,
overflow:'hidden',
backgroundColor: "black",
top:-48,
marginBottom:20,

},
 separator: {
    width: '100%',
    heigth:1,
    backgroundColor: 'transparent',
  },
  workImg:
  {
    flex: 16,
  width: 385,
  height: 400,
  
  marginTop: 105,
  marginBottom: -780,
  top:-435,
  left:12,
  resizeMode: 'contain',
  position:'relative',
  },
  image4: {
    flex: 16,
    width: 375,
    height: 330,
    zIndex:-1,
    top:365,
    left:16,
    resizeMode: 'contain',
    },
    user: {
      flex: 4,
      width: 425,
      height: 70,
   position:'relative',
      top:-555,
      left:-8,
      resizeMode: 'contain',
      marginTop:-40,
      marginBottom:-110,
      },
    not1: {
      flex: 8,
      width: 428,
      height: 100,
      margin:1,
       top: 469,
       position:'absolute',
       left:-12,
      resizeMode: 'contain',
      
    },
userimg: {
  flex: 2,
    width: 52,
    height: 52,
    resizeMode: 'contain',
   
    alignSelf:'center',
  
    
   
},
name: {
    fontSize:11,
    color:'#c8c1c1',
},
item:{
  flex:1,
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'space-between',
  paddingVertical:13,
  backgroundColor:'white',
  marginLeft:-57,
  left:135,
  
},
avatarContainer: {
  justifyContent: 'space-between',
  alignItems: 'center',
  borderRadius:100,
  height:59,
  width:59,
  borderColor:'#4dcba3',
  borderWidth:1.5,
},
head: {
  top:1.8,
  borderRadius:100,
  height:52,
  width:52,
 
},
});



