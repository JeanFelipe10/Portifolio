import { useCallback, useEffect, useMemo, useRef } from 'react';

import Icone from './landing/Icone';
import Nav from './landing/Nav';
import Hero from './landing/Hero';
import Sobre from './landing/Sobre';
import Servicos from './landing/Servicos';
import Projetos from './landing/Projetos';
import Demo from './landing/Demo';
import Contato from './landing/Contato';
import Rodape from './landing/Rodape';
import { LINKS, PESSOA, REDES } from './landing/conteudo';
import { rolarAoTopo, useProgresso, useRolagem, useSecaoAtiva } from './landing/hooks';

const IDS = LINKS.map((l) => l.id);

/** Barra fina logo abaixo do menu, mostrando o quanto da página já foi lida. */
function BarraDeProgresso() {
  const barra = useRef(null);

  // Escala em vez de largura: mexer em `width` obriga o navegador a recalcular
  // o layout a cada quadro; `transform` é resolvido direto na composição.
  const aplicar = useCallback((fracao) => {
    if (barra.current) barra.current.style.transform = `scaleX(${fracao})`;
  }, []);

  useProgresso(aplicar);

  return <div ref={barra} className="progresso" aria-hidden="true" />;
}

/** Volume do círculo do botão de voltar ao topo. */
const RAIO = 21;
const VOLTA = 2 * Math.PI * RAIO;

/** Botão de voltar ao topo, com anel de progresso em volta. */
function AoTopo() {
  const mostrar = useRolagem(600);
  const anel = useRef(null);

  // O anel é um círculo tracejado: quanto menor o "offset", mais dele aparece.
  const aplicar = useCallback((fracao) => {
    if (anel.current) anel.current.style.strokeDashoffset = String(VOLTA * (1 - fracao));
  }, []);

  useProgresso(aplicar);

  return (
    <button
      type="button"
      className={`ao-topo ${mostrar ? 'ao-topo--visivel' : ''}`}
      onClick={rolarAoTopo}
      aria-label="Voltar ao topo"
      tabIndex={mostrar ? 0 : -1}
    >
      <svg className="ao-topo__anel" viewBox="0 0 48 48" aria-hidden="true">
        <circle className="ao-topo__trilho" cx="24" cy="24" r={RAIO} />
        <circle
          ref={anel}
          className="ao-topo__linha"
          cx="24"
          cy="24"
          r={RAIO}
          strokeDasharray={VOLTA}
          strokeDashoffset={VOLTA}
        />
      </svg>
      <Icone nome="seta" tamanho={20} />
    </button>
  );
}

export default function App() {
  const ativa = useSecaoAtiva(IDS);

  // Dado estruturado: é assim que o Google entende que a página é sobre uma
  // pessoa, e não um produto qualquer.
  const dadosEstruturados = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: PESSOA.nome,
      jobTitle: PESSOA.papel,
      email: `mailto:${PESSOA.email}`,
      url: 'https://jean.jztech.com.br',
      address: { '@type': 'PostalAddress', addressLocality: PESSOA.cidade },
      sameAs: REDES.map((r) => r.url),
    }),
    [],
  );

  useEffect(() => {
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.text = JSON.stringify(dadosEstruturados);
    document.head.appendChild(tag);
    return () => tag.remove();
  }, [dadosEstruturados]);

  return (
    <>
      <a href="#conteudo" className="pular-menu">
        Pular para o conteúdo
      </a>

      <BarraDeProgresso />
      <Nav ativa={ativa} />

      <main id="conteudo">
        <Hero />
        <Sobre />
        <Servicos />
        <Projetos />
        <Demo />
        <Contato />
      </main>

      <Rodape />
      <AoTopo />
    </>
  );
}
