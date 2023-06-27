import * as React from "react";
import {
  BookOpenIcon,
  BugAntIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/solid";
import type { HeadFC, PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <header className="w-full border-b-2 py-2">
        <h1 className="ml-4 text-2xl font-bold">Sam Peterson, Web Developer</h1>
      </header>

      <main className="flex flex-row justify-center items-center ml-32 w-4/5 h-1/2">
        <h3 className="w-2/3">
          I am a React developer focusing on Next.JS though I can work in any
          React framework or JavaScript project. I am looking to freelance and
          build your website. Please see my work samples below and contact me.
        </h3>
      </main>

      <section className="w-full h-auto">
        <div className="mx-auto w-full p-1 border-y-2 font-semibold">
          <h5 className="ml-10 my-px">
            Contact Me: Samuel.m.peterson@gmail.com
          </h5>
        </div>
      </section>
      <section className="mt-4 w-full grid grid-template-cols-3">
        <div className="w-full flex flex-col items-center">
          <a
            className="flex flex-col items-center"
            href="https://www.yourbook.recipes/">
            <h5 className="text-lg font-bold">Your Book of Recipes</h5>
            <BookOpenIcon className="h-20" />
          </a>
          <p className="font-bold">Skills Demonstrated:</p>
          <p className="mt-2 w-3/4 pl-8">
            TypeScript, NextJS, React, Tailwind, Webscraping, NoSQL (MongoDB)
          </p>
        </div>

        <div className="w-full flex flex-col items-center col-start-2">
          <a
            className="flex flex-col items-center"
            href="">
            <h5 className="text-lg font-bold">Schedule Bug</h5>
            <BugAntIcon className="h-20" />
            <p className="font-bold">Skills Demonstrated:</p>
            <p className="mt-2 w-3/4 pl-8">
              TypeScript, NextJS, React, Tailwind, SQL (Supabase)
            </p>
          </a>
        </div>
        <div className="w-full flex flex-col items-center col-start-3">
          <a
            className="flex flex-col items-center"
            href="">
            <h5 className="text-lg font-bold">Example Business Site</h5>
            <BuildingStorefrontIcon className="h-20" />
          </a>
          <p className="font-bold">Skills Demonstrated:</p>
          <p className="mt-2 w-3/4 pl-8">
            TypeScript, Gatsby, Tailwind, GraphQL
          </p>
        </div>
      </section>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
