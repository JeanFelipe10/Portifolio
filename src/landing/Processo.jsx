import { PROCESSO } from './conteudo';
import { useRevelar } from './hooks';

/** Como o trabalho anda, do primeiro papo até o site no ar. */
export default function Processo() {
  const ref = useRevelar();

  return (
    <div ref={ref} className="revelar" style={{ marginTop: 72 }}>
      <header className="cabecalho">
        <span className="sobretitulo">Como eu trabalho</span>
        <h2 className="titulo-secao" style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.1rem)' }}>
          Do primeiro papo ao <span className="destaque">site no ar</span>
        </h2>
      </header>

      <ol className="passos">
        {PROCESSO.map((p, i) => (
          <li key={p.numero} className="passo" style={{ '--atraso': `${i * 90}ms` }}>
            <span className="passo__numero">{p.numero}</span>
            <h3 className="passo__titulo">{p.titulo}</h3>
            <p className="passo__texto">{p.texto}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
