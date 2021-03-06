import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehicleParams } from '../_models/VehicleParams';
import { Vehicle } from '../_models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getVehicles(vehicleParams: VehicleParams) {
    //const url = this.baseUrl + '&order=' + vehicleParams.sortBy + '.' + vehicleParams.ascORdesc + '&limit=' + vehicleParams.itemsPerPage + '&offset=' + (vehicleParams.currentPage * vehicleParams.itemsPerPage);
    const params = new HttpParams()
      .set('order', vehicleParams.sortBy + "." +vehicleParams.ascORdesc)
      .set('limit',vehicleParams.itemsPerPage.toString())
      .set('offset', ((vehicleParams.currentPage-1) * vehicleParams.itemsPerPage).toString())
      .set('year','gt.'+vehicleParams.yearMin.toString())
      .set('year','lt.'+vehicleParams.yearMax.toString())
      .set('mileage','gt.'+vehicleParams.mileageMin.toString())
      .set('mileage','lt.'+vehicleParams.mileageMax.toString())
      .set('selling_price','gt.'+vehicleParams.sellingPriceMin.toString())
      .set('selling_price', "lt."+vehicleParams.sellingPriceMax.toString() )
      
    return this.http.get<Vehicle[]>(this.baseUrl,{params});
    //+sortby+ascORdec+
  }

  getVehicle(stock_id: string) {
    return this.http.get<Vehicle>(this.baseUrl + '&stock_id=eq.' + stock_id);
  }
}
