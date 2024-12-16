import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// 기본 URL과 기본 헤더 설정
const BASEURL = "http://localhost:8080/api/v1";

const getHeaders = () => {
    const token = localStorage.getItem("authToken");
    return {
        "Content-Type": "application/json",
        "Accept": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
    };
};

type CommonRequest = GetRequest | PostRequest | DeleteRequest;
// HTTP 요청 함수
export const http = async <T>(
    path: string,
    { method, data, params }: CommonRequest
): Promise<T> => {
    try {
        const config: AxiosRequestConfig = {
            url: `${BASEURL}${path}`,
            method,
            headers: getHeaders(),
            params, // GET 등의 요청에서 쿼리 파라미터로 사용
            data,   // POST, PUT 등의 요청에서 본문 데이터로 사용
        };

        const response: AxiosResponse<T> = await axios.request(config);
        return response.data;
    } catch (error) {
        console.error("HTTP Request Error:", error);
        throw error;
    }
};

// HTTP 메서드 타입 지정
interface GetRequest {
    method: "GET";
    params?: Record<string, any>;
    data?: never;
}

interface PostRequest {
    method: "POST" | "PUT";
    data: any;
    params?: never;
}

interface DeleteRequest {
    method: "DELETE";
    params?: Record<string, any>;
    data?: never;
}