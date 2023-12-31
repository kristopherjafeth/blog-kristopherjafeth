import React from "react";
import AboutImg from "../../public/assets/about.png";
import Image from "next/image";
import Info from "./Info";
import { BiSolidCloudDownload } from "react-icons/bi";


export default function About() {

  return (
    <section className="about section" id="about">
      <h1 className="section__title">About <span className="span-green">me</span></h1>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <Image
          src={AboutImg}
          width={300}
          height={300}
          alt="Picture of the author"
          className="rounded center-image"
          
        />
        <div className="about__data">
        <Info/>  

            <p className="about__description">
                Full Stack developer, I create web pages with UI/UX user interface, I have 3 years of experience and many clientes are happy with the projects carried out.
            </p>
       
        </div>
      </div>
    </section>
  );
}
