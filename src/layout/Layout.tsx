import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="max-w-[1600px] mx-auto">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
