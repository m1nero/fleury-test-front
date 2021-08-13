import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

const routes: Routes = [
  { path: 'index', component: ItemComponent },

  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled' // Return to top of page
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }