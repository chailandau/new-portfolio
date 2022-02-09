import Head from "next/head";
import Header from "./Header/Header";

const Layout = ( { children } ) => {
  return (
    <>
      <Head>
        <title>Chai Landau</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {children}
      </main>
      <footer>
         
      </footer>
    </>
  );
};
  
export default Layout;
