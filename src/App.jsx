import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";

const App = () => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-6 min-h-screen ">
      <Sidebar className="col-span-6 lg:col-span-1" />

      <main className="col-span-6 lg:col-span-5 bg-gray-100 p-8 overflow-y-scroll">
        <Header />
        <Section1 />
        <Section2 />
      </main>
    </div>
  );
};

export default App;
