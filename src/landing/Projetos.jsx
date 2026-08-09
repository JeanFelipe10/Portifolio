import MiniPainel from './MiniPainel';
import { PROJETOS } from './conteudo';
import { useLuz, useRevelar } from './hooks';

export default function Projetos() {
  const ref = useRevelar();
  const luz = useLuz();

  return (
    <section id="projetos" className="secao secao--faixa">
      <div ref={ref} className="limite revelar">
        <header className="cabecalho">
          <span className="sobretitulo">Portfólio</span>
          <h2 className="titulo-secao">
            Sistemas que eu <span className="destaque">ajudei a construir</span>
          </h2>
          <p className="apoio">
            Produtos multi-empresa, com papéis de acesso, regra de negócio pesada e gente usando
            todo dia.
          </p>
        </header>

        <div className="grade-projetos" ref={luz}>
          {PROJETOS.map((p, i) => (
            <article key={p.id} className="cartao projeto" style={{ '--atraso': `${i * 70}ms` }}>
              <div className="projeto__painel">
                <MiniPainel tipo={p.painel} />
              </div>

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
              </div>
            </article>
          ))}
        </div>

        <p className="nota">
          Não publico print de sistema real: as telas têm dado de gente. Os painéis acima são
          ilustrações que eu desenhei em código, com números de exemplo.
        </p>
      </div>
    </section>
  );
}
