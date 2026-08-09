import Icone from './Icone';
import { EMPRESA, PESSOA, REDES } from './conteudo';

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape__linha">
        <div>
          <p>
            © {new Date().getFullYear()} {PESSOA.nome} — {PESSOA.papel}
          </p>
          <p className="rodape__creditos">
            Sistemas construídos na{' '}
            <a
              className="rodape__link"
              href={EMPRESA.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {EMPRESA.nome}
            </a>
          </p>
        </div>

        <div className="rodape__redes">
          {REDES.filter((r) => r.rodape).map((r) => (
            <a
              key={r.nome}
              href={r.url}
              className="rede"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={r.nome}
            >
              <Icone nome={r.icone} tamanho={17} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
