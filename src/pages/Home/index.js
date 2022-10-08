import React, {useState, useEffect} from "react";

import { Container,
  SearchButton,
  SearchContainer,
  Input,
  Banner,
  BannerButton,
  Title,
  SlideMovie
 } from "./styles";
import { ScrollView,ActivityIndicator } from "react-native";
import api, {key} from "../../Services/api";
import {getListMovies,randomBanner} from '../../utils/movies';


import Header from "../../Components/Header";
import {Feather} from '@expo/vector-icons';
import SliderItem from "../../Components/SliderItem";
import {useNavigation} from '@react-navigation/native';


export default function Home(){


  const [nowMovies,setNowMovies] = useState([]);
  const [popularMovies,setPopularMovies] = useState([]);
  const [topMovies,setTopMovies] = useState([]);
  const [bannerMovie,setBannerMovie] = useState({});
  const [input,setIpunt] = useState('');

  const [loading,setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
     let isActive = true;
     const ac = new AbortController();

     async function getMovies(){
       const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing',{
          params:{
            api_key:key,
            language:'pt-BR',
            page:1
          }
        }
        ),
        api.get('/movie/popular',{
          params:{
            api_key:key,
            language:'pt-BR',
            page:1
          }
        }
        ),
        api.get('/movie/top_rated',{
          params:{
            api_key:key,
            language:'pt-BR',
            page:1
          }
        }
        ),
        

       ])
      if(isActive){
        const nowList = getListMovies(6, nowData.data.results);
        const popularList = getListMovies(5, popularData.data.results);
        const topList = getListMovies(3, topData.data.results)

       
        setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);
        
        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
        setLoading(false)

        

      }
      
     }
    
  
     getMovies();

     return ()=>{
        isActive = false;
        ac.abort()
     }
     
      
  },[])

  function navigateDetailPage(item){
      navigation.navigate('Detail',{id:item.id})
  }
  function searchInput(){
    if(input === '') return;


    navigation.navigate('Search',{name: input})
    setIpunt('');
  }

   if(loading){
      return(
        <Container>
        <ActivityIndicator size='large' color='white' />
     </Container>
      )
   }
    return(

      <Container>
        <Header title='React Movie'/>

        <SearchContainer >
          <Input
           placeholder='Ex. Vingadores'
           placeholderTextColor='#ddd'
           value={input}
           onChangeText={(text)=>{setIpunt(text)}}
          />
          <SearchButton onPress={searchInput}>
             <Feather name="search" size={38} color='white'/>
          </SearchButton>
        </SearchContainer>

      <ScrollView  showsHorizontalScrollIndicator={false}>
        <Title>Em cartaz</Title>
      

      <BannerButton activeOpacity={0.9} onPress={()=>navigateDetailPage(bannerMovie)}>
       <Banner
        resizeMethod="resize"
        source={{uri:`https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`}}
       />  
      </BannerButton>  

      <SlideMovie
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={nowMovies}
       renderItem={({item}) => <SliderItem data={item} navigationPage={()=>navigateDetailPage(item)}/> }
       keyExtractor={(item)=> String(item.id)}
      />

       <Title>Populares</Title>

       <SlideMovie
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={popularMovies}
       renderItem={({item}) => <SliderItem data={item} navigationPage={()=>navigateDetailPage(item)}/> }
       keyExtractor={(item)=> String(item.id)}
      />

      <Title>Top 3</Title>

      <SlideMovie
       horizontal={true}
       showsHorizontalScrollIndicator={false}
       data={topMovies}
       renderItem={({item}) => <SliderItem data={item} navigationPage={()=>navigateDetailPage(item)}/> }
       keyExtractor={(item)=> String(item.id)}
      />
      
      
      </ScrollView>

      </Container>
        
     
    )
}