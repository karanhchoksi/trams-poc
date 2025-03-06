import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TramListComponent } from './component/tram-list/tram-list.component';

const routes: Routes = [
  {
  path:'',
  component: TramListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

