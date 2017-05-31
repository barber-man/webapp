import {paths} from 'constants/paths-constant';

let devicesPath = paths.images.devices;
let productsPath = paths.images.products;
let iconsPath = paths.images.icons;

export const plans = {

  'delphi': {
    title: 'Plano Delphi',
    subtitle: 'Fechadura Biométrica PL10',
    description: 'Fechadura com reconhecimento de impressão digital. Fechadura com leitor de impressão digital e baixo consumo de energia.',
    images: [{
      url: `${devicesPath}/bio-lock-pl10-01.png`
    },{
      url: `${devicesPath}/bio-lock-pl10-02.png`
    },{
      url: `${devicesPath}/bio-lock-pl10-03.jpg`
    }],
    features: {
      title: 'Acesso fácil na ponta dos dedos.',
      description: 'Não se preocupe mais em deixar a chave embaixo do tapete ou fazer cópias e distribuir por aí. Tudo que você precisa é de sua impressão digital. Coloque seu dedo no leitor e, pronto, seu acesso está liberado. Acesso instantâneo, seguro e sem esforço algum.',
      list: [
         {
            icon: `${iconsPath}/design.svg`,
            title: 'Design compacto e resistente.',
            description: 'Ideal para quem gosta de praticidade.'
         }, {
            icon: `${iconsPath}/macaneta_ociosa.svg`,
            title: 'Sistema que impede entrada forçada.',
            description: 'Maçaneta externa ociosa, o que impede que seja forçada.'
         }, {
            icon: `${iconsPath}/abertura_toque.svg`,
            title: 'Abertura com apenas um toque.',
            description: 'Acesso liberado apenas com a impressão digital. Sem esforço algum, é só encostar o dedo e entrar.'
         }, {
            icon: `${iconsPath}/passagem_livre.svg`,
            title: 'Modo de passagem livre.',
            description: 'Festa com a família e amigos? Não precisa cadastrar todo mundo. Coloque no modo de livre passagem e todos os convidados terão acesso à sua casa.'
         }
      ]
    },
    banner: {
      title: 'Delphi é para todo mundo.',
      description: 'Para quem tem pressa, basta um toque. Para quem tem muito com o que se preocupar, economia de energia. A Tuist Delphi é perfeita para quem procura economia e praticidade.'
    },
    benefits: {
      title: 'Grandes atributos, ótimo preço.',
      list: [
        {
          icon: `${iconsPath}/registro_dados.svg`,
          title: 'Registro de dados mesmo com queda de energia.'
        }, {
          icon: `${iconsPath}/avisos_sonoros.svg`,
          title: 'Indicador de LED e avisos sonoros.'
        }, {
          icon: `${iconsPath}/macaneta.svg`,
          title: 'Maçaneta com trinco reversível para todas as direções de abertura da porta.'
        }, {
          icon: `${iconsPath}/chave.svg`,
          title: 'Abertura de emergência por meio de chave mecânica.'
        }, {
          icon: `${iconsPath}/bateria.svg`,
          title: 'Aviso de bateria fraca.'
        }, {
          icon: `${iconsPath}/grupo_usuarios.svg`,
          title: '3 grupos de usuários: administrador, normal e temporário.'
        }
      ]
    },
    specifications: {
      image: `${productsPath}/delphi/medida_delphi.png`,
      list: [
         {title: 'Material', value: ['Plástico ABS Rígido']},
         {title: 'Capacidade de usuários', value: ['Administrador: 10','Usuário normal: 60', 'Usuário temporário: 20']},
         {title: 'Temperatura de operação', value: ['0 ºC - 45 ºC']},
         {title: 'Alimentação', value: ['4 pilhas alcalinas AA']},
         {title: 'Abertura de emergência', value: ['Bateria 9V e chave mecânica']},
         {title: 'Espessura da porta', value: ['30-38 mm (opcional)', '39-46 mm (padrão)', '47-54 mm (padrão)', '55-60 mm (opcional)']}
      ]
    },
    backendPlanId: 'pppppppp-llll-mmmm-nnnn-oooooooooooo'
  },

  'cetus': {
    title: 'Plano Cetus',
    subtitle: 'Fechadura Biométrica Digital L7000',
    description: 'Fechadura com impressão digital. Armazenamento de até 500 digitais, sistema que impede entrada forçada e bateria de emergência.',
    images: [{
      url: `${devicesPath}/bio-lock-l7000-01.png`
    },{
      url: `${devicesPath}/bio-lock-l7000-02.png`
    },{
      url: `${devicesPath}/bio-lock-l7000-03.jpg`
    },{
      url: `${devicesPath}/bio-lock-l7000-04.jpg`
    }],
    features: [
      'Algoritmo de reconhecimento de impressão digital.',
      'Trava única padrão americano.',
      'Maçaneta e trinco reversível para todas as direções de abertura da porta',
      'Sistema LIDAR com modo ocioso para impedir entrada forçada.',
      'Display LED com menu visual.',
      'Três métodos de desbloqueio: impressão digital, senha e chave mecânica.',
      'Alarme inteligente para bateria fraca e operação ilegal.',
      'Upload e download de dados via porta USB.',
      'Modo de passagem livre.',
      'Terminais externos para obter energia de backup a partir de uma bateria de 9V.'
    ],
    backendPlanId: 'llllllll-ffff-oooo-oooo-dddddddddddd'
  },

  'cygnus': {
    title: 'Plano Cygnus',
    subtitle: 'Fechadura Biométrica Digital L9000',
    description: 'Fechadura com cobertura metálica deslizante que protege o leitor de digitais. Acompanha sistema Smart com duas trancas para maior segurança',
    images: [{
      url: `${devicesPath}/bio-lock-l9000-01.png`
    },{
      url: `${devicesPath}/bio-lock-l9000-02.png`
    },{
      url: `${devicesPath}/bio-lock-l9000-03.jpg`
    }],
    features: [
      'Nova geração de reconhecimento de impressão digital.',
      'Sistema Smart antirroubo com um trinco e duas trancas, possibilitando maior segurança ao trancar a fechadura por dentro e por fora.',
      'Alarme inteligente para bateria fraca e operação ilegal.',
      'Design com maçaneta ociosa para impedir entrada forçada.',
      'Upload / Download de dados via porta USB.',
      'Suporta o modo de passagem - Normalmente Aberto.',
      'Suporta consulta de registros de abertura normal.',
      'Terminais externos para emergência, acionados a partir de uma bateria de 9V.',
      'Conjunto de recuo de até 60 milímetros.',
      'Cobertura metálica deslizante para proteger a display OLED e sensor de impressão digital.',
      'Tela OLED com menu visual.',
      'Três métodos de desbloqueio independentes: impressão digital, senha e chave mecânica.',
      'Girar a manopla para cima tem a função de bloquear a trava.',
      'Modo de passagem livre.'
    ],
    backendPlanId: 'llllllll-ffff-oooo-pppp-dddddddddddd'
  },

  'lyra': {
    title: 'Plano Lyra',
    subtitle: 'Fechadura de reconhecimento facial e senha',
    description: 'Fechadura inteligente com tecnologia de reconhecimento facial. Opção de acesso via senha, cartão ou chave mecânica para casos de emergência. Operação por tela Touch Screen e bloqueio automático ao fechar a porta.',
    images: [{
      url: `${devicesPath}/bio-lock-fl1000-01.png`
    },{
      url: `${devicesPath}/bio-lock-fl1000-02.png`
    },{
      url: `${devicesPath}/bio-lock-fl1000-03.jpg`
    }],
    features: {
      title: 'Muito mais que uma linda fechadura.',
      description: 'Com reconhecimento facial, a fechadura Lyra é a sua resposta para conforto e segurança. Basta cadastrar sua foto na fechadura que ela faz o resto. Se o seu dia foi ruim, entre em casa com sua senha ou cartão magnético. ',
      image: `${productsPath}/lyra/lyra_prata_face.png`,
      list: [
         {
            icon: `${iconsPath}/facial.svg`,
            title: 'Reconhecimento facial.',
            description: 'A Lyra é a fechadura perfeita para quem quer conforto e segurança. Basta se posicionar em frente a fechadura que ela faz o resto.'
         }, {
            icon: `${iconsPath}/bloqueio.svg`,
            title: 'Bloqueio automático assim que a porta é fechada.',
            description: 'Não tenha mais que se preocupar em trancar a porta depois que entrou. Deixe que ela faça isso sozinha.'
         }, {
            icon: `${iconsPath}/apito_alarme.svg`,
            title: 'Alarmes de operação ilegal e bateria fraca.',
            description: 'Saiba quando você está recebendo uma visita indesejada. Avisos sonoros indicam uso forçado da fechadura e quando a bateria precisa ser trocada.'
         }, {
            icon: `${iconsPath}/passagem_livre.svg`,
            title: 'Modo de livre passagem.',
            description: 'Festa com a família e amigos? Não precisa cadastrar todo mundo. Coloque no modo de livre passagem e todos os convidados terão acesso à sua casa.'
         }
      ]
    },
    banner: {
      title: 'Design que complementa seu estilo.',
      description: 'Com seu design minimalista e linhas refinadas, a Tuist Lyra combina com qualquer decoração, das casas modernas até as mais tradicionais.'
    },
    benefits: {
      title: 'Uma fechadura que não é só uma fechadura.',
      list: [
        {
          icon: `${iconsPath}/chave.svg`,
          title: 'Quatro métodos de desbloqueio: face, senha, cartão e chave mecânica.'
        }, {
          icon: `${iconsPath}/5_trincos.svg`,
          title: 'Padrão europeu de encaixe com 5 trincos.'
        }, {
          icon: `${iconsPath}/touch_screen.svg`,
          title: 'Tela Touch Screen de 3 polegadas.'
        }, {
          icon: `${iconsPath}/menu_icones.svg`,
          title: 'Menu com ícones para uma operação fácil e rápida.'
        }, {
          icon: `${iconsPath}/pen_drive.svg`,
          title: 'Upload e download de dados via porta USB.'
        }, {
          icon: `${iconsPath}/bateria_emergencia.svg`,
          title: 'Terminais externos para emergência, acionados a partir de uma bateria de 9V.'
        }
      ]
    },
    specifications: {
      image: `${productsPath}/lyra/medida_lyra.png`,
      list: [
         {title: 'Material', value: ['Liga de zinco']},
         {title: 'Capacidade de registro facial', value: ['100']},
         {title: 'Capacidade de senhas', value: ['100']},
         {title: 'Capacidade de log', value: ['30.000']},
         {title: 'Comunicação', value: ['USB']},
         {title: 'Temperatura de operação', value: ['0 ºC - 45 ºC']},
         {title: 'Alimentação', value: ['8 pinhas alcalinas AA']},
         {title: 'Abertura de emergência', value: ['Bateria 9V e chave mecânica']},
         {title: 'Espessura da porta', value: ['35-50 mm (padrão)']}
      ]
    },
    backendPlanId: 'llllllll-ffff-oooo-qqqq-dddddddddddd'
  },
  'veyron': {
    title: 'Plano Veyron',
    subtitle: 'Lorem ipsum dolor sit amet.',
    specifications: {
      image: `${productsPath}/veyron/medidas_veyron.png`,
      list: [
         {title: 'Capacidade de senhas', value: ['10.000']},
         {title: 'Capacidade de Impressão Digital', value: ['4.000']},
         {title: 'Capacidade de Facial', value: ['1.500 1:N / 4.000 1:1']},
         {title: 'Capacidade de Eventos', value: ['100.000']},
         {title: 'Método de autenticação', value: ['Senha', 'Impressão Digital', 'Face']},
         {title: 'Velocidade de Verificação', value: ['< 1 Segundo']},
         {title: 'Velocidade de identificação', value: ['<= 2 Segundos']},
         {title: 'Alimentação', value: ['12V DC/3A']},
         {title: 'Display', value: ['LCD TFT 2.8" - Tela colorida', 'LED indicador - Vermelho/Verde']}
      ]
    },
    backendPlanId: 'llllllll-ffff-oooo-vvvv-dddddddddddd'
  }

}
