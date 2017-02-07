
export class App {
  title = 'Tour of Heroes';
  router: null;

  configureRouter(config, router){
    config.title = 'heroes';
    config.map([
      { route: ['','dashboard'], name: 'dashboard', moduleId: 'dashboard', nav: true, title: 'Dashboard'},
      { route: 'heroes', name:'heroes', moduleId: 'heroes', nav:true, title: 'Heroes'}
    ]);

    this.router = router;
  }

}