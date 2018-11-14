import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContentComponent } from './common/content/content.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { MenuComponent } from './Catalog/menu/menu.component';
import { ProductService } from './common/content/product.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductfilterPipe } from './Catalog/productfilter.pipe';
import { CartComponent } from './cart/cart/cart.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    MenuComponent,
    ProductfilterPipe,
    CartComponent,
    HomeComponent,
    IndexComponent,
    LoginComponent,
    DetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
