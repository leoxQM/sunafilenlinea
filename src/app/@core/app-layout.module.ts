import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppFooterComponent } from './footer/app-footer.component';
import { AppLayoutComponent } from './layout/app-layout.component';
import { AppMenuComponent } from './menu/app-menu.component';
import { AppMenuitemComponent } from './menu/app-menuitem.component';
import { AppSidebarComponent } from './sidebar/app-sidebar.component';
import { AppTopbarComponent } from './topbar/app-topbar.component';
import { SharedPrimeNgModule } from '@primeNgModule';
import { ConfigModule } from './config/config.module';

@NgModule({
  declarations: [
    AppLayoutComponent,
    AppTopbarComponent,
    AppSidebarComponent,
    AppFooterComponent,  
    AppMenuComponent,
    AppMenuitemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    SharedPrimeNgModule,
    ConfigModule
  ],
  exports: [
    AppLayoutComponent,
    AppTopbarComponent,
    AppSidebarComponent,
    AppFooterComponent,  
    AppMenuComponent,
    AppMenuitemComponent,
    ConfigModule
  ]
})
export class AppLayoutModule { }
