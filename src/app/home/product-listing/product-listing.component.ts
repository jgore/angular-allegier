import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../product-add/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {
  @Input() products: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;
  private id: String;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('id is ' + this.id);
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product === this.currentProduct;
  }

  ngOnInit() {
  }

}
