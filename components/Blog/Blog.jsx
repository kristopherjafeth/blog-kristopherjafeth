import React from 'react'
import {Data} from "./Data";
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';



function Blog({ posts }) {
  return (
    <>
   <section className="testimonials container section">
     <h1 className="section__title">
        My <span className="span-green">Blog</span>
      </h1>
      <span className="section__subtitle">All Posts</span>

      <Swiper className="testimonial__container"
  loop={true}
  grabCursor={true}
  spaceBetween={6}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 18,
    },
  }}
  modules={{Pagination}}
>
  {posts && posts.map((post) => (
    <SwiperSlide key={post.slug}>
      <Link href={`blog/${post.slug}`}>
        <div className="bg-[--container-color] p-2 m-2 h-auto w-100 shadow-md border border-[--container-color] rounded-lg max-w-sm mb-5">
          <div>
            <Image
              src={post.image}
              alt="rich"
              width={240}
              height={120}
              className="object-cover w-full"
            />
            <h5 className="text-blog-title">
              {post.title}
            </h5>
            <p className="post-date-blog">{post.date}</p>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))}
</Swiper>




   </section>


   </>
  )

}

export default Blog;



export async function getStaticProps() {
    const posts = await getAllFilesMetadata();
  
    return {
      props: { posts },
    };
  }