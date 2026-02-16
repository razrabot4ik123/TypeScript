import { Container } from '../Container';

export abstract class Page {
  protected element: HTMLElement;

  constructor(tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;

    const container = new Container('div', 'container').render();
    this.element.append(container);
  }

  protected abstract createPage(): Promise<void>;

  public abstract render():  Promise<HTMLElement>;
}
