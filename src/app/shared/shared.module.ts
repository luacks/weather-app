import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './components/text-input/text-input.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    TextInputComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    TextInputComponent
  ]
})
export class SharedModule { }
