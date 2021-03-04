import { Component, OnInit } from '@angular/core';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { Vehicle } from 'src/app/_models/vehicle';
import { VehiclesService } from 'src/app/_services/vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  sortIconList = [faSort, faSortDown, faSortUp]
  asrORdesc = ['asc','asc','desc']
  asrORdescNum = 0;
  sortBy = "selling_price";
  currentPage = 0;
  itemsPerPage = 12;
  

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getVehicles(this.currentPage, this.itemsPerPage, this.sortBy, this.asrORdesc[this.asrORdescNum]).subscribe(vehicles => {
      this.vehicles = vehicles;
      console.log(this.vehicles.length);
    })
  }

  pageChanged(event: any) {
    this.currentPage = event.page;
    this.loadVehicles();
  }

}
