import { PlanCard } from "../PlanCard";
import { AdvantagesStyle, MainStyle, PricesStyle } from "./style";

export const Main = () => {
  return (
    <>
      <MainStyle>
        <h1>
          Atinja seu público-alvo com <br /> a Court Mídia.
        </h1>
        <div>
          <a
            href="https://api.whatsapp.com/send?phone=556291895496"
            target="_blank"
            rel="noreferrer"
          >
            <button
              style={{ marginTop: "2rem" }}
              className="dark-button"
              type="button"
            >
              QUERO CONHECER
            </button>
          </a>
        </div>
      </MainStyle>
      <AdvantagesStyle>
        <h2>Vantagens de anunciar com a gente</h2>
        <section>
          <div>
            <i className="bi bi-graph-up-arrow"></i>
            Alto impacto
          </div>

          <div>
            <i className="bi bi-coin"></i>
            Baixo custo
          </div>

          <div>
            <i className="bi bi-eye-fill"></i>
            Visibilidade
          </div>

          <div>
            <i className="bi bi-arrow-repeat"></i>
            Flexibilidade
          </div>

          <div>
            <i className="bi bi-soundwave"></i>
            Frequência
          </div>

          <div>
            <i className="bi bi-geo-alt-fill"></i>
            Regionalização
          </div>
        </section>
        <a
          href="https://api.whatsapp.com/send?phone=556291895496"
          target="_blank"
          rel="noreferrer"
        >
          <button
            style={{ marginBottom: "3rem" }}
            className="light-button"
            type="button"
          >
            ANUNCIAR AGORA
          </button>
        </a>
      </AdvantagesStyle>
      <PricesStyle>
        <h3>Confira nossos planos</h3>
        <div>
          <PlanCard
            number={3}
            months={3}
            priceUnit="R$ 250,00"
            priceNetwork="R$ 150,00"
            metal="bronze"
          />
          <PlanCard
            number={2}
            months={6}
            priceUnit="R$ 200,00"
            priceNetwork="R$ 129,90"
            metal="silver"
          />
          <PlanCard
            number={1}
            months={12}
            priceUnit="R$ 157,00"
            priceNetwork="R$ 104,90"
            metal="gold"
          />
        </div>
      </PricesStyle>
    </>
  );
};
