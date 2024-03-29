import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AnimalComponent } from './pages/animal/animal.component';
import { FarmComponent } from './pages/farm/farm.component';
import { HistoryChartComponent } from './pages/history-chart/history-chart.component';
import { UpdateAnimalsComponent } from './pages/update-animals/update-animals.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path:'animal', component: AnimalComponent, title: 'Animal'},
  { path:'farm', component: FarmComponent, title: 'Farm'},
  { path:'update-animals', component: UpdateAnimalsComponent, title: 'Update-Animals'},
  { path:'history-chart', component: HistoryChartComponent, title: 'History-Chart'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
})
export class AppRoutingModule { }
