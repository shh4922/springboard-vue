import {http} from "@/api/http";

export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
}

export const fetchUsers = async () => {
    const users = await http<User[]>("/users", { method: "GET", params: { } });
    return users;
};