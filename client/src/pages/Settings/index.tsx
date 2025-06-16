import "@/styles/Settings/Settings.css";

import GlassBg from "@/components/layout/GlassBg";
import SettingsAcc from "./User Settings/SettingsAcc";
import SettingsAccSecurity from "./User Settings/SettingsAccSecurity";
import SettingsAccSupport from "./User Settings/SettingsAccSupport";

export default function Settings() {
  return (
    <>
      <div className="bg-pane">
        <SettingsAcc />
        <SettingsAccSecurity />
        <SettingsAccSupport />
      </div>
      <GlassBg />
    </>
  );
}
