//This is the main page

import Head from "next/head";

//Component imports
import Footer from "../components/general/Footer";
import Navbar from "../components/general/Navbar";
import ContainerSearch from "../components/search/ContainerSearch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Git Search | Agustin Rujana</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="overflow-hidden w-full relative">
        <ContainerSearch/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
