import { useEffect, useRef, useState } from 'react';

/** Altura do menu fixo — a âncora precisa parar abaixo dele. */
const ALTURA_MENU = 88;

/** Verdadeiro depois que a página passa de `limite` pixels de rolagem. */
export function useRolagem(limite = 40) {
  const [passou, setPassou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setPassou(window.scrollY > limite);
    aoRolar();
    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, [limite]);

  return passou;
}

/**
 * Rolagem animada por nós, quadro a quadro.
 *
 * Não usamos o `behavior: 'smooth'` do navegador porque cada um implementa uma
 * duração e uma curva diferentes — e alguns simplesmente ignoram quando a
 * viewport herda o overflow do body. Animando na mão o movimento fica igual em
 * todo lugar: acelera, corre e freia no fim.
 */
let animacaoEmCurso = 0;

function animarAte(destino, duracao = 900) {
  const inicio = window.scrollY;

  // Trava o destino no fim rolável: pedir mais do que existe faria a animação
  // correr até um ponto onde a página nunca chega, e ela terminaria de repente.
  const limite = document.documentElement.scrollHeight - window.innerHeight;
  const alvo = Math.max(0, Math.min(destino, limite));
  const distancia = alvo - inicio;
  if (Math.abs(distancia) < 2) return;

  // Cancela uma animação anterior: dois cliques seguidos brigariam pelo scroll.
  cancelAnimationFrame(animacaoEmCurso);

  // Trecho curto não pode levar o mesmo tempo que a página inteira.
  const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tempo = menosMovimento
    ? 300
    : Math.min(duracao, Math.max(450, Math.abs(distancia) * 0.75));

  const partida = performance.now();

  // Aceleração e desaceleração simétricas.
  const curva = (t) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

  const passo = (agora) => {
    const t = Math.min(1, (agora - partida) / tempo);
    window.scrollTo(0, inicio + distancia * curva(t));
    if (t < 1) animacaoEmCurso = requestAnimationFrame(passo);
  };

  animacaoEmCurso = requestAnimationFrame(passo);
}

/** Rola até uma seção, parando abaixo do menu fixo. */
export function rolarAte(id) {
  const alvo = document.getElementById(id);
  if (!alvo) return;

  const topo = alvo.getBoundingClientRect().top + window.scrollY - ALTURA_MENU;
  animarAte(Math.max(0, topo));
}

/** Volta ao começo da página com a mesma curva dos links do menu. */
export function rolarAoTopo() {
  animarAte(0);
}

/**
 * Paralaxe pelo mouse: devolve um ref para o container e escreve a posição do
 * ponteiro em duas variáveis CSS (`--px` e `--py`, de -1 a 1).
 *
 * Quem se move é o CSS, não o React: guardar a posição em estado dispararia
 * uma renderização a cada pixel do mouse. E só liga em ponteiro fino — no
 * celular não existe mouse, e o efeito só gastaria bateria.
 */
export function useParalaxe() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const temMouse = window.matchMedia('(pointer: fine)').matches;
    const menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!temMouse || menosMovimento) return undefined;

    let quadro = 0;

    const aoMover = (e) => {
      if (quadro) return;
      quadro = requestAnimationFrame(() => {
        quadro = 0;
        const { width, height, left, top } = el.getBoundingClientRect();
        el.style.setProperty('--px', ((e.clientX - left) / width - 0.5).toFixed(3));
        el.style.setProperty('--py', ((e.clientY - top) / height - 0.5).toFixed(3));
      });
    };

    const aoSair = () => {
      el.style.setProperty('--px', '0');
      el.style.setProperty('--py', '0');
    };

    el.addEventListener('mousemove', aoMover);
    el.addEventListener('mouseleave', aoSair);
    return () => {
      cancelAnimationFrame(quadro);
      el.removeEventListener('mousemove', aoMover);
      el.removeEventListener('mouseleave', aoSair);
    };
  }, []);

  return ref;
}

/**
 * Luz que segue o cursor dentro dos cartões.
 *
 * Um único ouvinte no contêiner atende todos os cartões de dentro — em vez de
 * um por cartão, que seriam seis ouvintes brigando pelo mesmo movimento. A
 * posição vai para `--lx`/`--ly` do cartão sob o cursor, e o CSS desenha o
 * clarão. Só em ponteiro fino: no celular não há cursor para seguir.
 */
export function useLuz(seletorDoCartao = '.cartao') {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return undefined;
    if (!window.matchMedia('(pointer: fine)').matches) return undefined;

    let quadro = 0;

    const aoMover = (e) => {
      const cartao = e.target.closest(seletorDoCartao);
      if (!cartao || !container.contains(cartao)) return;
      if (quadro) return;

      quadro = requestAnimationFrame(() => {
        quadro = 0;
        const caixa = cartao.getBoundingClientRect();
        cartao.style.setProperty('--lx', `${e.clientX - caixa.left}px`);
        cartao.style.setProperty('--ly', `${e.clientY - caixa.top}px`);
      });
    };

    container.addEventListener('mousemove', aoMover);
    return () => {
      cancelAnimationFrame(quadro);
      container.removeEventListener('mousemove', aoMover);
    };
  }, [seletorDoCartao]);

  return ref;
}

