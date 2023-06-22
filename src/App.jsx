import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="grid lg:grid-cols-6 grid-cols-6 min-h-screen ">
      <Sidebar className="col-span-6 lg:col-span-1"/>
      <main className="col-span-6 lg:col-span-5 bg-gray-100 p-8">
        <Header />
      </main>
    </div>
  );
};

export default App;
