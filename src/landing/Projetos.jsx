import Icone from './Icone';
import { DESTAQUE, PROJETOS } from './conteudo';
import { useLuz, useRevelar } from './hooks';

export default function Projetos() {
  const ref = useRevelar();
  const luz = useLuz();

  return (
    <section id="projetos" className="secao secao--faixa">
      <div ref={ref} className="limite revelar">
        <header className="cabecalho">
          <h2 className="titulo-secao">
            Sistemas que eu ajudei a construir
          </h2>
          <p className="apoio">
            Produtos multi-empresa, com papéis de acesso, regra de negócio pesada e gente usando
            todo dia.
          </p>
        </header>

        <article className="destaque-proj">
          <a className="destaque-proj__imagem" href={DESTAQUE.url} target="_blank" rel="noopener noreferrer">
            <img src={DESTAQUE.imagem} alt="Abertura da página JZ Tech IA, com o logo formado por partículas" width="1200" height="630" loading="lazy" />
          </a>
          <div className="destaque-proj__corpo">
            <span className="destaque-proj__selo"><span className="ponto-vivo" aria-hidden="true" />No ar · projeto mais recente</span>
            <h3 className="projeto__nome">{DESTAQUE.nome}</h3>
            <p className="projeto__resumo">{DESTAQUE.resumo}</p>
            <p className="projeto__texto">{DESTAQUE.texto}</p>
            <p className="projeto__papel"><strong>Minha parte:</strong> {DESTAQUE.papel}</p>
            <div className="projeto__stack">{DESTAQUE.stack.map((t) => <span key={t}>{t}</span>)}</div>
            <a className="btn btn--principal destaque-proj__botao" href={DESTAQUE.url} target="_blank" rel="noopener noreferrer">
              Ver no ar <Icone nome="externo" tamanho={16} />
            </a>
          </div>
        </article>

        <div className="grade-projetos" ref={luz}>
          {PROJETOS.map((p, i) => (
            <article key={p.id} className="cartao projeto" style={{ '--atraso': `${i * 70}ms` }}>

              <div className="projeto__corpo">
                <div className="projeto__topo">
                  <h3 className="projeto__nome">{p.nome}</h3>
                </div>
                <p className="projeto__resumo">{p.resumo}</p>
                <p className="projeto__texto">{p.texto}</p>

                <p className="projeto__papel">
                  <strong>Minha parte:</strong> {p.papel}
                </p>

                <div className="projeto__stack">
                  {p.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>

                {p.url && (
                  <a className="projeto__link" href={p.url} target="_blank" rel="noopener noreferrer">
                    Ver página do produto <Icone nome="externo" tamanho={14} />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
