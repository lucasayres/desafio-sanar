import Cookies from 'js-cookie';
import Router from 'next/router';

export const getUser = () => Cookies.get("user") ? JSON.parse(Cookies.get("user")) : {}

const setUser = user => Cookies.set("user", JSON.stringify(user), { secure: false })

export const login = ({ email, password }) => {
    if (email === "user@email.com" && password === "123456") {
        setUser({
            email: "user@email.com",
            name: "Lucas"
        });
        return true;
    }
    return false;
}

export const isLoggedIn = () => {
    const user = getUser()
    return !!user.email
}

export const logout = () => {
    Cookies.remove("user");
    Router.push('/');
}