
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {MaterialCommunityIcons} from '@expo/vector-icons';


import Movies from "../pages/Movies";
import StackRoutes from "./stackRoutes";

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Drawer.Navigator
          screenOptions={{
            headerShown:false,

            drawerStyle:{
                backgroundColor:'#090A0E',
                paddingTop:20
            },
            drawerActiveBackgroundColor:'#DAA520',
            drawerActiveTintColor:'white',
            drawerInactiveTintColor:'white'
          }}
        >
            <Drawer.Screen name="HomeDrawer"
             component={StackRoutes}
             options={{
              title:'Home',
              drawerIcon:({focused, size,color}) => (
                <MaterialCommunityIcons
                 name={focused ? 'movie-open' : 'movie-outline'}
                 color={color}
                 size={size} 
                />
              )
             }}
             />
            <Drawer.Screen
             name="Movies"
             component={Movies}
             options={{
              title:'Meus filmes',
              drawerIcon:({focused,color,size}) =>(
                <MaterialCommunityIcons
                name={focused ? 'movie-open-cog-outline' : 'movie-cog'}
                color={color}
                size={size}
                />
              )
             }}
             />

        </Drawer.Navigator>
    )
}

