"use client";

import {
  Footer,
  FooterIcon,
} from "flowbite-react";
import { BsGithub, BsLinkedin  } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

export default function AppFooter() {
return (
  <Footer container className="relative overflow-hidden rounded-none shadow-[0_-1px_6px_rgba(0,0,0,0.2)] dark:shadow-[0_-1px_12px_rgba(255,255,255,0.2)]">
    <div className="w-full">
      <div className="w-full sm:flex sm:items-center sm:justify-center">
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon href="https://www.fiverr.com/s/WExW5BQ" icon={ TbBrandFiverr } />
          <FooterIcon href="https://www.linkedin.com/in/dylanteverett/" icon={BsLinkedin} />
          <FooterIcon href="https://github.com/Dylante5" icon={BsGithub} />
        </div>
      </div>
    </div>
  </Footer>
  );
}
