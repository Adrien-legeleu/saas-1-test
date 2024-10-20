"use client";

import { Cursor, Typewriter } from "react-simple-typewriter";
import ButtonProvider from "./components/ButtonProvider";

export default function Home() {
  return (
    <section className="h-screen w-full flex flex-col items-center gap-12 justify-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-wider flex items-center">
        <Typewriter
          typeSpeed={50}
          words={[
            "Bienvenue",
            "Welcome",
            "Vienvenido",
            "Wilkommen",
            "Benvenuto",
          ]}
          loop={0}
        />
        <span>
          <Cursor />
        </span>
      </h1>

      <p className="text-center text-xl md:text-2xl leading-[3rem] md:leading-[3.5rem] max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum totam vitae
        corrupti doloremque quae tempora blanditiis at aspernatur nihil? Esse
        reprehenderit suscipit atque distinctio a?
      </p>
      <ButtonProvider />
    </section>
  );
}
