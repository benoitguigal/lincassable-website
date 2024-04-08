import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

type LayoutProps = {
  showFooter?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ showFooter = true, children }) => {
  const [showBody, setShowBody] = React.useState(true);

  return (
    <>
      <Navbar
        onShowMobileNavigation={(showMenu) => {
          // on cache le body quand le menu mobile
          // s'affiche en pleine page pour éviter d'avoir
          // un scroll
          setShowBody(!showMenu);
        }}
      />
      {showBody && (
        <div className="flex flex-col space-between min-h-screen">
          <main className="grow">{children}</main>
          {showFooter && <Footer />}
        </div>
      )}
    </>
  );
};

export default Layout;
