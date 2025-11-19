import { ThemeContext } from "./ThemeContext";
import { UserContext } from "./UserContext";

export default function GlobalProviders({ children }) {
  const theme = "dark";

  const globalUser = {
    name: "Pawan",
    role: "Admin",
  };

  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={globalUser}>{children}</UserContext.Provider>
    </ThemeContext.Provider>
  );
}
