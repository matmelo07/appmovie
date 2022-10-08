import React from "react";
import {} from 'react-native';
import {Container,MenuButton,Title} from './styles'
import {Feather} from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Header({title}){

 const navigation = useNavigation();

    return(
        <Container>
           <MenuButton onPress={()=> navigation.openDrawer()}>
             <Feather
              name="menu"
              size={35}
              color= 'white'
             />
           </MenuButton>
           <Title>{title}</Title>
        </Container>
    )

}