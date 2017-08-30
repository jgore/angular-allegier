import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule, RequestOptions} from '@angular/http';
import {ProductAddComponent} from './product-add/product-add.component';
import {HomeComponent} from './home/home.component';
import {ProductListingComponent} from './home/product-listing/product-listing.component';
import {ProductRowComponent} from './home/product-listing/product-row/product-row.component';

const routes: Routes = [
  // basic routes
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductAddComponent },
  { path: 'contactus', redirectTo: 'contact' },
  ];

const API_URL: String = 'http://localhost:8080' ;
const PRODUCT_REST_URL: String = API_URL + '/rest/products/' ;

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    HomeComponent,
    ProductListingComponent,
    ProductRowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes), // <-- routes
  ],
  providers: [
    {provide: 'API_URL', useValue: API_URL },
    {provide: 'PRODUCT_REST_URL', useValue: PRODUCT_REST_URL }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
