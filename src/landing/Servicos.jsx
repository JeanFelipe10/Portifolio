import Icone from './Icone';
import Processo from './Processo';
import { SERVICOS } from './conteudo';
import { useLuz, useRevelar } from './hooks';

export default function Servicos() {
  const ref = useRevelar();
  const luz = useLuz();

  return (
    <section id="servicos" className="secao">
      <div ref={ref} className="limite revelar">
        <header className="cabecalho">
          <span className="sobretitulo">O que eu faço</span>
          <h2 className="titulo-secao">
            Meus <span className="destaque">serviços</span>
          </h2>
          <p className="apoio">
            Do primeiro rascunho da tela até o site no ar, medido e funcionando no celular.
          </p>
        </header>

        <div className="grade-3" ref={luz}>
          {SERVICOS.map((s) => (
            <article key={s.titulo} className="cartao">
              <div className="servico__icone">
                <Icone nome={s.icone} tamanho={22} />
              </div>
              <h3 className="servico__titulo">{s.titulo}</h3>
              <p className="servico__texto">{s.texto}</p>
              <ul className="lista">
                {s.itens.map((i) => (
                  <li key={i}>
                    <Icone nome="check" tamanho={14} />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div className="limite">
        <Processo />
      </div>
    </section>
  );
}
