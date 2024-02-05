import "./layout.css";
import * as React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Seo from "./seo";

type LayoutProps = {
  title: string;
  children: React.ReactNode;
  showFooter?: boolean;
};

const Layout = ({ title, children, showFooter = true }: LayoutProps) => {
  const [showBody, setShowBody] = React.useState(true);

  return (
    <>
      <Seo title={title} />
      <Navbar
        onShowMobileNavigation={(showMenu) => {
          // on cache le body quand le menu mobile
          // s'affiche en pleine page pour éviter d'avoir
          // un scroll
          setShowBody(!showMenu);
        }}
      />
      {showBody && (
        <>
          <main>{children}</main>
          {showFooter && <Footer />}
        </>
      )}
    </>
  );
};

export default Layout;
