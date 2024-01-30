"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import HeaderCarouselDisplay from "./carouseldisplay";

export function HeaderCarouselComp() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 6000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="ISCE Tech"
            content="We are providing world changing technology to empower your world. ISCE is a digital platform that equips individuals with innovative software and hardware with the aim to provide ease and top-notch security. "
            link=""
            className='/images/first.jpg'
            buttonTitle="Explore Services"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="We Are Here"
            content="Be bold, unique and different: Individuality is what makes us, Build your Digital Lifestyle."
            link=""
            className='/images/second.jpg'
            buttonTitle="Contact Us"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="Digital Cards"
            content="Why print countless complementary cards yearly? Save trees, exchange contact information with one tap. Connect with style, Connect with ISCE."
            link="https://isce.app/"
            className='/images/isce.png'
            buttonTitle="Get card"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="ISCE Team"
            content="We are a culture that inspires growth, development and connections, connection with yourself and the globe."
            link=""
            className='/images/fifth.jpg'
            buttonTitle="Meet the Team"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="Our Works"
            content="Technology is limitless and we are bringing it to you."
            link=""
            className='/images/sixth.jpg'
            buttonTitle="Our Projects"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}