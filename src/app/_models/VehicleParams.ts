export class VehicleParams {
    currentPage: number;
    itemsPerPage: number;

    sortBy: string;
    ascORdesc: string;


    yearMin: number;
    yearMax: number;

    sellingPriceMin: number;
    sellingPriceMax: number;

    mileageMin: number;
    mileageMax: number;


    constructor() {
        this.currentPage = 1;
        this.itemsPerPage = 6;

        this.sortBy = "make.desc";
        this.ascORdesc = "asc";

        this.yearMin = 2000;
        this.yearMax = new Date().getFullYear();

        this.sellingPriceMin = 10000;
        this.sellingPriceMax = 99999999;

        this.mileageMin = 0;
        this.mileageMax = 9999999;
    }
}