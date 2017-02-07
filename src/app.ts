import {APPROUTING} from './app-routing';

export class App {
  title = 'Tour of Heroes';
  router: null;

  configureRouter(config, router){
    config.title = 'heroes';
    config.map(APPROUTING);

    this.router = router;
  }

}