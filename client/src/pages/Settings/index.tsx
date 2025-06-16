import "@/styles/Settings/Settings.css";

import SettingsAcc from "./User Settings/SettingsAcc";
import SettingsAccSecurity from "./User Settings/SettingsAccSecurity";
import SettingsAccSupport from "./User Settings/SettingsAccSupport";
import Btn from "@/components/common/Button";

export default function Settings() {
  return (
    <>
      <SettingsAcc />
      <SettingsAccSecurity />
      <SettingsAccSupport />
      <Btn
        variant="primary"
        content="SALVAR"
        clickFn={async () => {
          const result = await patchUserInfo({ name });
          if (result.success) {
            //show ok
          } else {
            console.error(result.message);
          }
        }}
      />
    </>
  );
}
