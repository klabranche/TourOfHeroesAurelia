
export class App {
  title = 'Tour of Heroes';
  router: null;

  configureRouter(config, router){
    config.title = 'heroes';
    config.map([
      { route: '', name:'home', moduleId: 'home', title: 'Home'},
      { route: 'heroes', name:'heroes', moduleId: 'heroes', nav:true, title: 'Select'}
    ]);

    this.router = router;
  }

}