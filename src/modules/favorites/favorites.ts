import { ProductData } from 'types';
import { Component } from '../component';
import { favoritesService } from '../../services/fav.service';
import { Product } from '../product/product';
import html from './favorites.tpl.html';

class Favorites extends Component {
  products!: ProductData[];

  async render() {
    this.products = await favoritesService.get();

    if (this.products.length < 1) {
      this.view.root.classList.add('is__empty');
      return;
    }

    this.products.forEach((product) => {
      const productComp = new Product(product);
      productComp.render();
      productComp.attach(this.view.favItems);
    });
  }
}

export const favoritesComp = new Favorites(html);
