import { PlanCardStyle } from "./style";

interface PlanCardProps {
  number: 3 | 2 | 1;
  priceNetwork: string;
  priceUnit: string;
  months: 3 | 6 | 12;
  metal: "bronze" | "silver" | "gold";
}

const metalNames = {
  bronze: "Bronze",
  silver: "Prata",
  gold: "Ouro",
};

export const PlanCard = ({
  number,
  priceNetwork,
  priceUnit,
  months,
  metal,
}: PlanCardProps) => {
  return (
    <PlanCardStyle number={number}>
      <i className={`bi bi-${number}-circle`}></i>
      <p style={{ fontWeight: 700, marginBottom: "2rem" }}>
        {metalNames[metal]}
      </p>
      <p>Validade do anúncio: {months} meses</p>
      <p>Ponto único: {priceUnit}/mês</p>
      <p>Pontos em toda rede: {priceNetwork}/mês</p>
      <a
        href="https://api.whatsapp.com/send?phone=556291895496"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className={number === 1 ? "light-button" : "dark-button"}
          type="button"
        >
          QUERO ESTE
        </button>
      </a>
    </PlanCardStyle>
  );
};
