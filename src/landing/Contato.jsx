import Icone from './Icone';
import { CONTATOS } from './conteudo';
import { useRevelar } from './hooks';

/** Um fechamento só: o WhatsApp em destaque, e-mail e LinkedIn como alternativas. */
export default function Contato() {
  const ref = useRevelar();
  const zap = CONTATOS.find((c) => c.icone === 'whatsapp');
  const outros = CONTATOS.filter((c) => c.icone !== 'whatsapp');

  return (
    <section id="contato" className="secao secao--faixa">
      <div ref={ref} className="limite revelar">
        <div className="fechamento">
          <p className="fechamento__status">
            <span className="ponto-vivo" aria-hidden="true" />
            Disponível para novos projetos
          </p>
          <h2 className="titulo-secao">Vamos conversar sobre o seu projeto.</h2>

          <a className="btn btn--principal fechamento__zap" href={zap.url} target="_blank" rel="noopener noreferrer">
            <Icone nome="whatsapp" tamanho={20} />
            Chamar no WhatsApp
          </a>

          <div className="fechamento__outros">
            {outros.map((c) => (
              <a
                key={c.titulo}
                href={c.url}
                target={c.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
              >
                <Icone nome={c.icone} tamanho={16} />
                {c.detalhe}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
