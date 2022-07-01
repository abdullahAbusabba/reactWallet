import {
  Loader,
  Navbar,
  Footer,
  Services,
  Transactions,
  Welcome,
  EthereumCard
} from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Transactions />
      <Footer />
      {/* <Services />
      <Transactions />
      <Footer /> */}
    </div>
  );
};

export default App;
