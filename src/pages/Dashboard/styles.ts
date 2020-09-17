import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Button = styled.TouchableOpacity`
    background-color: #f00;
    width: 150px;
    height: 50px;

    justify-content: center;
    align-items: center;
    border-radius: 6px;
`;
export const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`;
export const User = styled.Text`
    color: #000;
    font-weight: bold;
    margin-bottom: 20px
`;
