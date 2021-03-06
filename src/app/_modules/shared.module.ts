import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    }),
    TabsModule.forRoot(),
    NgxGalleryModule,
    ButtonsModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot()

  ],
  exports: [
    ToastrModule,
    TabsModule,
    NgxGalleryModule,
    ButtonsModule,
    FormsModule,
    FontAwesomeModule,
    PaginationModule,
    CollapseModule
  ]
})
export class SharedModule { }
