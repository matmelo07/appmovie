import React from "react";

import {BackButton,Name} from './styles';
import {Feather} from '@expo/vector-icons';
import {WebView} from 'react-native-webview';

export default function ModalLink({link,title,closeModal}){
    return(
        <>
            <BackButton onPress={closeModal}>
             <Feather
             name="x" size={50} color={'red'}
             />
             
            </BackButton>
            <Name>{title}</Name>
         <WebView
         source={{uri:'https://www.youtube.com'}}
         />
        </>
            
        
    )
}