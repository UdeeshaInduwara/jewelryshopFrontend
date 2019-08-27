import {MakersComponent} from './makers/makers.component';
import {MetalComponent} from './metal/metal.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GemComponent} from './gem/gem.component';
import {JewelryMakingOrderComponent} from './jewelry-making-order/jewelry-making-order.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'gem', component: GemComponent},
  {path: 'metal', component: MetalComponent},
  {path: 'makers', component: MakersComponent},
  {path: 'makingOrder', component: JewelryMakingOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
