import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CallToActionSection = (): JSX.Element => {
  // News article data for mapping
  const newsArticles = [
    {
      id: 1,
      title: "Lorem Ipsum",
      date: "June 13th, 2022",
      author: "James Berg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/pexels-tima-miroshnichenko-5711177-1.png",
      alt: "Pexels tima",
    },
    {
      id: 2,
      title: "Lorem Ipsum",
      date: "June 13th, 2022",
      author: "James Berg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut labore et dolore magna aliqua. eiusmod tempor incididunt ut labore et dolore",
      image: "/pexels-rdne-stock-project-7468215-1.png",
      alt: "Pexels rdne stock",
    },
    {
      id: 3,
      title: "Lorem Ipusm",
      date: "June 13th, 2022",
      author: "James Berg",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ut labore et dolore magna aliqua. eiusmod tempor incididunt ut labore et dolore",
      image: "/pexels-tima-miroshnichenko-5711177-1-1.png",
      alt: "Pexels tima",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-8 py-16">
      <h2 className="font-thin-header font-[number:var(--thin-header-font-weight)] text-[#222540] text-[length:var(--thin-header-font-size)] tracking-[var(--thin-header-letter-spacing)] leading-[var(--thin-header-line-height)] whitespace-nowrap [font-style:var(--thin-header-font-style)]">
        Recent News
      </h2>

      <div className="flex flex-wrap justify-center gap-8 px-4 md:px-16">
        {newsArticles.map((article) => (
          <Card
            key={article.id}
            className="w-full md:w-[396px] h-[484px] bg-[#eaeef2] rounded-[5px] overflow-hidden border-none"
          >
            <div className="p-[15px] pb-0">
              <img
                className="w-full h-[196px] object-cover"
                alt={article.alt}
                src={article.image}
              />
            </div>

            <CardContent className="flex flex-col gap-3 p-[17px] pt-3">
              <h3 className="font-['Raleway',Helvetica] font-bold text-[#074264] text-2xl tracking-[0] leading-normal whitespace-nowrap">
                {article.title}
              </h3>

              <div className="flex items-start justify-between w-full">
                <span className="font-['Raleway',Helvetica] font-normal text-[#650f1c] text-base tracking-[0.48px] leading-[25px]">
                  {article.date}
                </span>
                <span className="font-['Raleway',Helvetica] font-normal text-[#650f1c] text-base text-right tracking-[0.48px] leading-[25px]">
                  {article.author}
                </span>
              </div>

              <div className="font-['Raleway',Helvetica] font-medium text-[#1e1f29] text-base leading-[30px] tracking-[0.08px]">
                <p>{article.content}</p>
                <a
                  href="#"
                  className="text-[#074264] tracking-[0] leading-[30px] underline"
                >
                  Read More
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
