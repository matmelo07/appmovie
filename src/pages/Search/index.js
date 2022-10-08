import React,{useState,useEffect} from "react";
import { Container,ListMovies } from "./styles";
import { useNavigation,useRoute } from "@react-navigation/native";
import SearchItem from '../../Components/SearchItem';

import api, {key} from '../../Services/api'
export default function Search(){

    const [movie,setMovie] = useState([]);
    const [loading,setLoading] = useState(true);
    const navigation = useNavigation();
    const route = useRoute();

    useEffect(()=>{
         let isActive = true

         async function getSearchMovie(){
            const response = await api.get("/search/movie",{
                params:{
                    query:route?.params?.name,
                    api_key:key,
                    language:'pt-BR',
                    page:1

                }
            })
            if(isActive){
                setMovie(response.data.results)
                setLoading(false)
                
            }
         }
         if(isActive){
            getSearchMovie();
         }
         return()=>{
            isActive = false
         }
    },[])

    function navigateDetailPage(item){
        navigation.navigate('Detail',{id:item.id})
    }

    if(loading){
        return(
            <Container></Container>
        )
    }

    return(
        <Container>
            <ListMovies
             data={movie}
             showsHorizontalScrollIndicator={false}
             keyExtractor={(item) => String(item.id)}
             renderItem={({item})=><SearchItem data={item} navigatePage={()=> navigateDetailPage(item)}/> }
            />
        </Container>
    )
}