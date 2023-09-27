import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { LayoutComponent } from './layout.component';
import {HeaderModule} from './header/header.module';
import {RouterOutlet} from '@angular/router';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    RouterOutlet
  ]
})
export class LayoutModule {
}
