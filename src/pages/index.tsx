import * as React from "react";
import {
  BookOpenIcon,
  BugAntIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import { Link } from "gatsby";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <header className="w-full border-b-2 py-2">
        <h1 className="ml-4 text-2xl font-bold">Sam Peterson, Web Developer</h1>
      </header>

      <main className="flex flex-row justify-center items-center ml-32 w-4/5 h-1/3">
        <h3 className="mainText">
          I am a React developer focusing on Next.JS though I can work in any
          React framework or JavaScript project. I am looking to freelance and
          build your website. Please see my work samples below and contact me.
        </h3>
      </main>

      <section className="w-full h-auto">
        <div className="mx-auto w-full p-1 border-y-2 font-semibold flex flex-row justify-between ">
          <h5 className="ml-10 my-px">Contact: Samuel.m.peterson@gmail.com</h5>
          <Link
            to=""
            className="mr-10 bg-lightBlue text-black rounded px-2 font-normal">
            Resume
          </Link>
        </div>
        <h6 className="text-center mt-2 text-lg font-bold">Work Samples</h6>
        <p className="text-center text-sm font-extralight">
          click the image to take you to the site or the button below for the
          GitHub repo
        </p>
      </section>

      <section className=" w-full justify-evenly flex md:flex-row sm:flex-col">
        <div className="w-64 flex flex-col items-center mt-4">
          <a
            className="flex flex-col items-center"
            href="https://www.yourbook.recipes/">
            <h5 className="text-lg font-bold">Your Book of Recipes</h5>
            <BookOpenIcon className="h-20" />
          </a>
          <a
            href=""
            className="mt-2 bg-lightBlue text-center cursor-pointer text-black w-3/5 rounded">
            View Code
          </a>
          <p className="font-bold mt-2">Skills Demonstrated:</p>
          <p className="mt-2 w-3/4 pl-8">
            TypeScript, NextJS, React, Tailwind, Webscraping, NoSQL (MongoDB),
            Hosting
          </p>
        </div>

        <div className="w-64 flex flex-col items-center mt-4">
          <a
            className="flex flex-col items-center"
            href="https://www.schedulebug.xyz/">
            <h5 className="text-lg font-bold">Schedule Bug</h5>
            <BugAntIcon className="h-20" />
          </a>
          <a
            href=""
            className="mt-2 bg-lightBlue text-center cursor-pointer text-black w-3/5 rounded">
            View Code
          </a>
          <p className="font-bold mt-2 ">Skills Demonstrated:</p>
          <p className="mt-2 w-3/4 pl-8">
            TypeScript, NextJS, React, Tailwind, SQL (Supabase), Hosting
          </p>
        </div>
        <div className="w-64 flex flex-col items-center mt-4">
          <a
            className="flex flex-col items-center"
            href="https://sampeterson99.github.io/example-retail-site/">
            <h5 className="text-lg font-bold">Example Business Site</h5>
            <BuildingStorefrontIcon className="h-20" />
          </a>
          <a
            href=""
            className="mt-2 bg-lightBlue text-center cursor-pointer text-black w-3/5 rounded">
            View Code
          </a>
          <p className="font-bold mt-2">Skills Demonstrated:</p>
          <p className="mt-2 w-3/4 pl-8">TypeScript, Gatsby, Tailwind</p>
        </div>
      </section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
