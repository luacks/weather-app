import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DetailsModule { }
