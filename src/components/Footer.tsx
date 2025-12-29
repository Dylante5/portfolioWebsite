"use client";

import {
  Footer,
  FooterIcon,
} from "flowbite-react";
import { BsGithub, BsInstagram, BsLinkedin  } from "react-icons/bs";

export default function AppFooter() {
return (
  <Footer container className="rounded-none">
    <div className="w-full">
      <div className="w-full sm:flex sm:items-center sm:justify-center">
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <FooterIcon href="#" icon={BsInstagram} />
          <FooterIcon href="#" icon={BsLinkedin} />
          <FooterIcon href="https://github.com/Dylante5" icon={BsGithub} />
        </div>
      </div>
    </div>
  </Footer>
  );
}
