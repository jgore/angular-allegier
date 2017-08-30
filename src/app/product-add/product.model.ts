export class Product {
  title: string;
  category: string;
  description: string;
  link: string;
  price: number;

  constructor(title: string, category: string, description: string, price: number) {
    this.title = title;
    this.category = category;
    this.description = description;
    this.price = price ;
  }


}
