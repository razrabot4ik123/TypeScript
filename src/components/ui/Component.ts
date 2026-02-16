export abstract class Component {
  protected element: HTMLElement;

  constructor(tagName: string, className: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
  }

  public abstract render(): HTMLElement;
}

// abstract class AbstractComponent {
//   protected abstract element: HTMLElement;
// }

// export class Component extends AbstractComponent {
//   protected element: HTMLElement;

//   constructor(tagName: string, className: string) {
//     super();
//     this.element = document.createElement(tagName);
//     this.element.className = className;
//   }
// }
