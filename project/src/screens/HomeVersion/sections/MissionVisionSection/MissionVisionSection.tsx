import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../components/ui/tabs";

export const MissionVisionSection = (): JSX.Element => {
  // Data for mission and vision content
  const tabsData = {
    mission: {
      title: "Our Mission",
      content:
        "We help our service members and their families transition from the uniform to new professional and personal lives by changing the veteran transition landscape.",
    },
    vision: {
      title: "Our Vision",
      content:
        "Our vision statement would appear here when the Vision tab is selected.",
    },
  };

  return (
    <section className="w-full max-w-[1140px] mx-auto py-16 px-6 bg-[#eaeef2] rounded-[5px]">
      <div className="max-w-[730px] mx-auto">
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="bg-transparent p-0 h-auto mb-8 border-0 justify-start gap-14">
            <TabsTrigger
              value="mission"
              className="relative h-10 px-3 data-[state=active]:bg-transparent data-[state=active]:shadow-none font-thin-header font-[number:var(--thin-header-font-weight)] text-[length:var(--thin-header-font-size)] tracking-[var(--thin-header-letter-spacing)] leading-[var(--thin-header-line-height)] text-[#222540] data-[state=inactive]:text-[#222540bf] data-[state=active]:after:content-[''] data-[state=active]:after:absolute data-[state=active]:after:w-[213px] data-[state=active]:after:h-0.5 data-[state=active]:after:bg-[#222540] data-[state=active]:after:bottom-0 data-[state=active]:after:left-0"
            >
              {tabsData.mission.title}
            </TabsTrigger>
            <TabsTrigger
              value="vision"
              className="h-10 px-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none font-thin-header font-[number:var(--thin-header-font-weight)] text-[length:var(--thin-header-font-size)] tracking-[var(--thin-header-letter-spacing)] leading-[var(--thin-header-line-height)] text-[#222540bf] data-[state=active]:text-[#222540]"
            >
              {tabsData.vision.title}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="mission" className="mt-0">
            <p className="font-['Raleway',Helvetica] font-semibold text-[#222540] text-xl tracking-[0.60px] leading-[35px] mb-8">
              {tabsData.mission.content}
            </p>
            <Button className="w-[174px] h-[45px] bg-[#1b5979] rounded-lg shadow-button-shadow-blues font-['Raleway',Helvetica] font-semibold text-off-white text-base tracking-[0.80px]">
              Learn More
            </Button>
          </TabsContent>

          <TabsContent value="vision" className="mt-0">
            <p className="font-['Raleway',Helvetica] font-semibold text-[#222540] text-xl tracking-[0.60px] leading-[35px] mb-8">
              {tabsData.vision.content}
            </p>
            <Button className="w-[174px] h-[45px] bg-[#1b5979] rounded-lg shadow-button-shadow-blues font-['Raleway',Helvetica] font-semibold text-off-white text-base tracking-[0.80px]">
              Learn More
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
