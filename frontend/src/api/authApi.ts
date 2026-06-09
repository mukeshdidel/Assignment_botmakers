import api from "./axiosInstance";

export const loginUser = async (data: {email: string, password: string}) => {
    const res = await api.post("/login", data);
    return res.data;
};


export const registerUser = async(data: {
    name: string,
    email: string,
    password: string
    role: "USER" | "ADMIN"
}) => {
    const res = await api.post("/register", data);
    return res.data;
}