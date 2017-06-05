export const routes = [
  {
    route: '',
    name: 'home',
    moduleId: './views/home/home',
    nav: true,
    title: 'Home'
  },
  {
    route: 'login',
    name: 'login',
    moduleId: './views/login/login',
    nav: true,
    title:'Login',
    isPublic: true
  },
  {
    route: 'cadastrar',
    name: 'register',
    moduleId: './views/register/register',
    nav: true,
    title:'Cadastro',
    isPublic: true
  }
];
