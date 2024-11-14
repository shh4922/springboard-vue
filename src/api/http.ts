import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

// 기본 URL과 기본 헤더 설정
const BASEURL = "http://localhost:8080";
const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

// HTTP 메서드 타입 지정
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// 공통 요청 타입 설정
interface CommonRequest {
    method: HttpMethod;
    data?: any; // POST, PUT 등의 요청에서 사용
    params?: Record<string, any>; // GET 요청에서 사용
}

// HTTP 요청 함수
export const http = async <T>(
    path: string,
    { method, data, params }: CommonRequest
): Promise<T | null> => {
    try {
        const config: AxiosRequestConfig = {
            url: `${BASEURL}${path}`,
            method,
            headers,
            params, // GET 등의 요청에서 쿼리 파라미터로 사용
            data,   // POST, PUT 등의 요청에서 본문 데이터로 사용
        };

        const response: AxiosResponse<T> = await axios.request(config);
        return response.status < 500 ? response.data : null;
    } catch (error) {
        console.error("HTTP Request Error:", error);
        return null;
    }
};