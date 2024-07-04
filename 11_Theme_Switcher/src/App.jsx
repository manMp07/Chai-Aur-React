import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContext } from "./contexts/Theme";

function App() {

    const [themeMode, setThemeMode] = useState("light");

    const lightMode = () => {
        setThemeMode('light');
    }
    
    const darkMode = () => {
        setThemeMode('dark');
    }

    useEffect(() => {
        document.querySelector('html').classList.remove('dark', 'light');
        document.querySelector('html').classList.add(themeMode);
    }, [themeMode]);
    
    return (
        <ThemeContext.Provider value={{themeMode, lightMode, darkMode}}>

            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>

        </ThemeContext.Provider>
    )
}

export default App;