export const routes = [
  {
    route: 'login',
    name: 'login',
    moduleId: './views/login/login',
    nav: true,
    title:'Login',
    isPublic: true
  },
  {
    route: '/senha/recuperar',
    name: 'password-recover',
    moduleId: './views/password/password-recover/password-recover',
    nav: true,
    title: 'Recuperar Senha',
    isPublic: true
  },
  {
    route: '/senha/redefinir/:token',
    name: 'password-reset',
    moduleId: './views/password/password-reset/password-reset',
    nav: true,
    href: '#/senha/redefinir',
    title: 'Redefinir Senha',
    isPublic: true
  },
  {
    route: '',
    name: 'home',
    moduleId: './views/home/home',
    nav: true,
    title: 'Home',
    isPublic: true
  },
  {
    route: '/residencias',
    name: 'residencias',
    moduleId: './views/residences/residences',
    nav: true,
    title: 'Residências',
    isPublic: true
  },
  {
    route: 'planos/cetus',
    name: 'plan-cetus',
    moduleId: './views/plans/plan-cetus/plan-cetus',
    nav: true,
    title: 'Plano Cetus',
    isPublic: true
  },
  {
    route: 'planos/cygnus',
    name: 'plan-cygnus',
    moduleId: './views/plans/plan-cygnus/plan-cygnus',
    nav: true,
    title: 'Plano Cygnus',
    isPublic: true
  },
  {
    route: 'planos/lyra',
    name: 'plan-lyra',
    moduleId: './views/plans/plan-lyra/plan-lyra',
    nav: true,
    title: 'Plano Lyra',
    isPublic: true
  },
  {
    route: 'planos/delphi',
    name: 'plan-delphi',
    moduleId: './views/plans/plan-delphi/plan-delphi',
    nav: true,
    title: 'Plano Delphi',
    isPublic: true
  },
  {
    route: 'planos/empresas',
    name: 'plan-empresa',
    moduleId: './views/plans/plan-veyron/plan-veyron',
    nav: true,
    title: 'Plano Empresarial',
    isPublic: true
  },
  {
    route: 'planos/condominios',
    name: 'plan-condominio',
    moduleId: './views/plans/condominio/condominio',
    nav: true,
    title: 'Plano Condominial',
    isPublic: true
  },
  {
    route: 'dashboard',
    name: 'dashboard',
    moduleId: './views/dashboard/dashboard',
    nav: true,
    title: 'Visão Geral'
  },
  {
    route: 'usuario/pedidos',
    name: 'user/orders',
    moduleId: './views/user/orders/orders',
    nav: true,
    title: 'Meus Pedidos'
  },
  {
    route: 'usuario/pedidos-pendentes',
    name: 'user/preorders',
    moduleId: './views/user/preorders/preorders',
    nav: true,
    title: 'Pedidos Pendentes'
  },
  {
    route: 'usuario/planos',
    name: 'user/subscriptions',
    moduleId: './views/user/subscriptions/subscriptions',
    nav: true,
    title: 'Meus Planos'
  },
  {
    route: 'usuario/dados',
    name: 'user/data',
    moduleId: './views/user/user-data/user-data',
    nav: true,
    title: 'Meus Dados'
  },
  {
    route: 'checkout',
    name: 'checkout',
    moduleId: './views/checkout/checkout',
    nav: true,
    title: 'Carrinho'
  },
  {
    route: 'ajuda',
    name: 'ajuda',
    moduleId: './views/help/help',
    nav: true,
    title: 'Ajuda',
    isPublic: true
  },
  {
    route: 'sobre',
    name: 'sobre',
    moduleId: './views/about/about',
    nav: true,
    title: 'Sobre Nós',
    isPublic: true
  },
  {
    route: 'termos-de-uso',
    name: 'termos-de-uso',
    moduleId: './views/terms/terms',
    nav: true,
    title: 'Termos de uso',
    isPublic: true
  },
  {
    route: 'consultores',
    name: 'consultores',
    moduleId: './views/terms/terms',
    nav: true,
    title: 'Consultores',
    isPublic: true
  }
];
