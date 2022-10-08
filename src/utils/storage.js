import AsyncStorage from "@react-native-async-storage/async-storage";

//Buscar filmes salvos

export async function getMoviesSave(key){
  const myMovies = await AsyncStorage.getItem(key)

  let moviesSave = JSON.parse(myMovies) || [];
  return moviesSave;
}

//Salvar um novo filme

export async function saveMovie(key, newMovie){
  let movieStored = await getMoviesSave(key)

 // se tiver um filme salvo com mesmo id precisamos ignorar
  const hasMovie = movieStored.some(item => item.id === newMovie.id)

  if(hasMovie){
    console.log('Filme ja existe')
    return;
  }

  movieStored.push(newMovie)

  await AsyncStorage.setItem(key, JSON.stringify(movieStored));
  console.log('Filme salvo com sucesso')
}

//Deletar um filme da lista

export async function deleteMovie(id){
  let movieStored = await getMoviesSave('@primemovie')

  let myMovies = movieStored.filter(item =>{
    return(item.id !== id)
  })

  await AsyncStorage.setItem('@primemovie',JSON.stringify(myMovies))
  console.log('deletado com sucesso')
  return myMovies;
}

//Filtrar um filme salvo

export async function hasMovie(movie){
  let movieStored = await getMoviesSave('@primemovie')

  const hasMovie = movieStored.find(item => item.id === movie.id)

  if(hasMovie){
    return true;
  }
  return false
}
