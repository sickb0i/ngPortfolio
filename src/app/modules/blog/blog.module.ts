import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './components/info/info.component';
import { ListComponent } from './components/list/list.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    ListComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSkeletonLoaderModule
  ]
})
export class BlogModule { }
