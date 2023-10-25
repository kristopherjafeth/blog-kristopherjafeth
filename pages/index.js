import React from "react";
import Social from '@/components/Home/Social'
import Data from "@/components/Home/Data";
import ScrollDown from "@/components/Home/ScrollDown";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Blog from "@/components/Blog/Blog";
import { getAllFilesMetadata } from "@/lib/mdx";
import Works from "@/components/Home/Works/Works";
import Profile from "@/public/assets/kristopher.png";
import Image from "next/image";

// export default function Home({ posts }) {

export default function HomePage({posts}) {

  return (
    <>

      <main className="main">

      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
              <Social />
              <div className="home__img">
              <Image
              src={Profile}
              alt="rich"
              width={600}
              height={600}
              className="object-cover w-full p-4"
            />              
            </div>
              <Data />
          </div>
          <ScrollDown />
          <Works />
          <About />
          <Skills/>
          <Blog posts={posts}/>
        </div>
       
      </section>

      </main>
      
    </>

  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
