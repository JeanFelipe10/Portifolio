/*
 * Mini-painéis dos projetos.
 *
 * São ILUSTRAÇÕES desenhadas em SVG, com número inventado — não são print de
 * sistema. Os seis repositórios são privados e as telas reais têm dado de
 * pessoa (nome, CPF, salário, denúncia); nada disso pode aparecer numa página
 * pública. O desenho passa a ideia do produto sem expor ninguém.
 */

const L = '#0b1017'; // fundo da "tela"
const LINHA = 'rgba(255,255,255,.08)';
const TXT = 'rgba(203,213,225,.9)';
const FRACO = 'rgba(148,163,184,.65)';

/** Moldura de janela: barra de título com três pontos, como um app aberto. */
function Janela({ titulo, children }) {
  return (
    <svg
      viewBox="0 0 320 168"
      className="painel"
      role="img"
      aria-label={`Ilustração da tela do ${titulo}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="320" height="168" fill={L} />
      <rect width="320" height="22" fill="rgba(255,255,255,.03)" />
      <line x1="0" y1="22" x2="320" y2="22" stroke={LINHA} />
      <circle cx="12" cy="11" r="3" fill="#fb7185" opacity=".7" />
      <circle cx="23" cy="11" r="3" fill="#fbbf24" opacity=".7" />
      <circle cx="34" cy="11" r="3" fill="#34d399" opacity=".7" />
      <text x="48" y="15" fill={FRACO} fontSize="8.5" fontFamily="Poppins, sans-serif">
        {titulo}
      </text>
      {children}
    </svg>
  );
}

/** Cartão de indicador reutilizado por vários painéis. */
function Kpi({ x, y, w = 88, rotulo, valor, cor }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height="40" rx="7" fill="rgba(255,255,255,.03)" stroke={LINHA} />
      <text x={x + 10} y={y + 16} fill={FRACO} fontSize="7.5" fontFamily="Poppins, sans-serif">
        {rotulo}
      </text>
      <text
        x={x + 10}
        y={y + 31}
        fill={cor}
        fontSize="14"
        fontWeight="700"
        fontFamily="Poppins, sans-serif"
      >
        {valor}
      </text>
    </g>
  );
}

/** ClickRH — headcount por barras e indicadores de pessoal. */
function PainelRh() {
  const barras = [26, 40, 33, 52, 44, 61, 57];
  return (
    <Janela titulo="ClickRH — Painel do RH">
      <Kpi x={12} y={34} rotulo="Headcount" valor="128" cor="#38bdf8" />
      <Kpi x={108} y={34} rotulo="Admissões" valor="9" cor="#34d399" />
      <Kpi x={204} y={34} w={104} rotulo="Turnover" valor="3,2%" cor="#fbbf24" />
      <text x={12} y={92} fill={FRACO} fontSize="7.5" fontFamily="Poppins, sans-serif">
        Colaboradores por mês
      </text>
      {barras.map((h, i) => (
        <rect
          key={i}
          x={12 + i * 43}
          y={152 - h}
          width="26"
          height={h}
          rx="4"
          fill="#38bdf8"
          opacity={0.35 + i * 0.09}
        />
      ))}
    </Janela>
  );
}

/** CobraRápido — curva de recuperação e status dos acordos. */
function PainelCobranca() {
  return (
    <Janela titulo="CobraRápido — Recuperação">
      <Kpi x={12} y={34} rotulo="Recuperado" valor="R$ 84k" cor="#34d399" />
      <Kpi x={108} y={34} rotulo="Acordos" valor="47" cor="#38bdf8" />
      <Kpi x={204} y={34} w={104} rotulo="Em atraso" valor="12" cor="#fb7185" />
      <path
        d="M14 148 L60 138 L106 126 L152 128 L198 108 L244 96 L306 78"
        fill="none"
        stroke="#34d399"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 148 L60 138 L106 126 L152 128 L198 108 L244 96 L306 78 L306 160 L14 160 Z"
        fill="url(#gradVerde)"
        opacity=".22"
      />
      <defs>
        <linearGradient id="gradVerde" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[60, 152, 244].map((x, i) => (
        <circle key={i} cx={x} cy={[138, 128, 96][i]} r="3" fill="#34d399" />
      ))}
    </Janela>
  );
}

/** JZTech KYC — captura facial, prova de vida e selo de verificado. */
function PainelKyc() {
  return (
    <Janela titulo="JZTech KYC — Verificação">
      <rect x="14" y="32" width="104" height="122" rx="9" fill="rgba(255,255,255,.03)" stroke={LINHA} />
      {/* Guias de enquadramento do rosto */}
      <path d="M24 48 v-8 h10 M108 48 v-8 h-10 M24 138 v8 h10 M108 138 v8 h-10" stroke="#38bdf8" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="66" cy="80" r="19" fill="none" stroke="#38bdf8" strokeWidth="1.6" opacity=".8" />
      <path d="M50 122c3-11 9-16 16-16s13 5 16 16" fill="none" stroke="#38bdf8" strokeWidth="1.6" opacity=".8" />
      {[
        { y: 40, t: 'Documento lido', c: '#34d399' },
        { y: 70, t: 'Prova de vida', c: '#34d399' },
        { y: 100, t: 'Face conferida', c: '#34d399' },
        { y: 130, t: 'Assinatura', c: '#fbbf24' },
      ].map((p) => (
        <g key={p.t}>
          <rect x="132" y={p.y} width="176" height="22" rx="6" fill="rgba(255,255,255,.03)" stroke={LINHA} />
          <circle cx="145" cy={p.y + 11} r="5" fill="none" stroke={p.c} strokeWidth="1.6" />
          <path d={`M142.5 ${p.y + 11} l2 2 4-4.5`} stroke={p.c} strokeWidth="1.6" fill="none" strokeLinecap="round" />
          <text x="157" y={p.y + 14} fill={TXT} fontSize="8" fontFamily="Poppins, sans-serif">
            {p.t}
          </text>
        </g>
      ))}
    </Janela>
  );
}

/** Ouvidoria — fila de protocolos com status e sigilo. */
function PainelOuvidoria() {
  const linhas = [
    { p: '#4821', s: 'Em análise', c: '#fbbf24' },
    { p: '#4820', s: 'Procedente', c: '#34d399' },
    { p: '#4819', s: 'Em análise', c: '#fbbf24' },
    { p: '#4818', s: 'Arquivada', c: '#94a3b8' },
  ];
  return (
    <Janela titulo="Ouvidoria — Protocolos">
      <Kpi x={12} y={32} rotulo="Abertas" valor="18" cor="#fbbf24" />
      <Kpi x={108} y={32} rotulo="Concluídas" valor="63" cor="#34d399" />
      <Kpi x={204} y={32} w={104} rotulo="Anônimas" valor="71%" cor="#a78bfa" />
      {linhas.map((l, i) => (
        <g key={l.p}>
          <rect x="12" y={82 + i * 21} width="296" height="17" rx="5" fill="rgba(255,255,255,.03)" stroke={LINHA} />
          <text x="21" y={94 + i * 21} fill={TXT} fontSize="8" fontFamily="Poppins, sans-serif">
            Protocolo {l.p}
          </text>
          <rect x="228" y={85 + i * 21} width="72" height="11" rx="5.5" fill={l.c} opacity=".16" />
          <text x="264" y={93.5 + i * 21} fill={l.c} fontSize="7" textAnchor="middle" fontFamily="Poppins, sans-serif">
            {l.s}
          </text>
        </g>
      ))}
    </Janela>
  );
}

/** Ponto-Check — marcações do dia numa linha do tempo. */
function PainelPonto() {
  const marcas = [
    { x: 40, h: '08:02' },
    { x: 118, h: '12:01' },
    { x: 196, h: '13:00' },
    { x: 274, h: '17:34' },
  ];
  return (
    <Janela titulo="Ponto-Check — Espelho do dia">
      <Kpi x={12} y={32} rotulo="Trabalhadas" valor="8h32" cor="#38bdf8" />
      <Kpi x={108} y={32} rotulo="Saldo" valor="+32min" cor="#34d399" />
      <Kpi x={204} y={32} w={104} rotulo="Pendências" valor="1" cor="#fb7185" />
      <line x1="20" y1="118" x2="300" y2="118" stroke={LINHA} strokeWidth="2" />
      <line x1="40" y1="118" x2="274" y2="118" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      {marcas.map((m) => (
        <g key={m.h}>
          <circle cx={m.x} cy="118" r="5" fill={L} stroke="#38bdf8" strokeWidth="2" />
          <text x={m.x} y="106" fill={TXT} fontSize="7.5" textAnchor="middle" fontFamily="Poppins, sans-serif">
            {m.h}
          </text>
        </g>
      ))}
      <text x="40" y="140" fill={FRACO} fontSize="7" textAnchor="middle" fontFamily="Poppins, sans-serif">
        entrada
      </text>
      <text x="157" y="140" fill={FRACO} fontSize="7" textAnchor="middle" fontFamily="Poppins, sans-serif">
        intervalo
      </text>
      <text x="274" y="140" fill={FRACO} fontSize="7" textAnchor="middle" fontFamily="Poppins, sans-serif">
        saída
      </text>
    </Janela>
  );
}

/** ZeroPapel — documentos indo do armário para a nuvem. */
function PainelDocumentos() {
  return (
    <Janela titulo="ZeroPapel — Acervo">
      <Kpi x={12} y={32} rotulo="Documentos" valor="12.4k" cor="#38bdf8" />
      <Kpi x={108} y={32} rotulo="Este mês" valor="+840" cor="#34d399" />
      <Kpi x={204} y={32} w={104} rotulo="Espaço" valor="38 GB" cor="#a78bfa" />
      {/* Nuvem */}
      <path
        d="M212 118a13 13 0 0 1 12-13 17 17 0 0 1 32-4 14 14 0 0 1 3 27h-34a13 13 0 0 1-13-10z"
        fill="rgba(56,189,248,.1)"
        stroke="#38bdf8"
        strokeWidth="1.6"
      />
      <path d="M238 112v22M231 127l7 7 7-7" stroke="#38bdf8" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Pilha de documentos */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect
            x={14 + i * 6}
            y={92 - i * 8}
            width="52"
            height="62"
            rx="6"
            fill="rgba(255,255,255,.04)"
            stroke={LINHA}
          />
        </g>
      ))}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="36"
          y1={96 + i * 10}
          x2={i === 3 ? 62 : 74}
          y2={96 + i * 10}
          stroke={FRACO}
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".55"
        />
      ))}
      <path d="M96 118h96" stroke="#38bdf8" strokeWidth="1.6" strokeDasharray="4 5" strokeLinecap="round" />
      <path d="M186 113l7 5-7 5" stroke="#38bdf8" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Janela>
  );
}

const PAINEIS = {
  rh: PainelRh,
  cobranca: PainelCobranca,
  kyc: PainelKyc,
  ouvidoria: PainelOuvidoria,
  ponto: PainelPonto,
  documentos: PainelDocumentos,
};

export default function MiniPainel({ tipo }) {
  const Painel = PAINEIS[tipo];
  return Painel ? <Painel /> : null;
}
