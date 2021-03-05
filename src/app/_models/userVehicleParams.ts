export class VehicleParams {
    currentPage: number;
    itemsPerPage: number;

    sortBy: string;
    ascORdesc: string;

    constructor() {
        this.currentPage = 0;
        this.itemsPerPage = 6;

        this.sortBy = "make";
        this.ascORdesc = "asc";
    }
}