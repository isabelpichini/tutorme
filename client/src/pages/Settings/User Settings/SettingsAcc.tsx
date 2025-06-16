import InputField from "@/components/common/InputField";
import { InlineIcon } from "@iconify/react";
import { useState } from "react";
import type { UserDTO } from "@/types/UserDTO";

import "@/styles/Settings/SettingsAcc.css";

export default function SettingsAcc() {
  const [user, setUser] = useState<UserDTO>({
    id: "",
    name: "Current Name",
    email: "",
    cpf: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    state: "",
    dateCreated: new Date(),
  });

  // QUANDO DER O FETCH NOS DADOS, BOTA NO TRY QUE setUser(res.data); 
  // PRA SUBSTITUIR OS VALORES PADRÃO QUE EU COLOQUEI AQUI EM CIMA

  const handleFieldChange = (field: keyof UserDTO, value: string) => {
    setUser((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <section className="stgs stgs-acc">
      <h2>Conta</h2>
      <hr />
      <div className="stgs-row">
        <div className="user-pic">
          <InlineIcon icon="ic:round-person" className="user-pic-ic" />
        </div>
        <InputField
          type="text"
          id="name"
          name="name"
          label="Nome"
          customValue={user.name}
          customClass="stgs-name"
          changeFn={handleFieldChange}
        />
      </div>
    </section>
  );
}
