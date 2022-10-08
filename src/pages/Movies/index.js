import React,{useEffect,useState} from "react";
import { View,Text } from "react-native";
import { Container,ListMovies } from "./styles";
import Header from "../../Components/Header";
import {getMoviesSave,deleteMovie} from '../../utils/storage';
import FavoriteItem from '../../Components/FavoriteItem';
import {useNavigation, useIsFocused} from '@react-navigation/native'



export default function Movies(){
  
 
    const [movies,setMovies] = useState([]);
    const navigation = useNavigation();
    const isFocused = useIsFocused();
  
    useEffect(()=>{
      let isActive = true;

  
       async function getFavoriteMovie(){
         const result = await getMoviesSave('@primemovie')
  
         if(isActive){
          setMovies(result);
          console.log(result)
         }
       }
  
       if(isActive){
         getFavoriteMovie()
       }
  
       
       return ()=>{
        isActive = false
       }
    },[isFocused]);
  
    async function handleDelete(id){
      const results = await deleteMovie(id)
      setMovies(results)
    }

    async function handleNavigationPages(item){
      navigation.navigate('Detail', {id: item.id})
    }

    return(
      <Container>
        <Header title={"Meus Filmes"}/>

        <ListMovies
         showsVerticalScrolIndicator={false}
         keyExtractor={item => String(item.id)}
         data={movies}
         renderItem={({item})=>(
            <FavoriteItem
            data={item}
            deleteMovie={handleDelete}
            navigatePage= {()=> handleNavigationPages(item)}
            />
         )}
        />
      </Container>
    )
}