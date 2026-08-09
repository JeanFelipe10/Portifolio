/*
 * Todo o texto da página mora aqui.
 *
 * Separar conteúdo de componente é o padrão das landings da casa: para trocar
 * um texto, um projeto ou um telefone ninguém precisa abrir JSX.
 */

export const PESSOA = {
  nome: 'Jean Felipe',
  papel: 'Desenvolvedor Front-End',
  saudacao: 'Olá, eu sou',
  resumo:
    'Construo em React as telas de sistemas que rodam em produção — de gestão de pessoas a cobrança e verificação de identidade. Integro com a API, publico em nuvem e entrego tela que funciona igual no computador e no celular.',
  email: 'nekoulx10@gmail.com',
  whatsapp: '18997086342',
  cidade: 'Maringá, PR',
};

/** Palavras que se revezam sendo digitadas no topo, depois de "Desenvolvedor". */
export const PAPEIS = ['Front-End', 'React', 'de Interfaces', 'que entrega'];

export const EMPRESA = {
  nome: 'JZ Tech',
  url: 'https://www.jztech.com.br',
};

export const LINKS = [
  { id: 'inicio', rotulo: 'Início' },
  { id: 'sobre', rotulo: 'Sobre' },
  { id: 'servicos', rotulo: 'Serviços' },
  { id: 'projetos', rotulo: 'Projetos' },
  { id: 'demo', rotulo: 'Demonstração' },
  { id: 'contato', rotulo: 'Contato' },
];

export const REDES = [
  {
    nome: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jean-felipe123',
    icone: 'linkedin',
    rodape: true,
  },
  { nome: 'GitHub', url: 'https://github.com/JeanFelipe10', icone: 'github', rodape: true },
  {
    nome: 'Instagram',
    url: 'https://www.instagram.com/jean_gj',
    icone: 'instagram',
    rodape: true,
  },
];

/** Os números do topo. `alvo` é o valor final; a contagem sai daí. */
export const NUMEROS = [
  { alvo: 6, rotulo: 'sistemas em que trabalhei' },
  { alvo: 30, prefixo: '+', rotulo: 'telas entregues' },
  { alvo: 4, rotulo: 'papéis de acesso por sistema' },
  { alvo: 100, sufixo: '%', rotulo: 'responsivo e acessível' },
];

export const SOBRE = {
  titulo: 'Desenvolvedor front-end em constante evolução',
  paragrafos: [
    'Trabalho com produtos que têm usuário do outro lado: sistemas multi-empresa, com papéis diferentes vendo telas diferentes, e regra de negócio que não pode falhar.',
    'No dia a dia é React e JavaScript na interface, consumo de API em PHP, banco SQL e deploy em nuvem. Gosto de tela que carrega rápido, se ajusta a qualquer tamanho de tela e não deixa ninguém perdido.',
  ],
  grupos: [
    {
      titulo: 'Tecnologias',
      itens: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Vite', 'Git', 'SQL', 'Docker'],
    },
    {
      titulo: 'Como eu trabalho',
      itens: ['Comunicação', 'Trabalho em equipe', 'Resolução de problemas', 'Organização'],
    },
  ],
};

export const SERVICOS = [
  {
    icone: 'codigo',
    titulo: 'Desenvolvimento Web',
    texto:
      'Sites e aplicações web modernas, com foco em performance e experiência de quem usa todo dia.',
    itens: [
      'Interfaces responsivas em React',
      'Integração com APIs REST',
      'Painéis e telas de cadastro',
      'Otimização de carregamento',
    ],
  },
  {
    icone: 'pincel',
    titulo: 'Design de Interface',
    texto: 'Telas claras e consistentes, montadas sobre um sistema de design — não sobre improviso.',
    itens: [
      'Design system e tokens',
      'Layout responsivo de verdade',
      'Acessibilidade e navegação por teclado',
      'Protótipo antes do código',
    ],
  },
  {
    icone: 'foguete',
    titulo: 'Otimização & SEO',
    texto: 'Página que carrega rápido, aparece no Google e não trava no celular de ninguém.',
    itens: [
      'Core Web Vitals',
      'SEO técnico e dado estruturado',
      'Imagens e fontes sob controle',
      'Medição antes e depois',
    ],
  },
];

