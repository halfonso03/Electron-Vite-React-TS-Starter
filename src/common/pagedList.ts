
export class PagedList {
    TotalCount: number
    PageSize: number
    CurrentPage: number
    TotalPages: number
    Items: []

    constructor(count: number, pageSize: number, currentPage: number) {
        this.TotalCount = count;
        this.PageSize = pageSize;
        this.CurrentPage = currentPage;
        this.TotalPages = Math.round(Math.ceil(count / pageSize));
        this.Items = [];
    }

    static async ToPagedList(qry: any, pageNumber: number, pageSize: number): Promise<PagedList> {

        const result = await qry.offset(pageNumber - 1).limit(pageSize).execute();

        const pagedList = new PagedList(result.length, pageSize, pageNumber);

        pagedList.Items = result as [];

        return pagedList;
    }
}


