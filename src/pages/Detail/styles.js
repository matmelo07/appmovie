import styled from "styled-components/native";

export const Container = styled.View`
 flex:1;
 background-color: #090A0E;

`;
export const Header = styled.View`
z-index: 99;
position: absolute;
top:35px;
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
padding: 0 14px;



`;

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  border-radius: 50px;
  justify-content: center;
  background-color: rgba(25,26,48,0.8);
  align-items: center;
 
`;
export const Banner = styled.Image`
width: 100%;
height: 350px;
border-bottom-left-radius: 60px;
border-bottom-right-radius: 60px;
`;
export const ButtonLink = styled.TouchableOpacity`
 position: absolute;
 top: 300px;
 right: 15px;
 width: 60px;
 height: 60px;
 background-color: #E72F49;
 border-radius: 50px;
 justify-content: center;
 align-items: center;
 
`;
export const Title = styled.Text`
color: white;
padding: 8px 14px;
margin-top: 10px;
font-size: 20px;
font-weight: bold;
`;
export const ContentArea = styled.View`
 padding: 0 14px;
 flex-direction: row;
 align-items: center;
 justify-content: space-between;

`;
export const Rate = styled.Text`
color: white;
font-size: 16px;
font-weight: bold;

`;
export const ListGenres = styled.FlatList`
 margin: 8px 0;
 padding-left: 14px;
 max-height: 35px;
 min-width: 35px;
`;
export const Description = styled.Text`
color: white;
padding: 0 14px;
padding-bottom: 15px;
line-height: 20px;
`;