import { Component, OnInit } from '@angular/core';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { VehicleParams } from 'src/app/_models/VehicleParams';
import { Vehicle } from 'src/app/_models/vehicle';
import { VehiclesService } from 'src/app/_services/vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  vehicleParams: VehicleParams;
  sortIcon = faSort;
  asrORdesc = ['asc','asc','desc']
  isCollapsed = true;
  

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicleParams = new VehicleParams();
    this.loadVehicles();
    console.log(this.vehicleParams.yearMax);
  }

  loadVehicles() {
    this.vehicleService.getVehicles(this.vehicleParams).subscribe(vehicles => {
      this.vehicles = vehicles;
    })
  }

  pageChanged(event: any) {
    this.vehicleParams.currentPage = event.page;
    this.loadVehicles();
  }

  changeSortIcon(){
    if(this.vehicleParams.ascORdesc == "asc") {
      this.sortIcon = faSortUp;
    } else {
      this.sortIcon = faSortDown;
    }
  }

  logthing() {
    console.log(this.vehicleParams.yearMin)
  }
}
