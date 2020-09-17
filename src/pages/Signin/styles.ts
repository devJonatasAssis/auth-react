import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #000;
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
