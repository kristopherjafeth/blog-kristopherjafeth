import "@/styles/globals.css";
import { getAllFilesMetadata } from "@/lib/mdx";
import React from "react";
import Header from "@/components/Header/Header";

//import Styles
import '@/components/Header/Header.css'
import '@/components/Home/Home.css'
import '@/components/Home/About.css';
import '@/components/Home/Skills/Skills.css';
import '@/components/Services/Services.css';
import "@/components/Blog/Blog.css";
import "@/components/Footer/Footer.css";
import '@/components/Home/Works/Works.css';


import Head from 'next/head';
import Footer from "@/components/Footer/Footer";





export default function App({ Component, pageProps }) {
 
  return (
    <div>
      <Head>
           <title>Kristopher Jafeth | Full Stack Web Developer ✅</title>
           <meta name="description" content="I am creative web developer, Im very passionate and dedicated to my work, Welcome to my site!" />
         </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
