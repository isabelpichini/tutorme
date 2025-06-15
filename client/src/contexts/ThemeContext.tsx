import { createContext } from "react";
import { type Theme } from "@/types/Theme.ts";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
