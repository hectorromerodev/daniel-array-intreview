import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected: string = 'Any selected item';

  menu: Menu = {
    id: 'menu-1',
    name: 'My menu',
    products: [
      { id: '1', name: 'Product-1', price: 100 },
      { id: '2', name: 'Product-2', price: 102 },
      { id: '3', name: 'Product-3', price: 103 }
    ]
  }

  select(item: Product) {
    this.selected = item.name;
  }

}

interface Menu {
  id: string;
  name: string;
  products: Product[]
}

interface Product {
  id: string;
  name: string;
  price: number;
}