/**
 * Efeito de máquina de escrever: digita uma palavra, segura, apaga e passa
 * para a próxima, em laço.
 *
 * O tempo por letra é diferente ao digitar (75ms) e ao apagar (38ms) de
 * propósito — apagar rápido é o que faz parecer alguém corrigindo, e não um
 * relógio.
 */
export function useDigitando(palavras, { escrita = 75, apagada = 38, pausa = 1500 } = {}) {
  const [indice, setIndice] = useState(0);
  const [texto, setTexto] = useState('');
  const [apagando, setApagando] = useState(false);

  useEffect(() => {
    const palavra = palavras[indice % palavras.length];

    // Terminou de escrever: segura um instante antes de começar a apagar.
    if (!apagando && texto === palavra) {
      const t = setTimeout(() => setApagando(true), pausa);
      return () => clearTimeout(t);
    }

    // Terminou de apagar: vai para a próxima palavra.
    if (apagando && texto === '') {
      setApagando(false);
      setIndice((i) => (i + 1) % palavras.length);
      return undefined;
    }

    const t = setTimeout(
      () => setTexto(apagando ? palavra.slice(0, texto.length - 1) : palavra.slice(0, texto.length + 1)),
      apagando ? apagada : escrita,
    );
    return () => clearTimeout(t);
  }, [texto, apagando, indice, palavras, escrita, apagada, pausa]);

  return texto;
}

/**
 * Chama `aplicar(fracao)` com o quanto da página já foi rolado, de 0 a 1.
 *
 * Entrega o número em vez de guardar em estado de propósito: quem recebe
 * escreve direto no elemento. Guardar no estado do React faria a árvore
 * re-renderizar a cada quadro de rolagem.
 */
export function useProgresso(aplicar) {
  useEffect(() => {
    let agendado = false;

    const medir = () => {
      agendado = false;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      aplicar(total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0);
    };

    // No máximo uma medição por quadro.
    const aoRolar = () => {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(medir);
    };

    medir();
    window.addEventListener('scroll', aoRolar, { passive: true });
    window.addEventListener('resize', aoRolar);
    return () => {
      window.removeEventListener('scroll', aoRolar);
      window.removeEventListener('resize', aoRolar);
    };
  }, [aplicar]);
}

/**
 * Id da seção visível no momento, para destacar o item do menu.
 *
 * Usa IntersectionObserver em vez de calcular offset no evento de scroll: o
 * cálculo manual dispara a cada pixel e força reflow, o observer só avisa
 * quando a seção realmente entra ou sai.
 */
export function useSecaoAtiva(ids) {
  const [ativa, setAtiva] = useState(ids[0]);

  useEffect(() => {
    const secoes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!secoes.length) return undefined;

    const observador = new IntersectionObserver(
      (entradas) => {
        const visivel = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visivel) setAtiva(visivel.target.id);
      },
      // A faixa central da tela decide quem está "ativa".
      { rootMargin: '-45% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    secoes.forEach((s) => observador.observe(s));
    return () => observador.disconnect();
  }, [ids]);

  return ativa;
}

/** Adiciona a classe de revelação quando o elemento entra na tela. */
export function useRevelar() {
  const ref = useRef(null);

  useEffect(() => {
    const alvo = ref.current;
    if (!alvo) return undefined;

    // Sem animação para quem pediu menos movimento no sistema.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      alvo.classList.add('revelar--visivel');
      return undefined;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          alvo.classList.add('revelar--visivel');
          observador.disconnect();
        }
      },
      { threshold: 0.12 },
    );

    observador.observe(alvo);
    return () => observador.disconnect();
  }, []);

  return ref;
}

/**
 * Conta de zero até `alvo` quando o elemento entra na tela.
 *
 * Usa requestAnimationFrame com curva de desaceleração: o número corre rápido
 * no começo e freia no fim, que é o que faz parecer vivo em vez de robótico.
 */
export function useContador(alvo, duracao = 1200) {
  const [valor, setValor] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValor(alvo);
      return undefined;
    }

    let quadro;
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        observador.disconnect();

        const inicio = performance.now();
        const passo = (agora) => {
          const t = Math.min(1, (agora - inicio) / duracao);
          const suave = 1 - (1 - t) ** 3;
          setValor(alvo * suave);
          if (t < 1) quadro = requestAnimationFrame(passo);
        };
        quadro = requestAnimationFrame(passo);
      },
      { threshold: 0.4 },
    );

    observador.observe(el);
    return () => {
      observador.disconnect();
      cancelAnimationFrame(quadro);
    };
  }, [alvo, duracao]);

  return [valor, ref];
}
