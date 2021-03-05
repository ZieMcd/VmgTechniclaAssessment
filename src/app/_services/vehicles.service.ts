import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { VehicleParams } from '../_models/userVehicleParams';
import { Vehicle } from '../_models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseUrl = environment.apiUrl;


  constructor(private http: HttpClient) { }

  getVehicles(vehicleParams: VehicleParams) {
    return this.http.get<Vehicle[]>(this.baseUrl + '&order=' + vehicleParams.sortBy + '.' + vehicleParams.ascORdesc + '&limit=' + vehicleParams.itemsPerPage + '&offset=' + (vehicleParams.currentPage * vehicleParams.itemsPerPage));
    //+sortby+ascORdec+
  }

  getVehicle(stock_id: string) {
    return this.http.get<Vehicle>(this.baseUrl + '&stock_id=eq.' + stock_id);
  }
}
