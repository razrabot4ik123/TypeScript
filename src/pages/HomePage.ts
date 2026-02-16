import { Page } from '../components/ui/Page';
import { Card } from '../components/Card';
import { ProductsApi } from '../api/products';
import { ApiError } from '../api/error';
import type { Product } from '../types/product';

export class HomePage extends Page {
  private products: Product[] = [];

  constructor() {
    super('div', 'home');
  }

  private async getProducts() {
    try {
      const products = await ProductsApi.get();
      console.log(products)
      this.products = products;
    } catch (error) {
      if (error instanceof ApiError) {
        console.error(error.message);
      }
    }
  }

  private appendProducts(container: HTMLElement): void {
    this.products.forEach((product: Product) => {
      container.append(new Card(product).render());
    });
  }

  protected async createPage(): Promise<void> {
    const container = this.element.querySelector('.container') as HTMLElement;
    await this.getProducts();
    this.appendProducts(container);
  }

  public async render(): Promise<HTMLElement> {
    await this.createPage();
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
