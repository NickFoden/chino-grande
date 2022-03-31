import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Page = ({ children }: { children: any }) => (
  <>
    <Header />
    <div className="page_container">{children}</div>
    <Footer />
  </>
);

export default Page;
