import {http} from "@/api/http";
import axios from "axios";


export const validateEmail = async (email:Object): Promise<Object>  => {
    try {
        const res = await http<Object>("/user/duplicate/email", { method: "POST", data: email});
        return res
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.error("API Error:", e.response?.data || e.message);
            throw new Error(e.response?.data?.message || "Email validation failed.");
        } else {
            console.error("Unexpected Error:", e);
            throw new Error("Unexpected error occurred.");
        }
    }
};

/**
 * 회원가입
 * @param data
 * email, password
 */
export const register = async (data:Object): Promise<Object>  => {
    try {
        const res = await http<Object>("/user/register", { method: "POST", data: data});
        return res
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new Error(e.response?.data?.message || "Email validation failed.");
        } else {
            throw new Error("Unexpected error occurred.");
        }
    }
};

export const login = async (data:Object): Promise<DefaultRes<LoginResponse>>  => {
    try {
        const res = await http<DefaultRes<LoginResponse>>("/user/login", { method: "POST", data: data});
        return res
    } catch (e) {
        if (axios.isAxiosError(e)) {
            throw new Error(e.response?.data?.message || "Email validation failed.");
        } else {
            throw new Error("Unexpected error occurred.");
        }
    }
};

