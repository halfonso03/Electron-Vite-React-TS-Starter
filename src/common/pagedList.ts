
export class PagedList {
    TotalCount: number
    PageSize: number
    CurrentPage: number
    TotalPages: number
    Items: []

    constructor(result: [], count: number, pageSize: number, currentPage: number) {
        this.TotalCount = count;
        this.PageSize = pageSize;
        this.CurrentPage = currentPage;
        this.TotalPages = Math.round(Math.ceil(count / pageSize));
        this.Items = result;
    }

    static async ToPagedList(qry: any, totalCount: number, pageSize: number, currentPage: number): Promise<PagedList> {


        const result = await qry.offset((currentPage - 1) * pageSize).limit(pageSize).execute();

        const pagedList = new PagedList(result, totalCount, pageSize, currentPage);

        return pagedList;
    }
}


