import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlinesComponent } from './headlines/headlines.component';
import { TechComponent } from './tech/tech.component';
import { BuzzComponent } from './buzz/buzz.component';

const routes: Routes = [
  { path: '', component: HeadlinesComponent }, // headlines and home
  { path: 'tech', component: TechComponent }, // tech
  { path: 'buzz', component: BuzzComponent } // tech
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
