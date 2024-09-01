import Image from "next/image";
import logo from "@/public/logo.png";
import Itembox from "@/app/components/Itembox";
import NumberedLine from "@/app/components/NumberedLine";

export default function Home() {
  return (
     <div className="text-3xl text-white font-bold mt-20 justify-center items-center flex flex-col">
      <div className="mb-20">
        <Image
          src={logo}
          height={150}
          placeholder="blur"
          quality={100}
          alt="Mountains and forests with two cabins"
        />
      </div>
      <h1 className="my-5">Our Latest Work</h1>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        <div className="col-span-4 w-full h-full">
          <Itembox
            title="Title"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                  quas omnis vero totam ullam, reprehenderit ratione pariatur
                  accusamus suscipit odit nostrum?"
          />
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <NumberedLine number={1} />
        </div>
        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <NumberedLine number={2} />
        </div>
        <div className="col-span-4 w-full h-full">
          <Itembox
            title="Title"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                  quas omnis vero totam ullam, reprehenderit ratione pariatur
                  accusamus suscipit odit nostrum?"
          />
        </div>

        <div className="col-span-4 w-full h-full">
          <Itembox
            title="Title"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  corporis consequuntur voluptate nulla iusto quam ut quasi, eaque
                  quas omnis vero totam ullam, reprehenderit ratione pariatur
                  accusamus suscipit odit nostrum?"
          />
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <NumberedLine number={3} />
        </div>
        <div className="col-span-4 w-full h-full"></div>
      </div>
    </div>
  );
}
