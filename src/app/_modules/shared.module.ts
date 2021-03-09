import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgxSliderModule } from '@angular-slider/ngx-slider';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    NgxGalleryModule,
    ButtonsModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    NgxSliderModule,
  ],
  exports: [
    TabsModule,
    NgxGalleryModule,
    ButtonsModule,
    FormsModule,
    FontAwesomeModule,
    PaginationModule,
    CollapseModule,
    NgxSliderModule,
  ]
})
export class SharedModule { }
