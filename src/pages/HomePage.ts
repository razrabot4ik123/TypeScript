import { Card } from '../components/Card';
import { Page } from '../components/ui/Page';

export class HomePage extends Page {
  constructor() {
    super('div', 'home');
  }

  private appendProducts(container: HTMLElement): void {
    for (let i = 0; i < 3; i++) {
      container.append(new Card().render());
    }
  }

  protected createPage(): void {
    const container = this.element.querySelector('.container') as HTMLElement;
    this.appendProducts(container);
  }

  public render(): HTMLElement {
    this.createPage();
    return this.element;
  }
}

// import { Card } from '../components/Card';

// interface IHomePage {
//   element: HTMLElement;
//   createPage: () => void;
//   render: () => HTMLElement;
// }

// export class HomePage implements IHomePage {
//   element: HTMLElement;

//   constructor() {
//     this.element = document.createElement('div');
//     this.element.className = 'home';
//   }

//   createPage(): void {
//     for (let i = 0; i < 3; i++) {
//       this.element.append(new Card().render());
//     }
//   }

//   render(): HTMLElement {
//     this.createPage();
//     return this.element;
//   }
// }
