import React from "react";

import { Title,Container,RateContainer,Rate,ButtonContainer,ButtonDetails,DeleteButton } from "./styles";
import {Ionicons} from '@expo/vector-icons'; 

export default function FavoriteItem({data,deleteMovie,navigatePage}){
  return(
    <Container>
      <Title size={15}>{data.title}</Title>

      <RateContainer>
        <Ionicons name="star" size={10} color={'yellow'}/>
        <Rate>{parseFloat(data.vote_average).toFixed(1)}/10</Rate>
      </RateContainer>

      <ButtonContainer>
        <ButtonDetails onPress={()=> navigatePage(data.id)}>
          <Title size={14}>Ver detalhes</Title>
        </ButtonDetails>
       
       <DeleteButton onPress={()=> deleteMovie(data.id)}>
       <Ionicons name='trash-outline' size={30} color={'white'}/>
       </DeleteButton>
      </ButtonContainer>
    </Container>
  )
 
}