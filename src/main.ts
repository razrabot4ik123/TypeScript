import './css/main.css';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';

class App {
  root: HTMLElement;

  constructor() {
    this.root = document.querySelector('#app')!;
  }

  init(): void {
    this.root.append(new Header().render());
    this.root.append(new HomePage().render());
  }
}

new App().init();
