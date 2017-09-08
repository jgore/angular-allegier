export class Product {
  id: string;
  title: string;
  category: string;
  description: string;
  price: number;

  constructor(id: string, title: string, category: string, description: string, price: number) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.description = description;
    this.price = price ;
  }


}
