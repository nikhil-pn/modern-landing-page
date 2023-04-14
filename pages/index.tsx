import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  videoAnimation,
  wordAnimation,
} from "../utils/animations";

const Home: NextPage = () => {
  return (
    <motion.div
      className=" flex flex-col min-h-screen
      px-4 md:px-12 bg-cream"
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Home | NtecPhones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="grid md:grid-cols-[3fr_1fr]  md:py-12">
        <h1 className=" text-3xl md:text-8xl font-bold md:w-[40rem]   md:leading-[90%] tracking-[-2px] ">
          <AnimatedWords title="Part Of the Journey is the END" />
        </h1>
        <div className="flex justify-center">

          <motion.div
            className="text-sm leading-[150%] self-end mt-4 pt-2 justify-center flex items-center "
            variants={riseWithFade}
          >
            Born from the moonshot factory, we're building a new type of robot.
            One that can learn by itself, to help anyone with (almost) anything.
          </motion.div>
        </div>
      </main>
      <motion.video
        className="w-full py-12"
        loop
        autoPlay
        muted
        playsInline
        variants={videoAnimation}
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </motion.video>
      <div className="flex justify-center">

        <motion.div
          className="text-sm leading-[150%] self-end mt-4 "
          variants={riseWithFade}
        >
          Born from the moonshot factory, we're building a new type of robot.
          One that can learn by itself, to help anyone with (almost) anything.
          Born from the moonshot factory, we're building a new type of robot.
          One that can learn by itself, to help anyone with (almost) anything.

          One that can learn by itself, to help anyone with (almost) anything.
          Born from the moonshot factory, we're building a new type of robot.
          One that can learn by itself, to help anyone with (almost) anything.
        </motion.div>
      </div>
      <footer className="flex justify-center text-sm text-zinc-400 py-12 mt-auto
">
        <p>Copyright 2022 Robot Co. All rights reserved.</p>
      </footer>
    </motion.div>
  );
};

type AnimatedWordsProps = {
  title: string;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default Home;
