interface Response {
    token: string;
    user: {
        name: string,
        email: string
    }
}

export function signIn(): Promise<Response> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: "kmnsuhexgdhdh3225167hdhdyd8388dhqoapalamnxzwdhs0986d",
                user: {
                    name: "Jonatas de Assis Silva",
                    email: "jonatassilva9090@gmail.com",
                },
            });
        }, 2000);
    });
}
