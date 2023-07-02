import React from "react";
import { getAllFilesMetadata } from "@/lib/mdx";
import Social from '@/components/Home/Social'
import Data from "@/components/Home/Data";
import ScrollDown from "@/components/Home/ScrollDown";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";

// export default function Home({ posts }) {

export default function HomePage() {

  return (
    <>

      <main className="main">

      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
              <Social />
              <div className="home__img"></div>
              <Data />
          </div>
          <ScrollDown />
          <About />
          <Skills/>
        </div>
       
      </section>

      </main>
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      {/* <section className="p-6">
        <h3 className="section title font-bold text-2xl pb-6">Ultimos Posts</h3>
        <div className="flex">
          {posts.map((post) => (
            <Link key={post.slug} href={`blog/${post.slug}`}>
              <div class="bg-gray-800 p-2 m-2 h-72 w-64 shadow-md border border-gray-900 rounded-lg max-w-sm mb-5">
                <div>
                  <Image
                    src="/assets/rich.jpg"
                    alt="rich"
                    width={240}
                    height={48}
                    className="object-cover w-full rounded-lg"
                  />
                  <h5 class="text-white font-bold text-2xl tracking-tight mb-2 pt-4">
                    {post.title}
                  </h5>
                  <p class="font-normal text-white mb-3">{post.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
    </>

  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: { posts },
  };
}
