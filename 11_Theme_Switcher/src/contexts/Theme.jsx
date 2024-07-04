import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "dark",
    lightMode : () => {},
    darkMode : () => {}
}) // As of now, Default values nhi daalenge to bhii chalega

export default function useTheme(){
    return useContext(ThemeContext);
}