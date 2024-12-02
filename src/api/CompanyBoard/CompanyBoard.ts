import {http} from "@/api/http";

export interface CompanyBoard {
    companyboard_id: number;
    title: string;
    content: string;
    point: number;
    company_category_id: string;
    id: number;
}



export const fetchBoardAll = async () => {
    const boardList= await http<CompanyBoard[]>("/api/companyboard", { method: "GET", params: { } });
    return boardList;
};

export const createReviewPost = (params: any) => {
    console.log(params)
    return http<CompanyBoard>("/api/companyboard/create/reviewpost", { method: "POST", data: params});
};
