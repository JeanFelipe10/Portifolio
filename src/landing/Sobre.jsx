import { PESSOA, SOBRE } from './conteudo';
import { useRevelar } from './hooks';

export default function Sobre() {
  const ref = useRevelar();

  return (
    <section id="sobre" className="secao secao--faixa">
      <div ref={ref} className="sobre limite revelar">
        <div className="sobre__foto">
          <img
            src="./image/jean.jpeg"
            alt={PESSOA.nome}
            width="897"
            height="1120"
            loading="lazy"
          />
        </div>

        <div>
          <span className="sobretitulo">Sobre mim</span>
          <h2 className="sobre__titulo">{SOBRE.titulo}</h2>
          {SOBRE.paragrafos.map((p) => (
            <p key={p.slice(0, 24)} className="sobre__texto">
              {p}
            </p>
          ))}

          <div className="grupos">
            {SOBRE.grupos.map((g) => (
              <div key={g.titulo} className="grupo">
                <h3 className="grupo__titulo">{g.titulo}</h3>
                <div className="etiquetas">
                  {g.itens.map((i) => (
                    <span key={i} className="etiqueta">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
