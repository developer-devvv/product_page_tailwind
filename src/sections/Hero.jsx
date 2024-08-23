import Button from "../components/Button";
import { useState } from "react";
import { arrowRight } from '../assets/icons';
import { shoes, statistics } from '../constants';
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
  
  return (
    <section
      id="home"
      className="w-full flex lg:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative lg:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 xl:padding-l wide:padding-r padding-b">
        <p className="mt-8 text-xl font-montserrat text-coral-red">
          Our collections
        </p>

        <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-5">Side</span> Tables
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-4 mb-10 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Show Now" iconURL={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full mt-6 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center lg:h-screen max-lg:py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="Side Table" className="object-contain relative z-10 h-[400px]" />

        <div className="absolute flex sm:gap-6 gap-4 -bottom-[3%] sm:right-[15%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
