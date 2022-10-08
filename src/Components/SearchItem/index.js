import React from "react";
import {Container,Banner,Rate,RateContainer,Title} from './styles';
import {Ionicons} from '@expo/vector-icons';

export default function SearchItem({data,navigatePage}){
    
     function navigatePageMovie(){
        if(data.release_date === ''){
            alert('Filme sem data prevista')
            return;
        }
         navigatePage(data)
     }
    
    return(

       
     <Container activeOpacity={0.7} onPress={navigatePageMovie}>
      {data?.poster_path ?
       (
        <Banner
         resizeMethod="resize"
         source={{uri:`https://image.tmdb.org/t/p/original/${data?.poster_path}`}}
        />
       ):
       (
        <Banner
         source={require('../../assets/images/imageoff.png')}
        />
       ) 
      }

      <Title>{data?.title}</Title>

      <RateContainer>
        <Ionicons name={'md-star'} size={12} color='gold'/>
        <Rate>{data?.vote_average}/10</Rate>
      </RateContainer>
       
     </Container>
    )
}