import { Component } from '../component';
import html from './search.tpl.html';

type Hints = {
  name: string;
  url: string;
};

class Search extends Component {
  hints: Hints[] = [];

  attach($root: HTMLElement) {
    $root.innerHTML = '';
    $root.appendChild(this.view.root);
  }

  async render() {
    this.hints = await this.fetchHints();

    this.view.hints.innerHTML = '<span>Например</span>';

    let count = 0;

    if (this.hints.length > 0) {
      for (let hint of this.hints) {
        if (hint.name.length < 1) continue;

        count++;

        const itemHint = document.createElement('a');
        itemHint.href = hint.url;

        itemHint.classList.add('search__item');

        const divHint = document.createElement('div');
        divHint.textContent = hint.name;

        itemHint.appendChild(divHint);
        this.view.hints.appendChild(itemHint);

        if (count === 1) {
          const pHint = document.createElement('p');
          pHint.textContent = ',';
          this.view.hints.appendChild(pHint);
        }

        if (count === 2) {
          const pHint = document.createElement('p');
          pHint.textContent = 'или';
          this.view.hints.appendChild(pHint);
        }

        if (count === 3) break;
      }
    }
  }

  async fetchHints() {
    return [
      {
        name: 'чехол iphone 13 pro',
        url: 'https://www.wildberries.ru/'
      },
      {
        name: 'коляски agex',
        url: 'https://www.wildberries.ru/'
      },
      {
        name: 'яндекс станция 2',
        url: 'https://www.wildberries.ru/'
      }
    ];
  }
}

export const search = new Search(html);
