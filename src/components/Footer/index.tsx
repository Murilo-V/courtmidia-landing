import { FooterStyle } from "./style";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterStyle>
      <p>Court Mídia &copy; Todos os direitos reservados, 2022.</p>
      <i onClick={scrollToTop} className="bi bi-arrow-up-square-fill"></i>
    </FooterStyle>
  );
};