/** Como o trabalho anda, do primeiro papo até o site no ar. */
export const PROCESSO = [
  {
    numero: '01',
    titulo: 'Entender',
    texto: 'Quem usa, o que precisa resolver e o que não pode quebrar. Antes de qualquer tela.',
  },
  {
    numero: '02',
    titulo: 'Desenhar',
    texto: 'Layout e sistema de design fechados primeiro — cor, espaçamento e componente definidos.',
  },
  {
    numero: '03',
    titulo: 'Construir',
    texto: 'React componente a componente, responsivo desde a primeira linha, integrado à API.',
  },
  {
    numero: '04',
    titulo: 'Publicar',
    texto: 'Build, deploy automático e conferência no ar — no celular e no computador.',
  },
];

/*
 * Projetos reais. Os repositórios são privados — aqui vai só a descrição do
 * domínio e a stack, nada de detalhe interno, nome de cliente ou dado de
 * pessoa. Os painéis ao lado são ilustrações desenhadas em código, com número
 * inventado: nenhum print de sistema real entra numa página pública.
 */
export const PROJETOS = [
  {
    id: 'clickrh',
    nome: 'ClickRH',
    painel: 'rh',
    resumo: 'Gestão de pessoas ponta a ponta',
    texto:
      'Sistema de gestão de RH multi-empresa: colaboradores, treinamento, PDI, advertências, clima, recrutamento, onboarding e movimentação — cada papel enxergando só o que lhe cabe.',
    papel: 'Telas de RH, gestor, liderança e colaborador; landing pública do produto.',
    stack: ['React', 'MUI', 'PHP', 'MySQL', 'Docker', 'GKE'],
  },
  {
    id: 'cobrarapido',
    nome: 'CobraRápido',
    painel: 'cobranca',
    resumo: 'Cobrança e recuperação de crédito',
    texto:
      'Plataforma de cobrança e recuperação de crédito: régua de contato, acompanhamento de acordos e visão do que entrou no período.',
    papel: 'Painel de acompanhamento e telas de negociação.',
    stack: ['React', 'PHP', 'MySQL', 'GKE'],
  },
  {
    id: 'kyc',
    nome: 'JZTech KYC',
    painel: 'kyc',
    resumo: 'Identidade, prova de vida e assinatura',
    texto:
      'Verificação de identidade ponta a ponta: biometria facial, prova de vida contra fraude e assinatura de documento, tudo atrás de um gateway próprio.',
    papel: 'Fluxo de captura no navegador e painel de conferência.',
    stack: ['React', 'PHP', 'Biometria', 'Docker'],
  },
  {
    id: 'ouvidoria',
    nome: 'Ouvidoria',
    painel: 'ouvidoria',
    resumo: 'Canal de ética white-label',
    texto:
      'Canal de ética e denúncias white-label: protocolo anônimo, acompanhamento pelo denunciante e triagem pelo comitê, com a marca de cada empresa.',
    papel: 'Abertura de protocolo, acompanhamento e triagem.',
    stack: ['React', 'PHP', 'MySQL', 'GKE'],
  },
  {
    id: 'ponto',
    nome: 'Ponto-Check',
    painel: 'ponto',
    resumo: 'Ponto eletrônico e espelho do mês',
    texto:
      'Controle de ponto com marcação pelo celular, espelho do mês, tratamento de inconsistência e fechamento para a folha.',
    papel: 'Marcação no celular e espelho de horas.',
    stack: ['React', 'PHP', 'MySQL'],
  },
  {
    id: 'zeropapel',
    nome: 'ZeroPapel',
    painel: 'documentos',
    resumo: 'Documentos fora do armário',
    texto:
      'Digitalização e guarda de documentos na nuvem: upload, indexação, busca e ciclo de vida do arquivo, tirando o papel do armário.',
    papel: 'Envio, busca e organização do acervo.',
    stack: ['React', 'PHP', 'Google Cloud'],
  },
];

