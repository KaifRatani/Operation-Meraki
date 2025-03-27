import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  // Programs data
  const programsLinks = [
    "Bridge-Reset",
    "Bridge-Rebuild",
    "Build-Refocus",
    "Build-ReEngage",
    "Bridge-RePlant",
  ];

  // Get Involved data
  const getInvolvedLinks = [
    "Board of Directors",
    "Become a Volunteer",
    "Financial Support",
    "Camera and field equipment donation",
  ];

  // Footer links data
  const footerLinks = [
    "Privacy Policy",
    "Terms of Use",
    "Contact Us",
    "About Us",
  ];

  // Social media icons with their components
  const socialIcons = [
    {
      icon: <FacebookIcon className="w-5 h-5 text-off-white" />,
      id: "facebook",
    },
    {
      icon: <InstagramIcon className="w-5 h-5 text-off-white" />,
      id: "instagram",
    },
    { icon: <YoutubeIcon className="w-5 h-5 text-off-white" />, id: "youtube" },
    { icon: <TwitterIcon className="w-5 h-5 text-off-white" />, id: "twitter" },
  ];

  return (
    <footer className="w-full bg-footer-color py-14 px-16">
      <div className="max-w-[1440px] mx-auto flex flex-wrap justify-between">
        {/* Logo section */}
        <div className="mb-10 md:mb-0">
          <img
            className="w-44 h-[49px] object-cover"
            alt="White stacked logo"
            src="/white-stacked-logo-high-res-1.png"
          />
        </div>

        {/* Programs section */}
        <div className="flex flex-col gap-9 mb-10 md:mb-0">
          <h3 className="font-['Raleway',Helvetica] font-semibold text-off-white text-base">
            Programs
          </h3>

          <div className="flex flex-col gap-3">
            {programsLinks.map((program, index) => (
              <a
                key={index}
                href="#"
                className="font-['Raleway',Helvetica] font-medium text-off-white text-base hover:underline"
              >
                {program}
              </a>
            ))}
          </div>
        </div>

        {/* Get Involved section */}
        <div className="flex flex-col gap-9 mb-10 md:mb-0">
          <h3 className="font-['Raleway',Helvetica] font-semibold text-off-white text-base">
            Get Involved
          </h3>

          <div className="flex flex-col gap-3">
            {getInvolvedLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="font-['Raleway',Helvetica] font-medium text-off-white text-base hover:underline"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Subscribe section */}
        <div className="w-full md:w-[440px]">
          <div className="flex flex-col gap-8">
            <h3 className="font-['Raleway',Helvetica] font-semibold text-off-white text-base">
              Subscribe Now
            </h3>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <p className="font-['Raleway',Helvetica] font-normal text-off-white text-lg">
                  Stay informed on what we&apos;re doing and opportunities.
                </p>

                <div className="flex">
                  <Input
                    className="bg-off-white rounded-xl h-[42px] text-input-field-text font-['Raleway',Helvetica] font-medium text-base placeholder:text-input-field-text"
                    placeholder="(Enter Email)"
                  />
                  <Button className="ml-3 bg-button-red h-[42px] w-[87px] rounded-md border border-[#fefefefe] font-['Inter',Helvetica] font-medium text-off-white text-base">
                    Submit
                  </Button>
                </div>
              </div>

              {/* Social media icons */}
              <div className="flex gap-6">
                {socialIcons.map((social) => (
                  <a
                    key={social.id}
                    href="#"
                    className="w-10 h-10 rounded-[20px] border border-solid border-[#fefefefe] flex items-center justify-center"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom links */}
      <div className="max-w-[1440px] mx-auto mt-16 flex flex-wrap justify-between">
        <div className="font-['Raleway',Helvetica] font-medium text-off-white text-base">
          2024 Operation Meraki
        </div>

        <div className="flex flex-wrap gap-8 md:gap-[124px]">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href="#"
              className="font-['Raleway',Helvetica] font-medium text-off-white text-base hover:underline"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
