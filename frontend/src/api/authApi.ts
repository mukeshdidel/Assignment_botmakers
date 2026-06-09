import api from "./axiosInstance";

export const login = async (data: {email: string, password: string}) => {
    const res = await api.post("/login", data);
    return res.data;
};


export const register = async(data: {
    name: string,
    email: string,
    password: string
    role: string
}) => {
    const res = await api.post("/register", data);
    return res.data;
}