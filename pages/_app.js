import "@/styles/globals.css";
import { getAllFilesMetadata } from "@/lib/mdx";
import React from "react";
import Header from "@/components/Header/Header";

//import Styles
import '@/components/Header/Header.css'
import '@/components/Home/Home.css'
import '@/components/Home/About.css';

export default function App({ Component, pageProps }) {
 
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
