import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { VideoView, useVideoPlayer} from 'expo-video';

// icones menu
// import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

// menu sobre
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import telaSobre from './Telas/Sobre';

const Tab = createBottomTabNavigator();

function Menu() {
  return <Tab.Navigator screenOptions={({route})=>({
    tabBarIcon:({focused, color, size})=>{
      let iconName: any;

      if(route.name==="Happy"){
        iconName = focused?'happy':'happy-outline';
      }else if(route.name==="Info"){
        iconName = focused?'information-circle':'information-circle-outline';
      }else if(route.name==="Options"){
        iconName = focused?'apps':'apps-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />
      // return <AntDesign name={iconName} size={size} color={color} />
    },
    headerShown: false,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarInactiveBackgroundColor: 'black'
  })}>
    <Tab.Screen name="Happy" component={telaSobre}/>
    <Tab.Screen name="Info" component={telaSobre}/>
    <Tab.Screen name="Options" component={telaSobre}/>
  </Tab.Navigator>
};

export default function App(){
  return <NavigationContainer>
    <Menu/>
  </NavigationContainer>
}