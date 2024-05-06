import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { ConfigProvider } from "antd";
import { decimaLightFont, green, grey, yellow } from "../styles/theme";

type LayoutProps = {
  showFooter?: boolean;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ showFooter = true, children }) => {
  const [showBody, setShowBody] = React.useState(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          colorPrimary: green,
          fontFamily: decimaLightFont,
        },
        components: {
          Input: {
            colorPrimary: green,
            colorBorder: grey,
            activeBorderColor: green,
            hoverBorderColor: green,
            colorText: green,
            activeShadow: undefined,
          },
          Button: {
            defaultColor: green,
            defaultBorderColor: grey,
            defaultActiveColor: green,
            defaultActiveBorderColor: green,
            defaultHoverColor: green,
            defaultHoverBorderColor: green,
            fontFamily: "Decima-Regular",
          },
          Timeline: {
            dotBg: green,
            dotBorderWidth: 5,
          },
        },
      }}
    >
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
    </ConfigProvider>
  );
};

export default Layout;
