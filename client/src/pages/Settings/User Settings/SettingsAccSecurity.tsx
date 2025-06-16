import "@/styles/Settings/SettingsAccSecurity.css";

import InputField from "@/components/common/InputField";

export default function SettingsAccSecurity() {
  return (
    <section className="stgs stgs-acc-sec">
      <h2>Segurança</h2>
      <hr />

      <InputField
        type="email"
        id="email"
        name="email"
        label="E-mail"
        description=""
      />
      <InputField
        type="password"
        id="password"
        name="password"
        label="Senha"
        description="Se você perder o acesso ao seu email, você poderá entrar com a senha."
      />
    </section>
  );
}
