import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../product-add/product.model';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  products: Product[] = [];
  private product_url: string;
  private results: Observable<Product[]>;

  constructor(private http: Http,
              @Inject('PRODUCT_REST_URL') product_url: string) {
    this.product_url = product_url;
    this.results = this.search(product_url);

    this.results.subscribe( results =>{
      results.forEach( (product: Product ) => {
        this.products.push(product);
      });
    });
  }

  search(url: string): Observable<Product[]> {
    return this.http.get(url)
      .map((response: Response) => {
      console.log(response.json());
        return (<any>response.json()).map(item => {
          console.log('raw item', item); // uncomment if you want to debug
               return new Product(item.title, item.category, item.desciption, item.price);
        });
      });
  }

  ngOnInit(): void {
  }
}

