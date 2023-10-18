import { useEffect, useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }

    }, [theme])


    const handleThemeSwith = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }



    return (
        <div onClick={handleThemeSwith} className="h-screen bg-white dark:bg-black">
            <button className="btn btn-outline">Dark</button>
        </div>
    );
};

export default DarkMode;