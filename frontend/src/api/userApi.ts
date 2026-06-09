import api from "./axiosInstance";


export const userRequest = async() => {
    const res = await api.get("/user");
    return res.data;
}


export const adminRequest = async() => {
    const res = await api.get("/admin");
    return res.data;
}

export const backendStatusRequest = async() => {
    const res = await api.get("/public/status");
    return res.data;
}