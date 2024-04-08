"use client";
import "./page.scss";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Footer from "@/components/Footer/Footer";
import InfiniteSlider from "@/components/InfiniteSlider/InfiniteSlider";
// Services Illustrations
import responsiveIllustration from "/public/services-illustrations/responsiveIllustration.svg";
import designIllustration from "/public/services-illustrations/design-illustration.svg";
import ecoIllustration from "/public/services-illustrations/ecoIllustration.svg";
import pubIllustration from "/public/services-illustrations/pubIllustration.svg";
// Trainings Illustrations
import trainingIllustration1 from "/public/trainings-illustration/undraw_code_typing_re_p8b9.svg";
import trainingIllustration2 from "/public/trainings-illustration/undraw_design_inspiration_re_tftx.svg";
import trainingIllustration3 from "/public/trainings-illustration/yrheyybeyhxcg.svg";
import trainingIllustration4 from "/public/trainings-illustration/undraw_product_iteration_kjok.svg";

import SearchBar from "@/components/SearchBar/SearchBar";
import lottie from "lottie-web";
import Slider from "@/components/Slider/Slider";

export default function Home() {
  const slideItems = [
    {
      id: 1,
      path: "",
      content:
        "Expertise spécialisée dans le développement web, le design UX/UI, le référencement et le marketing numérique.",
    },
    {
      id: 2,
      path: "",
      content:
        "Approche centrée sur le client, avec une collaboration étroite pour répondre à vos besoins spécifiques.",
    },
    {
      id: 3,
      path: "",
      content:
        "Engagement envers la qualité, l'innovation et la satisfaction client, pour des solutions web performantes et durables.",
    },
  ];
  const services = [
    {
      id: 1,
      pah: designIllustration,
      name: "Conception et développement",
      alt: "",
      description:
        "Création de sites web sur mesure adaptés aux besoins du client, du design visuel aux fonctionnalités techniques.",
    },
    {
      id: 2,
      pah: responsiveIllustration,
      name: "Design graphique",
      alt: "",
      description:
        "Création d'éléments visuels tels que des logos, des icônes et des maquettes pour rendre le site web esthétique et intuitif.",
    },
    {
      id: 3,
      pah: pubIllustration,
      name: "Marketing numérique",
      alt: "",
      description:
        "Promotion en ligne du site web via des stratégies comme le référencement, la publicité sur les réseaux sociaux et le marketing par e-mail pour attirer les visiteurs et augmenter la visibilité.",
    },

    {
      id: 4,
      pah: ecoIllustration,
      name: "Commerce électronique",
      alt: "",
      description:
        "Mise en place de boutiques en ligne fonctionnelles incluant la gestion des stocks, des paiements sécurisés et des commandes pour faciliter les ventes en ligne.",
    },
  ];
  const trainings = [
    {
      id: 1,
      name: "Développement Web",
      description:
        "Cette formation couvre les compétences nécessaires pour créer des sites web dynamiques et interactifs. Elle peut inclure l'apprentissage des langages de programmation tels que HTML, CSS, JavaScript, ainsi que l'utilisation de frameworks populaires tels que React, Angular ou Vue.js.",
      duration: "9 mois",
      level: "bac+2",
      path: trainingIllustration1,
      alt: "",
    },
    {
      id: 2,
      name: "Conception Graphique et UX/UI Design",
      description:
        "Cette formation se concentre sur la création d'interfaces utilisateur attrayantes et fonctionnelles. Elle peut inclure l'apprentissage des principes de design, des outils de conception graphique comme Adobe Photoshop, Illustrator, et des concepts d'expérience utilisateur (UX) et d'interface utilisateur (UI).",
      duration: "9 mois",
      level: "bac+2",
      path: trainingIllustration2,
      alt: "",
    },
    {
      id: 3,
      name: "Marketing Digital et SEO",
      description:
        "Cette formation est axée sur les stratégies de marketing en ligne, y compris la publicité sur les réseaux sociaux, le référencement naturel (SEO), la création de contenu, l'email marketing, etc. Elle vise à aider les entreprises à accroître leur visibilité en ligne et à générer du trafic qualifié vers leur site web.",
      duration: "9 mois",
      level: "bac+2",
      path: trainingIllustration3,
      alt: "",
    },
    {
      id: 4,
      name: "Gestion de Projet Web",
      description:
        "Cette formation est destinée à enseigner les compétences de gestion de projet spécifiques au domaine du développement web. Cela peut inclure la planification de projet, la gestion des ressources, la communication avec les clients, la budgétisation et la livraison de projets dans les délais et les budgets impartis.",
      duration: "9 mois",
      level: "bac+2",
      path: trainingIllustration4,
      alt: "",
    },
  ];

  const animationContainer = useRef(null);
  useEffect(() => {
    let step;

    const animateImg = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "dreasss.json",
    });
    const titleContainer = document.querySelector("#heroTitle");
    titleContainer.textContent = "";
    const title = "Votre succès en ligne commence ici.";

    const typingAnimation = (i = 0) => {
      const letter = title[i];
      if (i === title.length) {
        return;
      } else {
        titleContainer.textContent += letter;
        step = setTimeout(() => {
          typingAnimation(i + 1);
        }, Math.random() * 115);
      }
    };
    typingAnimation();
    return () => {
      clearTimeout(step);
      animateImg.destroy();
    };
  });
  return (
    <div className='home'>
      <section className='hero-container'>
        <div className='hero-description'>
          <h2 className='title'>
            <span id='heroTitle'></span>
          </h2>
          <Slider items={slideItems} />
          <SearchBar />
        </div>
        <div className='hero-illustration' ref={animationContainer}></div>
      </section>
      <section className='our-references'>
        <InfiniteSlider />
      </section>

      {services.map((service) => (
        <section className='hero-container' key={service.id}>
          <div className='hero-description'>
            <h2>
              <strong>{service.name}</strong>
            </h2>
            <p>{service.description}</p>
          </div>
          <div className='hero-illustration'>
            <Image src={service.pah} alt={service.alt} priority={true} />
          </div>
        </section>
      ))}

      <section className='our-trainings'>
        <h2>
          <strong>Formations</strong>
        </h2>
        <div className='wrapper'>
          {trainings.map((training) => (
            <div className='box' key={training.id}>
              <div className='container'>
                <Image
                  src={training.path}
                  height={150}
                  width={200}
                  alt={training.alt}
                  priority={true}
                />
                <h3>
                  <strong>{training.name}</strong>
                </h3>
                <span>
                  {training.duration}
                  <br />
                  {training.level}
                </span>
                <p>{training.description}</p>
                <button>En savoir plus</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
