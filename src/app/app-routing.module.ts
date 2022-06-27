import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestReactiveComponent } from './test-reactive/test-reactive.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const routes: Routes = [
  {path: "test-reactive", component:TestReactiveComponent},
  {path:"user-listing", component : UserListingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
