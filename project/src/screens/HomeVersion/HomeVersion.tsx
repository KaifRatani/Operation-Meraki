import { PlayIcon } from "lucide-react";
import React from "react";
import { AspectRatio } from "../../components/ui/aspect-ratio";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CallToActionSection } from "./sections/CallToActionSection";
import { FooterSection } from "./sections/FooterSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";

export const HomeVersion = (): JSX.Element => {
  // Data for the user type cards
  const userTypeCards = [
    {
      id: 1,
      image: "/mask-group.png",
      buttonText: "You Are Veterans",
      position: { top: "veterans" },
    },
    {
      id: 2,
      image: "/mask-group-1.png",
      buttonText: "You Are Donors",
      position: { top: "donors" },
    },
    {
      id: 3,
      image: "/mask-group-2.png",
      buttonText: "You Are Volunteers",
      position: { top: "volunteers" },
    },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Navigation Bar Section */}
        <NavigationBarSection />

        {/* Hero Section */}
        <div className="w-full h-[459px] relative">
          <div className="relative h-[544px] -top-[85px]">
            <div className="relative w-full h-[544px]">
              <div className="absolute w-full h-[170px] top-0 left-0 bg-[#c3cfd9]" />
              <img
                className="absolute w-full h-[459px] top-[85px] left-0 object-cover"
                alt="Hero image showing connection"
                src="/redo-redo-meraki-1.png"
              />
            </div>
          </div>
        </div>

        {/* User Type Cards Section */}
        <div className="w-full flex flex-col md:flex-row justify-center items-start px-4 md:px-[146px] mt-4 gap-8">
          {/* Veterans Card */}
          <Card className="border-none shadow-none w-[307px] h-[281px] flex flex-col items-center justify-center">
            <CardContent className="flex flex-col items-center gap-8 p-0">
              <div className="relative w-[210px] h-[204px] rounded-[105px/102px]">
                <img
                  className="absolute w-[203px] h-[198px] top-[5px] left-[3px] rotate-[0.08deg]"
                  alt="Veterans"
                  src="/mask-group.png"
                />
                <div className="absolute w-[210px] h-[204px] top-0 left-0 rounded-[105px/102px] border-8 border-solid border-[#d02d4b]">
                  <div className="relative w-[204px] h-[199px] top-[-5px] left-[-5px] rounded-[102px/99px] border-2 border-solid border-white" />
                </div>
              </div>
              <Button className="w-[174px] h-[45px] bg-[#1b5979] rounded-lg shadow-button-shadow-blues font-semibold text-off-white text-base tracking-[0.80px]">
                You Are Veterans
              </Button>
            </CardContent>
          </Card>

          {/* Middle Content Placeholder */}
          <div className="w-full md:w-[778px] h-[281px] bg-[#d9d9d9]" />

          {/* Donors Card */}
          <Card className="border-none shadow-none w-[307px] h-[281px] flex flex-col items-center justify-center">
            <CardContent className="flex flex-col items-center gap-8 p-0">
              <div className="relative w-[200px] h-[200px] rounded-[100px]">
                <img
                  className="absolute w-[194px] h-[194px] top-[3px] left-0.5"
                  alt="Donors"
                  src="/mask-group-1.png"
                />
                <div className="absolute w-[200px] h-[200px] top-0 left-0 rounded-[100px] border-8 border-solid border-[#d02d4b]">
                  <div className="relative w-[194px] h-[194px] top-[-5px] -left-1 rounded-[97px] border-2 border-solid border-white" />
                </div>
              </div>
              <Button className="w-[174px] h-[45px] bg-[#1b5979] rounded-lg shadow-button-shadow-blues font-semibold text-off-white text-base tracking-[0.80px]">
                You Are Donors
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Second Row - Placeholder and Volunteers */}
        <div className="w-full flex flex-col md:flex-row justify-center items-start px-4 md:px-[146px] mt-8 gap-8">
          {/* Placeholder */}
          <div className="w-full md:w-[778px] h-[281px] bg-[#d9d9d9]" />

          {/* Volunteers Card */}
          <Card className="border-none shadow-none w-[307px] h-[295px] flex flex-col items-center justify-center">
            <CardContent className="flex flex-col items-center gap-8 p-0">
              <div className="relative w-[210px] h-[204px] rounded-[105px/102px]">
                <img
                  className="absolute w-[203px] h-[198px] top-[5px] left-[3px] rotate-[0.08deg]"
                  alt="Volunteers"
                  src="/mask-group-2.png"
                />
                <div className="absolute w-[210px] h-[204px] top-0 left-0 rounded-[105px/102px] border-8 border-solid border-[#d02d4b]">
                  <div className="relative w-[204px] h-[199px] top-[-5px] left-[-5px] rounded-[102px/99px] border-2 border-solid border-white" />
                </div>
              </div>
              <Button className="w-[174px] h-[45px] bg-[#1b5979] rounded-lg shadow-button-shadow-blues font-semibold text-off-white text-base tracking-[0.80px]">
                You Are Volunteers
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Video Section */}
        <div className="w-full flex flex-col items-center gap-2.5 px-4 md:px-[146px] py-8 mt-8">
          <AspectRatio
            ratio={1142 / 583}
            className="w-full max-w-[1142px] relative"
          >
            <img
              className="w-full h-full object-cover"
              alt="Video thumbnail"
              src="/rectangle-23893.png"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[145px] h-[84px] bg-[#d9d9d94c] rounded-lg flex items-center justify-center">
                <PlayIcon className="w-[60px] h-[67px] text-white" />
              </div>
            </div>
          </AspectRatio>
        </div>

        {/* Mission Vision Section */}
        <MissionVisionSection />

        {/* Call To Action Section */}
        <CallToActionSection />

        {/* Footer Section */}
        <FooterSection />
      </div>
    </div>
  );
};
