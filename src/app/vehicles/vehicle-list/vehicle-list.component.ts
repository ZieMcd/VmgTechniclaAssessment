import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/_models/vehicle';
import { VehiclesService } from 'src/app/_services/vehicles.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[]; 
  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.getVehicles().subscribe(vehicles => {
      this.vehicles = vehicles;
    })
  }
}
