import "./App.css";
import Home from "./pages/home";
import ProductsPreview from "./pages/products-preview";

function App() {
  return (
    <div className="bg-foreground text-background">
      <Home />
      <ProductsPreview />
    </div>
  );
}

export default App;
