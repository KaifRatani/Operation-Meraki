import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const NavigationBarSection = (): JSX.Element => {
  // Navigation items data for mapping
  const navigationItems = [
    { label: "Home", width: "w-[49px]" },
    { label: "Programs", width: "w-[82px]" },
    { label: "Get Involved", width: "w-[110px]" },
    { label: "Events", width: "w-[57px]" },
    { label: "News", width: "w-[47px]" },
    { label: "Contact", width: "w-[68px]" },
    { label: "About Us", width: "w-[78px]" },
  ];

  return (
    <div className="w-full h-[58px] mt-[25px] mx-auto max-w-[1251px]">
      <div className="h-[59px] bg-off-white border-b-[0.5px] border-[#d9d9d9]">
        <div className="flex items-center gap-[86px] py-1 px-[120px]">
          <NavigationMenu className="max-w-none">
            <NavigationMenuList className="flex items-center gap-16">
              {navigationItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <Button
                    variant="ghost"
                    className={`${item.width} [font-family:'Raleway',Helvetica] font-semibold text-footer-color text-base tracking-[0.80px] leading-[normal] p-0 h-auto hover:bg-transparent hover:text-footer-color/80`}
                  >
                    {item.label}
                  </Button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <Button className="w-36 h-[45px] bg-donate-button-color rounded-[5px] [font-family:'Raleway',Helvetica] font-bold text-off-white text-lg tracking-[0.72px] leading-10 shadow-red-button-drop-shadow">
            Donate
          </Button>
        </div>
      </div>
    </div>
  );
};