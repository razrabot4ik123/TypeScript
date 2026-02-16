import { Component } from './ui/Component';
import type { Product } from '../types/product';

export class Card extends Component {
  constructor(private product: Product) {
    super('article', 'card');
  }

  private createElement(): void {
    this.element.innerHTML = `
      <img src="${this.product.image}" alt="${this.product.title}" width="200px" />
      <h3>${this.product.title}</h3>
      <p>${this.product.price}</p>
    `;
  }

  public render(): HTMLElement {
    this.createElement();
    return this.element;
  }
}
