// import axios from "axios";
// DESCOMENTA ESSE IMPORT PRA FAZER AS LOGICAS 

import Btn from "@/components/common/Button";
import "@/styles/Settings/SettingsAccSupport.css";

export default function SettingsAccSupport() {
  const deleteAcc = () => {
    // COLOCA A LÓGICA DE EXCLUIR DO BANCO AQUI
  };

  return (
    <section className="stgs stgs-acc-support">
      <h2>Suporte</h2>
      <hr />
      <div className="stgs-row justify">
        <div className="stgs-col">
          <p className="stgs-config txt-danger">Excluir conta</p>
          <p className="stgs-detail">
            Isso deletará a sua conta do TutorMe permanentemente. Pode levar
            alguns dias.
          </p>
        </div>
        <Btn
          variant="subtle"
          icon="ic:round-arrow-forward-ios"
          clickFn={deleteAcc}
        />
      </div>
    </section>
  );
}
