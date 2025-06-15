import GlassBg from "@/components/layout/GlassBg";

export default function StudentLogin() {
  return (
    <>
      <div className="login-illustration">
      </div>
      <div className="layout">
        <header>
          <h2>Comece sua jornada</h2>
          <h1>Entre na sua conta.</h1>
          <p>
            Ainda não possui conta? <a href="">Registre-se.</a>
          </p>
        </header>
        <form action="">
          <div className="form-group">
            <label htmlFor="email"> E-mail: </label>
            <div className="input">
              <input type="email" id="email" name="email" required />
              <img src="" alt="" className="input-icon" aria-hidden="true" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password"> Senha: </label>
            <div className="input">
              <input type="password" id="password" name="password" required />
              <img src="" alt="" className="input-icon" aria-hidden="true" />
            </div>
          </div>

          <button type="submit">Entrar</button>

          <p>
            Clicando em ‘Entrar’, você confirma que leu e concorda com os nossos{" "}
            <a href="">Termos de Uso</a> e<a>Política de Privacidade</a>.
            </p>
        </form>
      </div>
      <GlassBg />
    </>
  );
}
