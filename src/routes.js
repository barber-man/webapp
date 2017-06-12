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
  },
  {
    route: 'medias',
    name: 'medias-view',
    moduleId: './views/medias-view/medias-view',
    nav: true,
    title: 'Mídias'
  },
  {
    route: 'medias/upload',
    name: 'media-upload',
    moduleId: './views/medias-upload/medias-upload',
    nav: true,
    title: 'Upload'
  }
];
