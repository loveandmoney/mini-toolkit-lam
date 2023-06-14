import { useState, useEffect } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      `(prefers-color-scheme: dark)`
    );
    setDarkMode(darkModeMediaQuery.matches || false);
    darkModeMediaQuery.addEventListener(`change`, (e) => {
      const darkModeOn = e.matches;
      setDarkMode(darkModeOn);
    });
  }, []);

  return darkMode;
};

export default useDarkMode;
