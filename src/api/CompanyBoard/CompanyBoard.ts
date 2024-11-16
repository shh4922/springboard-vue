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
    const boardList= await http<CompanyBoard[]>("/companyboard", { method: "GET", params: { } });
    return boardList;
};
