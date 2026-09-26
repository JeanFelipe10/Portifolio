import { useState } from 'react';

import MiniPainel from './MiniPainel';
import { INDICADORES, PROJETOS } from './conteudo';
import { useContador, useRevelar } from './hooks';

/** Um indicador com o número correndo de zero até o alvo. */
function Indicador({ dado }) {
  const [valor, ref] = useContador(dado.alvo);
  const casas = dado.casas ?? 0;

  return (
    <div ref={ref} className="indicador">
      <p className="indicador__rotulo">{dado.rotulo}</p>
      <p className={`indicador__valor indicador__valor--${dado.cor}`}>
        {dado.prefixo ?? ''}
        {valor.toLocaleString('pt-BR', {
          minimumFractionDigits: casas,
          maximumFractionDigits: casas,
        })}
        {dado.sufixo ?? ''}
      </p>
    </div>
  );
}

/**
 * Demonstração interativa: escolhe o sistema e o painel troca.
 *
 * É o mesmo desenho dos cartões de projeto, só que grande e com os números
 * animando — serve para o visitante brincar em vez de só ler.
 */
export default function Demo() {
  const [atual, setAtual] = useState(PROJETOS[0]);
  const ref = useRevelar();
  const indicadores = INDICADORES[atual.id] ?? [];

  return (
    <section id="demo" className="secao">
      <div ref={ref} className="limite revelar">
        <header className="cabecalho">
          <h2 className="titulo-secao">
            Escolhe um sistema e vê por dentro
          </h2>
          <p className="apoio">
            Painéis desenhados em código, com números de exemplo. Clica num nome para trocar.
          </p>
        </header>

        <div className="demo" role="group" aria-label="Demonstração dos sistemas">
          <div className="demo__abas" role="tablist" aria-label="Sistemas">
            {PROJETOS.map((p) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`aba-${p.id}`}
                aria-selected={atual.id === p.id}
                aria-controls="painel-demo"
                className={`demo__aba ${atual.id === p.id ? 'demo__aba--ativa' : ''}`}
                onClick={() => setAtual(p)}
              >
                <span className="demo__aba-nome">{p.nome}</span>
                <span className="demo__aba-resumo">{p.resumo}</span>
              </button>
            ))}
          </div>

          <div
            className="demo__palco"
            id="painel-demo"
            role="tabpanel"
            aria-labelledby={`aba-${atual.id}`}
          >
            {/* A key força o React a remontar: o painel entra animado e os
                contadores recomeçam do zero a cada troca de sistema. */}
            <div key={atual.id} className="demo__conteudo">
              <div className="demo__tela">
                <MiniPainel tipo={atual.painel} />
              </div>

              <div className="demo__indicadores">
                {indicadores.map((d) => (
                  <Indicador key={`${atual.id}-${d.rotulo}`} dado={d} />
                ))}
              </div>

              <p className="demo__texto">{atual.texto}</p>

              <div className="projeto__stack">
                {atual.stack.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
