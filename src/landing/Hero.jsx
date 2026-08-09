import Icone from './Icone';
import { NUMEROS, PAPEIS, PESSOA, REDES } from './conteudo';
import { rolarAte, useContador, useDigitando, useParalaxe } from './hooks';

/** Número do topo, contando de zero até o valor quando entra na tela. */
function Numero({ dado }) {
  const [valor, ref] = useContador(dado.alvo, 1400);

  return (
    <div ref={ref} className="numero">
      <p className="numero__valor">
        {dado.prefixo ?? ''}
        {Math.round(valor)}
        {dado.sufixo ?? ''}
      </p>
      <p className="numero__rotulo">{dado.rotulo}</p>
    </div>
  );
}

export default function Hero() {
  const papel = useDigitando(PAPEIS);
  const palco = useParalaxe();

  const irPara = (e, id) => {
    e.preventDefault();
    rolarAte(id);
  };

  // O nome entra letra por letra. O `aria-label` no h1 garante que o leitor de
  // tela ouça "Jean Felipe" e não as letras soltas.
  const letras = [...PESSOA.nome];

  return (
    <section id="inicio" ref={palco}>
      <div className="grade-fundo" aria-hidden="true" />
      <div className="brilho" aria-hidden="true" />

      <div className="hero limite">
        <div className="hero__texto-bloco">
          <p className="hero__saudacao entra" style={{ '--atraso': '0ms' }}>
            <span className="ponto-vivo" aria-hidden="true" />
            {PESSOA.saudacao}
          </p>
          <h1 className="hero__nome" aria-label={PESSOA.nome}>
            {letras.map((letra, i) => (
              <span
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className="letra"
                aria-hidden="true"
                style={{ '--atraso': `${140 + i * 45}ms` }}
              >
                {letra === ' ' ? ' ' : letra}
              </span>
            ))}
          </h1>

          {/* O texto digitado troca sozinho; leitores de tela recebem a versão
              estável pelo aria-label e ignoram o vaivém das letras. */}
          <p
            className="hero__papel entra"
            style={{ '--atraso': '220ms' }}
            aria-label={`Desenvolvedor ${PAPEIS[0]}`}
          >
            <span aria-hidden="true">
              Desenvolvedor <span className="destaque">{papel}</span>
              <span className="cursor" />
            </span>
          </p>

          <p className="hero__resumo entra" style={{ '--atraso': '330ms' }}>
            {PESSOA.resumo}
          </p>

          <div className="hero__acoes entra" style={{ '--atraso': '440ms' }}>
            <a
              href="#projetos"
              className="btn btn--principal"
              onClick={(e) => irPara(e, 'projetos')}
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="btn btn--secundario"
              onClick={(e) => irPara(e, 'contato')}
            >
              Entrar em contato
            </a>
          </div>

          <div className="hero__redes entra" style={{ '--atraso': '550ms' }}>
            {REDES.map((r) => (
              <a
                key={r.nome}
                href={r.url}
                className="rede"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${r.nome} de ${PESSOA.nome}`}
                title={r.nome}
              >
                <Icone nome={r.icone} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero__foto">
          <img
            src="./image/fotodeinicio2.jpeg"
            alt={`${PESSOA.nome}, desenvolvedor front-end`}
            width="360"
            height="360"
            fetchPriority="high"
          />
        </div>
      </div>

      <a
        href="#sobre"
        className="descer"
        onClick={(e) => irPara(e, 'sobre')}
        aria-label="Ir para a seção Sobre"
      >
        <span className="descer__mouse" aria-hidden="true">
          <span className="descer__roda" />
        </span>
        <span className="descer__texto">role para ver</span>
      </a>

      <div className="numeros limite">
        {NUMEROS.map((n) => (
          <Numero key={n.rotulo} dado={n} />
        ))}
      </div>
    </section>
  );
}
