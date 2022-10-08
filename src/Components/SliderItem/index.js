import React from "react";
import { View,Text } from "react-native";
import { Container, Title,BannerItem,RateContainer,Rate } from "./styles";
import {Ionicons} from '@expo/vector-icons';

export default function SliderItem({data,navigationPage}){
    return(
        <Container activeOpacity={0.9} onPress={()=> navigationPage(data)} >
            <BannerItem
            
            source={{uri:`https://image.tmdb.org/t/p/original/${data.poster_path}`}}
            />

            <Title numberOfLines={1}>{data.title}</Title>

            <RateContainer>
               <Ionicons name="md-star" size={15} color='yellow'/>
               <Rate>${data.vote_average}/10</Rate>
            </RateContainer>
        </Container>
    )
}