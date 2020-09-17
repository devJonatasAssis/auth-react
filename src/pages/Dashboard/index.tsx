import React from "react";
import { Container, Button, ButtonText, User } from "./styles";
import { useAuth } from "../../contexts/auth";

const Dashboard: React.FC = () => {
    const { signOut, user } = useAuth();

    async function handleLogout() {
        signOut();
    }
    return (
        <Container>
            <User>{user?.name}</User>
            <Button onPress={handleLogout}>
                <ButtonText>Logout</ButtonText>
            </Button>
        </Container>
    );
};

export default Dashboard;
