import Navbar from './Navbar';
import Footer from './Footer';
import SocialButtons from './SocialButtons';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <SocialButtons />
      <main className="flex-grow pt-8">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;