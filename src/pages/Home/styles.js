import styled from "styled-components";

export const Container = styled.SafeAreaView`
  background-color: #1C1C1C;
  flex:1;
  padding: 4px 0;
`;
export const SearchContainer = styled.View`
 flex-direction: row;
 width: 100%;
 height: 50px;
 align-items: center;
 padding: 0 14px;
 margin-bottom: 8px;
 
`;

export const SearchButton = styled.TouchableOpacity`
 width: 15%;
height: 50px;
align-items: center;
justify-content: center;

`;

export const Input = styled.TextInput`
background-color: rgba(255,255,255,0.5);
width: 85%;
height: 50px;
border-radius: 50px;
padding: 8px 15px;
font-size: 20px;
`;

export const BannerButton = styled.TouchableOpacity`
`;

export const Banner = styled.Image`
 height: 150px;
 border-radius: 6px;
 margin-left: 14px;
 margin-right: 14px;
`;

export const Title = styled.Text`
 padding-top: 20px;
 padding-bottom: 8px;
 font-size: 25px;
 padding-left: 14px;
 padding-right: 14px;
 color: white;
 font-weight: bold;
`; 
export const SlideMovie = styled.FlatList`
height: 250px;
padding-left: 14px;
 padding-right: 14px;
`;