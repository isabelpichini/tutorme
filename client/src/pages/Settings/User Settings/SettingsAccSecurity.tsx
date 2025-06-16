import "@/styles/Settings/SettingsAccSecurity.css";

import InputField from "@/components/common/InputField";
import { useState } from "react";
import { type UserDTO } from "@/types/UserDTO";

export default function SettingsAccSecurity() {
  const [user, setUser] = useState<UserDTO>({
    id: "",
    nome: "Current Name",
    email: "",
    cpf: "",
    senha: "",
    confirmarSenha: "",
    telefone: "",
    cidade: "",
    estado: "",
    criadoEm: new Date(),
  });

  const handleFieldChange = (field: keyof UserDTO, value: string) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="stgs stgs-acc-sec">
      <h2>Segurança</h2>
      <hr />

      <InputField
        type="email"
        id="email"
        name="email"
        customValue={user.email}
        label="E-mail"
        description=""
        changeFn={handleFieldChange}
        />
      <InputField
        type="password"
        id="senha"
        name="senha"
        label="Senha"
        description="Se você perder o acesso ao seu email, você poderá entrar com a senha."
        changeFn={handleFieldChange}
      />
    </section>
  );
}
