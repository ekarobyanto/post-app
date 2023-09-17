import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/utils/theme";
import Navigation from "./src/navigation";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}
