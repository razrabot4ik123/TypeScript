import './css/main.css';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

class App {
  root: HTMLElement;

  constructor() {
    this.root = document.querySelector('#app')!;
  }

  async init(): Promise<void> {
    this.root.append(new Header().render());
    this.root.append(await new HomePage().render());
  }
}

new App().init();
