import styled from "styled-components/native";

export const Container = styled.View`
  padding: 14px;
`;

export const Title = styled.Text`
 color: white;
 font-size: ${props => props.size}px;
 font-weight: bold;
`;

export const RateContainer = styled.View`
 flex-direction: row;
 padding: 8px 0;
 align-items: center;
`;

export const Rate = styled.Text`
color: white;

`;

export const ButtonContainer = styled.View`
flex-direction: row;
align-items: center;


`;

export const ButtonDetails = styled.TouchableOpacity`
 background-color:#DAA520;
 padding: 10px;
 width: 85%;
 border-radius: 50px;
 justify-content: center;
 align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity`
width: 15%;
height: 30px;
justify-content: center;
align-items: center;

`;