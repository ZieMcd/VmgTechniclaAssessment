import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Vehicle } from 'src/app/_models/vehicle';
import { VehiclesService } from 'src/app/_services/vehicles.service';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  vehicle: Vehicle;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private vehicleService: VehiclesService, private route: ActivatedRoute) { }

 

  ngOnInit(): void {
    this.loadMember();
    this.galleryOptions = [
      {
        width: '500px',
        height: '500px',
        imagePercent: 100,
        thumbnailsColumns: 20,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: false
      }
    ]
    
  }

  getImages(): NgxGalleryImage[] {
    const imageUrls = [];
    let flag = true;
    let j = 1;

    while (flag) { //for some vehicles this loop never ends
      let imageUrl = "";
      flag = false; // hot fix
      eval('imageUrl = this.vehicle.url' + j)
      if (imageUrl == "") {
        flag = false;
      } else {
        imageUrls.push(
          {
            small: imageUrl,
            medium: imageUrl,
            big: imageUrl
          })
          j++;
      }
    }
    return imageUrls
    // for (let i = 1; i <this.vehicle.image_count; i++) {
    //   let imageUrl;
    //   eval('imageUrl = this.vehicle.url' + i)
    //   console.log('imageUrl = this.vehicle.url' + i)
    //   imageUrls.push(
    //     {
    //       small: imageUrl,
    //       medium: imageUrl,
    //       big: imageUrl
    //     }
    //   )
      
  }
  loadMember() {
    this.vehicleService.getVehicle(this.route.snapshot.paramMap.get("id")).subscribe(vehicle => {
      this.vehicle = vehicle[0];
      this.galleryImages = this.getImages();
    })
  }
}
