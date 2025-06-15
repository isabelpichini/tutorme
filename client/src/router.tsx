import { Routes, Route } from "react-router-dom";
import NotFound from "@/pages/NotFound/index.tsx";
import DesignSystem from "@/pages/DesignSystem/index.tsx";
import Home from "@/pages/Home/index.tsx";
import Profile from "@/pages/Profile/index.tsx";
import Settings from "@/pages/Settings/index.tsx";
import StudentLogin from "@/pages/StudentLogin/index.tsx";
import TutorLogin from "@/pages/TutorLogin/index.tsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/design-system" element={<DesignSystem />} />
      <Route path="/" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/student-login" element={<StudentLogin />} />
      <Route path="/tutor-login" element={<TutorLogin />} />
    </Routes>
  );
}
