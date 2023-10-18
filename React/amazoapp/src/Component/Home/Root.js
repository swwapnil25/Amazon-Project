import React, { useEffect } from "react";
import { useDarkMode } from "./DarkModeContext";

function Root() {
  const { isDarkMode } = useDarkMode();

  useEffect(() => {
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.style.backgroundColor = isDarkMode ? "rgb(37 36 36)" : "#e0d7d7";
    }
  }, [isDarkMode]);

  return null; // You don't need to render anything from this component
}

export default Root;
