import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-6 min-h-screen ">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5">
        content
      </main>
    </div>
  );
};

export default App;
