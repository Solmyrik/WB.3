import { Component } from '../component';
import html from './search.tpl.html';

class Search extends Component {
  suggestions: string[] = [];

  attach($root: HTMLElement) {
    $root.innerHTML = '';
    $root.appendChild(this.view.root);
  }

  async render() {}
}

export const search = new Search(html);
