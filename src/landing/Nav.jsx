import { useEffect, useState } from 'react';

import Icone from './Icone';
import { LINKS, PESSOA } from './conteudo';
import { useRolagem, rolarAte } from './hooks';

/** Menu fixo. No celular vira hambúrguer e abre em coluna. */
export default function Nav({ ativa }) {
  const [aberto, setAberto] = useState(false);
  const rolado = useRolagem(40);

  // Fecha o menu ao voltar para a largura de desktop, senão ele fica preso
  // aberto quando a media query deixa de valer.
  useEffect(() => {
    const largura = window.matchMedia('(min-width: 821px)');
    const aoMudar = (e) => e.matches && setAberto(false);
    largura.addEventListener('change', aoMudar);
    return () => largura.removeEventListener('change', aoMudar);
  }, []);

  // Trava a rolagem do fundo enquanto o menu do celular está aberto.
  useEffect(() => {
    document.body.style.overflow = aberto ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [aberto]);

  const iniciais = PESSOA.nome
    .split(' ')
    .map((p) => p[0])
    .join('');

  /** Rolagem suave feita por nós, para parar na altura certa abaixo do menu. */
  const irPara = (e, id) => {
    e.preventDefault();
    setAberto(false);
    rolarAte(id);
  };

  return (
    <header className={`nav ${rolado ? 'nav--rolado' : ''}`}>
      {/* A barra atravessa a tela, mas o conteúdo dela para no mesmo limite
          das seções — senão o logo fica solto no canto e o menu não conversa
          com o resto da página. */}
      <div className="nav__limite">
        <a href="#inicio" className="marca" onClick={(e) => irPara(e, 'inicio')}>
          <span className="marca__sigla">{iniciais}</span>
          {PESSOA.nome}
        </a>

        <nav
          id="menu-principal"
          className={`nav__links ${aberto ? 'nav__links--aberto' : ''}`}
          aria-label="Menu principal"
        >
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${ativa === l.id ? 'nav__link--ativo' : ''}`}
              aria-current={ativa === l.id ? 'page' : undefined}
              onClick={(e) => irPara(e, l.id)}
            >
              {l.rotulo}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav__hamburguer"
          onClick={() => setAberto((a) => !a)}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
        >
          <Icone nome={aberto ? 'fechar' : 'menu'} tamanho={22} />
        </button>
      </div>
    </header>
  );
}
