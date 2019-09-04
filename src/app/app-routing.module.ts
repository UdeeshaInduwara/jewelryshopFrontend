import {MakersComponent} from './makers/makers.component';
import {MetalComponent} from './metal/metal.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GemComponent} from './gem/gem.component';
import {JewelryMakingOrderComponent} from './jewelry-making-order/jewelry-making-order.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent , canActivate: [AuthGuard]},
  {path: 'gem', component: GemComponent , canActivate: [AuthGuard]},
  {path: 'metal', component: MetalComponent , canActivate: [AuthGuard]},
  {path: 'makers', component: MakersComponent , canActivate: [AuthGuard]},
  {path: 'makingOrder', component: JewelryMakingOrderComponent , canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
