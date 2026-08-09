/*
 * Ícones em SVG inline.
 *
 * O portfólio antigo carregava o Font Awesome inteiro de um CDN (~60 KB) para
 * usar uma dúzia de ícones. Aqui só entra o desenho de cada um que a página
 * realmente mostra, e sem requisição externa.
 */

const CAMINHOS = {
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
  seta: <path d="M12 19V5M5 12l7-7 7 7" />,
  externo: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4l-8 8" />
      <path d="M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </>
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
  codigo: <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />,
  pincel: (
    <>
      <path d="M3 21c2 0 4-1 4-4 0-1.7-1.3-3-3-3-2 0-3 1.5-3 3 0 2-1 3-1 3z" />
      <path d="M9 14L20.5 2.5a2.1 2.1 0 0 1 3 3L12 17" />
    </>
  ),
  foguete: (
    <>
      <path d="M5 15c-1.5 1.5-2 6-2 6s4.5-.5 6-2c.9-.9.9-2.3 0-3.2a2.3 2.3 0 0 0-4 0z" />
      <path d="M9.5 14.5L7 12c1-5 5-9 12-9 0 7-4 11-9 12z" />
      <circle cx="14.5" cy="8.5" r="1.6" />
    </>
  ),
  email: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  whatsapp: (
    <path d="M3 21l1.7-5A8.2 8.2 0 1 1 8 19.4L3 21zm6.2-6.6c.9 1.6 2 2.6 3.6 3.4.6.3 1.1.3 1.5 0l.9-.7c.2-.2.5-.2.7 0l1.5 1c.3.2.3.5.2.8-.4.9-1.4 1.4-2.4 1.3-3.4-.4-6.9-3.9-7.3-7.3-.1-1 .4-2 1.3-2.4.3-.1.6-.1.8.2l1 1.5c.2.2.2.5 0 .7l-.7.9c-.3.4-.3.9-.1 1.5z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.6v.1M11.5 17v-3.6a2 2 0 0 1 4 0V17" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.2-4-2.2-6-2.6m12 5v-3.4c0-1 .1-1.7-.5-2.3 2.5-.3 5-1.3 5-5.6a4.3 4.3 0 0 0-1.2-3 4 4 0 0 0-.1-3s-1-.3-3.3 1.2a11.3 11.3 0 0 0-6 0C6.6 3.8 5.6 4.1 5.6 4.1a4 4 0 0 0-.1 3A4.3 4.3 0 0 0 4.3 10c0 4.3 2.5 5.3 5 5.6-.4.4-.6 1-.5 1.6V21" />
  ),
  x: <path d="M4 4l16 16M20 4L4 20" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5v.1" />
    </>
  ),
};

export default function Icone({ nome, tamanho = 20, ...resto }) {
  const desenho = CAMINHOS[nome];
  if (!desenho) return null;

  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...resto}
    >
      {desenho}
    </svg>
  );
}
