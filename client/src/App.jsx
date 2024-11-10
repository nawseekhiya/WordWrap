import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <div className="text-center">
        <Navbar />
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to WordWrap!
        </h1>
        <p className="mt-4 text-gray-600">Our Tailwind CSS is now set up!</p>
      </div>
    </>
  );
}

export default App;
