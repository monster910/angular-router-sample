import { Inject, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ThirdComponent} from './third/third.component';


const routes: Routes = [
  { path: 'third',  component: ThirdComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class TestRoutingModule {
  constructor() {
  }

}
