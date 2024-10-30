import { Component } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Array<Product> = [
    {
      name: "Playstation 5",
      quantity: 72,
      price: 3600,
      image: "../../../../assets/playstation-5.jfif",
      available: true
    },
    {
      name: "Notebook",
      quantity: 43,
      price: 2500,
      image: "../../../../assets/notebook.jfif",
      available: true
    },
    {
      name: "S23",
      quantity: 100,
      price: 3000,
      image: "../../../../assets/celular.jfif",
      available: true
    },
    {
      name: "Air Fryer",
      quantity: 30,
      price: 200,
      image: "../../../../assets/airfryer.jfif",
      available: true
    },
    {
      name: "Lego Minecraft",
      quantity: 94,
      price: 800,
      image: "../../../../assets/lego.jfif",
      available: true
    },
    {
      name: "Tenis de corrida",
      quantity: 27,
      price: 250,
      image: "../../../../assets/tenis.jfif",
      available: true
    },
  ]
}
