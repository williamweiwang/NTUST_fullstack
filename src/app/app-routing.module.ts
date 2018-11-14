import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './common/content/content.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart/cart.component';
import { DetailComponent } from './detail/detail.component';

const routeConfig: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'index',
    component: IndexComponent,
    children: [
      { path: '', component: ContentComponent },
      { path: 'content', component: ContentComponent },
      { path: 'detail', component: DetailComponent },
      { path: '**', component: ContentComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
