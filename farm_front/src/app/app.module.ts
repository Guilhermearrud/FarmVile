import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './shared/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FarmComponent } from './pages/farm/farm.component';
import { HomeComponent } from './pages/home/home.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HistoryChartComponent } from './pages/history-chart/history-chart.component';
import { ModalComponent } from './shared/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { UpdateAnimalsComponent } from './pages/update-animals/update-animals.component';
import { ModalUpdateComponent } from './shared/modal-update/modal-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FarmComponent,
    HomeComponent,
    AnimalComponent,
    HistoryChartComponent,
    ModalComponent,
    PaginationComponent,
    UpdateAnimalsComponent,
    ModalUpdateComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    RouterModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
