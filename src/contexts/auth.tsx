import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import * as auth from "../services/auth";
import api from "../services/api";

interface AuthContextData {
    signed: boolean;
    user: UserInterface | null;
    loading: boolean;
    signIn(): Promise<void>;
    signOut(): void;
}

interface UserInterface {
    name: string;
    email: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<UserInterface | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = await AsyncStorage.getItem("@RnAuth:user");
            const storageToken = await AsyncStorage.getItem("@RnAuth:token");

            if (storageUser && storageToken) {
                api.defaults.headers[
                    "Authorization"
                ] = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }
        loadStorageData();
    }, []);

    async function signIn() {
        const response = await auth.signIn();
        setUser(response.user);
        api.defaults.headers["Authorization"] = `Bearer ${response.token}`;
        await AsyncStorage.setItem(
            "@RnAuth:user",
            JSON.stringify(response.user)
        );
        await AsyncStorage.setItem("@RnAuth:token", response.token);
    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }

    return (
        <AuthContext.Provider
            value={{ signed: Boolean(user), user, loading, signIn, signOut }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    return context;
}
