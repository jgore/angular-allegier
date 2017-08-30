import {Component, Inject, Input, OnInit} from '@angular/core';
import {Product} from './product.model';
import {Headers, Http, Response} from '@angular/http';

@Component({
  selector: 'app-product',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  data: Promise<any>;
  loading: boolean;
  @Input() product: Product;
  product_url: string;

  headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http,
              @Inject('PRODUCT_REST_URL') product_url: string) {
    this.product_url = product_url;
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
    this.makePost(form);
  }

  makePost(productForm: any): void {
    this.loading = true;
    console.log(JSON.stringify(productForm));
    this.http.post(
      this.product_url,
      JSON.stringify(productForm),
      {headers: this.headers})
      .subscribe((res: Response) => {
        console.log(res);
        this.data = res.json();
        this.loading = false;
      });
  }

  ngOnInit() {
  }

}
