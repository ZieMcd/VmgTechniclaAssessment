import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vehicle } from '../_models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getVehicles(page: number = 0, itemsPerPage: number = 12, sortBy: string = 'make', ascORdesc: string = 'asc') {

    return this.http.get<Vehicle[]>(this.baseUrl + '&order=' + sortBy + '.' +ascORdesc + '&limit=' + itemsPerPage + '&offset=' + (page * itemsPerPage));
    //+sortby+ascORdec+
  }

  getVehicle(stock_id: string) {
    return this.http.get<Vehicle>(this.baseUrl + '&stock_id=eq.' + stock_id);
  }
}
