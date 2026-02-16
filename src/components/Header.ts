import { Component } from './ui/Component';

export class Header extends Component {
  constructor() {
    super('header', 'header');
  }

  private createElement(): void {
    this.element.innerHTML = `
      <a href="/" class="logo">Logo</a>
    `;
  }

  public render(): HTMLElement {
    this.createElement();
    return this.element;
  }
}
