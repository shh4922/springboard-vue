import {http} from "@/api/http";

export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

export const fetchUsers = async (): Promise<User[]>  => {
    try {
        const users = await http<User[]>("/users", { method: "GET", params: { } });
        return users ?? []
    } catch (e) {
        console.log(e);
        return []
    }
};