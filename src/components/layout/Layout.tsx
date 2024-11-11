import Footer from "../Common/Footer";
import Header from "../Common/Header";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

export default Layout;
