import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape">
      <section>
        <ul>
          <li>
            <a href="https://www.facebook.com" target="_blank">
              <img src="/imagens/fb.png" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" target="_blank">
              <img src="/imagens/tw.png" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank">
              <img src="/imagens/ig.png" />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src="/imagens/logo.png" />
      </section>

      <section>
        <p>Desenvolvido por Felipe Arceno</p>
      </section>
    </footer>
  );
};

export default Rodape;
