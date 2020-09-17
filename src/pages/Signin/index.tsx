import React, { useContext } from "react";
import { Container, Button, ButtonText } from "./styles";
import {useAuth} from "../../contexts/auth";

const Signin: React.FC = () => {
    const { signed, signIn } = useAuth();

    async function handleSignin() {
        signIn();
    }
    return (
        <Container>
            <Button onPress={handleSignin}>
                <ButtonText>Signin</ButtonText>
            </Button>
        </Container>
    );
};

export default Signin;
