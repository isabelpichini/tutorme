import { InlineIcon } from "@iconify/react";

import "@/styles/Settings/SettingsAcc.css";

export default function SettingsAcc() {

  return (
    <section className="stgs stgs-acc">
      <h2>Conta</h2>
      <hr />
      <div className="stgs-row">
        <div className="user-pic">
          <InlineIcon icon="ic:round-person" className="user-pic-ic" />
        </div>
        <h3>{}</h3>
      </div>
    </section>
  );
}
