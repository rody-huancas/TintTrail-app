import { Footer, Header } from "@components/layout";
import { Outlet } from "react-router-dom";

const LayoutApp = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl 2xl:max-w-[1450px] w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;
