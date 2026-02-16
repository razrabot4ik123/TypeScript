import { Component } from './ui/Component';

export class Card extends Component {
  constructor() {
    super('article', 'card');
  }

  private createElement(): void {
    this.element.innerHTML = `
      <img src="" alt="" />
      <h3>Заголовок товара</h3>
      <p>200$</p>
    `;
  }

  public render(): HTMLElement {
    this.createElement();
    return this.element;
  }
}
