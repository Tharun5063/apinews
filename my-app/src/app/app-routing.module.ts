import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  {path:'',component:BusinessComponent},
  {path:'technews',component:TechnewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
