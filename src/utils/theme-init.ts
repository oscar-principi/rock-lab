import { applyTheme, getPreferredTheme } from "./theme";

// run immediately to avoid flash
applyTheme();

// also set inline background color so there isn't a white flash
const theme = getPreferredTheme();
document.documentElement.style.backgroundColor = theme === "dark" ? "#000" : "#fff";