/*
 * Indicadores da demonstração interativa.
 *
 * Números FICTÍCIOS, escolhidos só para dar escala ao que cada sistema mede.
 * `casas` diz quantas decimais mostrar enquanto o contador corre.
 */
export const INDICADORES = {
  clickrh: [
    { rotulo: 'Colaboradores', alvo: 128, sufixo: '', cor: 'azul' },
    { rotulo: 'Trilhas concluídas', alvo: 87, sufixo: '%', cor: 'verde' },
    { rotulo: 'Turnover no mês', alvo: 3.2, sufixo: '%', casas: 1, cor: 'ambar' },
  ],
  cobrarapido: [
    { rotulo: 'Recuperado no mês', alvo: 84, prefixo: 'R$ ', sufixo: 'k', cor: 'verde' },
    { rotulo: 'Acordos ativos', alvo: 47, sufixo: '', cor: 'azul' },
    { rotulo: 'Taxa de contato', alvo: 62, sufixo: '%', cor: 'violeta' },
  ],
  kyc: [
    { rotulo: 'Verificações', alvo: 2140, sufixo: '', cor: 'azul' },
    { rotulo: 'Aprovação automática', alvo: 94, sufixo: '%', cor: 'verde' },
    { rotulo: 'Tempo médio', alvo: 38, sufixo: 's', cor: 'ciano' },
  ],
  ouvidoria: [
    { rotulo: 'Protocolos abertos', alvo: 18, sufixo: '', cor: 'ambar' },
    { rotulo: 'Concluídos', alvo: 63, sufixo: '', cor: 'verde' },
    { rotulo: 'Anônimos', alvo: 71, sufixo: '%', cor: 'violeta' },
  ],
  ponto: [
    { rotulo: 'Marcações no dia', alvo: 512, sufixo: '', cor: 'azul' },
    { rotulo: 'Sem inconsistência', alvo: 96, sufixo: '%', cor: 'verde' },
    { rotulo: 'Banco de horas', alvo: 32, prefixo: '+', sufixo: 'min', cor: 'ciano' },
  ],
  zeropapel: [
    { rotulo: 'Documentos', alvo: 12.4, sufixo: 'k', casas: 1, cor: 'azul' },
    { rotulo: 'Enviados no mês', alvo: 840, prefixo: '+', sufixo: '', cor: 'verde' },
    { rotulo: 'Espaço usado', alvo: 38, sufixo: ' GB', cor: 'violeta' },
  ],
};

export const CONTATOS = [
  {
    icone: 'email',
    titulo: 'E-mail profissional',
    texto: 'Para proposta, orçamento ou qualquer coisa que precise ficar registrada.',
    rotulo: 'Enviar e-mail',
    url: `mailto:${PESSOA.email}`,
    detalhe: PESSOA.email,
  },
  {
    icone: 'whatsapp',
    titulo: 'WhatsApp',
    texto: 'Para tirar dúvida rápida e combinar uma conversa. Respondo todos os dias, inclusive fim de semana.',
    rotulo: 'Chamar no WhatsApp',
    url: `https://wa.me/55${PESSOA.whatsapp}?text=${encodeURIComponent(
      'Olá, vi seu portfólio e gostaria de conversar sobre um projeto.',
    )}`,
    detalhe: '(18) 99708-6342',
  },
  {
    icone: 'linkedin',
    titulo: 'LinkedIn',
    texto: 'Trajetória completa, formação e recomendações de quem já trabalhou comigo.',
    rotulo: 'Ver perfil',
    url: 'https://www.linkedin.com/in/jean-felipe123',
    detalhe: '/in/jean-felipe123',
  },
];
