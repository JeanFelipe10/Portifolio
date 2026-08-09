import Icone from './Icone';
import { CONTATOS, PESSOA } from './conteudo';
import { useLuz, useRevelar } from './hooks';

export default function Contato() {
  const ref = useRevelar();
  const luz = useLuz();

  return (
    <section id="contato" className="secao secao--faixa">
      <div ref={ref} className="limite revelar">
        <header className="cabecalho">
          <span className="sobretitulo">Contato</span>
          <h2 className="titulo-secao">
            Vamos <span className="destaque">conversar</span>
          </h2>
          <p className="apoio">
            Cada canal serve para uma coisa. Escolhe o que combina com o seu assunto.
          </p>
        </header>

        <div className="grade-3" ref={luz}>
          {CONTATOS.map((c) => (
            <article key={c.titulo} className="cartao contato__box">
              <div className="contato__icone">
                <Icone nome={c.icone} tamanho={24} />
              </div>
              <h3 className="contato__titulo">{c.titulo}</h3>
              <p className="contato__texto">{c.texto}</p>
              <a
                href={c.url}
                className="btn btn--secundario"
                target={c.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                {c.rotulo}
              </a>
            </article>
          ))}
        </div>

        {/* Bloco de disponibilidade — informação, não mais um botão repetido. */}
        <div className="chamada">
          <span className="sobretitulo">
            <span className="ponto-vivo" aria-hidden="true" />
            Disponível para novos projetos
          </span>
          <h3 className="titulo-secao" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>
            Trabalho como PJ, em <span className="destaque">projeto fechado ou por período</span>
          </h3>

          <ul className="fatos">
            <li>
              <Icone nome="check" tamanho={15} />
              Baseado em {PESSOA.cidade}, trabalho remoto sem susto
            </li>
            <li>
              <Icone nome="check" tamanho={15} />
              Resposta em até 1 dia útil
            </li>
            <li>
              <Icone nome="check" tamanho={15} />
              Código comentado e documentado para quem pegar depois
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
