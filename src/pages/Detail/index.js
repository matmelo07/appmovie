import React ,{useState,useEffect}from "react";
import { Container
    ,Header
    ,HeaderButton
    ,Banner
    ,ButtonLink
    ,Title
    ,ContentArea
    ,Rate,
    ListGenres,
    Description
} from './styles';
import {Feather,Ionicons} from '@expo/vector-icons';
import { useNavigation,useRoute } from "@react-navigation/native";
import api,{key} from "../../Services/api";
import Stars from 'react-native-stars';
import Genres from "../../Components/Genres";
import { ScrollView,Modal} from "react-native";
import ModalLink from "../../Components/ModalLink";
import {saveMovie,hasMovie,deleteMovie} from '../../utils/storage';
 

export default function Detail(){

const navigation = useNavigation();
const route = useRoute();

const [movie,setMovie] = useState({});
const [openLink,setOpenLink] = useState(false)
const [favoritedMovie,setFavoritedMovie] = useState(false)

useEffect(()=>{
    let isActive = true;
     async function getMovie(){
         try {
            const response = await api.get(`/movie/${route.params?.id}`,{
                params:{
                    api_key:key,
                    language:'pt-BR'
                }
            })
            if(isActive){
                setMovie(response.data);

                const isFavorite = await hasMovie(response.data);
                setFavoritedMovie(isFavorite)
                
               }
         } catch (err) {
           console.log(err)
         }   
       
     }
     
     
     if(isActive){
        getMovie();
      }

     return()=>{
        isActive = false;
     }
    
     
},[])
  
  async function favoriteMovie(movie){

    if(favoritedMovie){
      await deleteMovie(movie.id)
      setFavoritedMovie(false)
      alert('filme deletado da sua lista')
    }else{
      await saveMovie('@primemovie', movie)
      setFavoritedMovie(true)
      alert('filme salvo')
    }

    
  }

    return(
        <Container>
            <Header>
            <HeaderButton onPress={()=> navigation.goBack()}>
             <Feather
             name="arrow-left"
             size={30}
             color='white'
             />
            </HeaderButton>
            <HeaderButton onPress={()=> favoriteMovie(movie)}>
              {favoritedMovie ? (
                <Ionicons
                name="bookmark"
                size={30}
                color='white'
                />
              ) : (
                <Ionicons
                name="bookmark-outline"
                size={30}
                color='white'
             />
              )}
            </HeaderButton>
           </Header>
           <Banner
             resizeMethod="resize"
             source={{uri:`https://image.tmdb.org/t/p/original/${movie.poster_path}`}}
           />
           <ButtonLink onPress={()=>{setOpenLink(true)}}>
            <Feather
            name="link"
            size={30}
            color= 'white'
            />
           </ButtonLink>
           <Title numberOfLines={2}>{movie.title}</Title>
           <ContentArea >
            <Stars
             half={true}
             default={movie.vote_average}
             starSize={30}
             count={10}
             fullStar={<Ionicons name='md-star' size={20} color='yellow'/>}
             emptyStar={<Ionicons name='md-star-outline' size={20} color='yellow'/>}
             halfStar={<Ionicons name='md-star-half' size={20} color='yellow'/>}
             disable={true}

            />
            <Rate >{parseFloat(movie.vote_average).toFixed(1 )}/10</Rate>
           </ContentArea>

           <ListGenres
           data={movie?.genres}
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           keyExtractor={(item)=> String(item.id)}
           renderItem={({item})=> <Genres data={item}/>}
          />

          <ScrollView>
            <Title>Descrição</Title>
            <Description>{movie.overview}</Description>
          </ScrollView>

          <Modal animationType="slide" transparent={true}  visible={openLink}>
            <ModalLink
            link={movie?.homepage}
            title={movie?.title}
            closeModal={()=>{setOpenLink(false)}}
            />
            
          </Modal>
        </Container>
    )
}
