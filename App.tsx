import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';
import { VideoView, useVideoPlayer} from 'expo-video';

// icones menu
import AntDesign from '@expo/vector-icons/AntDesign';

// menu sobre
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import telaSobre from './Telas/Sobre';

const Tab = createBottomTabNavigator();

function Menu() {
  return <Tab.Navigator screenOptions={({route})=>({
    tabBarIcon:({focused, color, size})=>{
      let iconName: any;

      if(route.name==="Sobre"){
        iconName = focused?'baidu':'baidu-outline';
      }
      return <AntDesign name={iconName} size={size} color={color} />
    },
    headerShown: false,
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
    tabBarInactiveBackgroundColor: 'black'
  })}>
    <Tab.Screen name="Sobre" component={telaSobre}/>
    <Tab.Screen name="Sobre2" component={telaSobre}/>
    <Tab.Screen name="Sobre3" component={telaSobre}/>
    <Tab.Screen name="Sobre4" component={telaSobre}/>
  </Tab.Navigator>
};

export default function App(){
  return <NavigationContainer>
    <Menu/>
  </NavigationContainer>
}