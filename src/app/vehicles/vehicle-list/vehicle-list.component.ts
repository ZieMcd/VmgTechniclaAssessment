import { Component, OnInit } from '@angular/core';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';
import { VehicleParams } from 'src/app/_models/VehicleParams';
import { Vehicle } from 'src/app/_models/vehicle';
import { VehiclesService } from 'src/app/_services/vehicles.service';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  vehicleParams: VehicleParams;
  sortIcon = faSort;
  asrORdesc = ['asc', 'asc', 'desc']
  isCollapsed = true;
  numberOfItems;

  PriceSliderOptions: Options;
  YearSliderOptions: Options;
  MileageSliderOptions: Options;

  constructor(private vehicleService: VehiclesService) { }

  ngOnInit(): void {
    this.vehicleParams = new VehicleParams();
    this.loadVehicles();
    this.setSliderOptions();
  }

  loadVehicles() {
    this.vehicleService.getVehicles(this.vehicleParams).subscribe(vehicles => {
      this.vehicles = vehicles;
    })

    this.vehicleService.getVehiclesNoLimit(this.vehicleParams).subscribe(t => {
      this.numberOfItems = t.length;
    }
    )
  }

  pageChanged(event: any) {
    this.vehicleParams.currentPage = event.page;
    this.loadVehicles();
  }

  changeSortIcon() {
    if (this.vehicleParams.ascORdesc == "asc") {
      this.sortIcon = faSortUp;
    } else {
      this.sortIcon = faSortDown;
    }
  }

  resetFilters() {
    this.vehicleParams = new VehicleParams();
  }

  setSliderOptions() {
    this.PriceSliderOptions = {
      floor: 129500,
      ceil: 2000000,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return 'R' + value;
          case LabelType.High:
            return 'R' + value;
          default:
            return 'R' + value;
        }
      }
    };

    this.YearSliderOptions = {
      floor: 2000,
      ceil: new Date().getFullYear(),
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return value.toString();
          case LabelType.High:
            return value.toString();
          default:
            return value.toString();
        }
      }
    };

    this.MileageSliderOptions = {
      floor: 5600,
      ceil: 255600,
      translate: (value: number, label: LabelType): string => {
        switch (label) {
          case LabelType.Low:
            return value + "Km";
          case LabelType.High:
            return value + "Km";
          default:
            return value + "Km";
        }
      }
    };
  }
}
