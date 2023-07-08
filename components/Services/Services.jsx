import React, { useState } from "react";
import { VscSymbolInterface } from "react-icons/vsc";
import { SiElementor } from "react-icons/si";
import { AiOutlineGoogle } from "react-icons/ai";
import { BsPlusCircleFill } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { FcShop } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcIpad } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";



function Services() {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <section className="services section" id="services">
      <h1 className="section__title">
        My <span className="span-green">Services</span>
      </h1>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <FcTemplate className="services__icon" />

          <h3 className="services__title">Website</h3>
          <span className="services__button" onClick={() => toggleTab(1)}>
            <BsPlusCircleFill className="services__button-icon" />
            View more
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
            <MdCancel
                onClick={() => toggleTab(0)}
                className="services__modal-close"
              />
              <h3 className="services__modal-title">Website</h3>
              <p className="services__modal-description">
                With more than 3 years of experience. providing quality work to
                clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    UX Element interactions
                  </p>
                </li>

                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <FcIpad className="services__icon" />

          <h3 className="services__title">Landing Page</h3>
          <span className="services__button" onClick={() => toggleTab(2)}>
            <BsPlusCircleFill className="services__button-icon" />
            View more
          </span>

          <div  className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <MdCancel  onClick={() => toggleTab(0)} className="services__modal-close" />

              <h3 className="services__modal-title">Landing Page</h3>
              <p className="services__modal-description">
                With more than 3 years of experience. providing quality work to
                clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    UX Element interactions
                  </p>
                </li>

                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <FcShop className="services__icon" />

          <h3 className="services__title">Ecommerce</h3>
          <span className="services__button" onClick={() => toggleTab(3)}>
          <BsPlusCircleFill className="services__button-icon" />
            View more
          </span>

          <div   className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }>
            <div className="services__modal-content">
              <MdCancel  onClick={() => toggleTab(0)} className="services__modal-close" />
              <h3 className="services__modal-title">Ecommerce</h3>
              <p className="services__modal-description">
                With more than 3 years of experience. providing quality work to
                clients and companies.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    UX Element interactions
                  </p>
                </li>

                <li className="services__modal-service">
                  <FcApproval />
                  <p className="services__modal-info">
                    I position your company brand
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
