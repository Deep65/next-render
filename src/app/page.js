import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Main from "@/components/Main";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
