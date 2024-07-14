import { GlobalStyle } from "./styles/GlobalStyle";
import PricingSection from "./sections/PricingSection";
import { ColorContextProvider } from "./context/ColorContext";

function App() {
  return (
    <>
      <GlobalStyle />
      <ColorContextProvider>
        <PricingSection />
      </ColorContextProvider>
    </>
  );
}

export default App;
