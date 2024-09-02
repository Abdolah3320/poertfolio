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
            title="School in your pocket"
            text="School in Your Pocket is a revolutionary web app designed to cater to the diverse needs of schools, students, and teachers. Our platform provides a comprehensive and user-friendly interface that streamlines communication, collaboration, and learning, making it an indispensable tool for any educational institution."
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
            title="Divima"
            text=" Divima is a cutting-edge e-commerce web app that revolutionizes the way you shop for clothing. the platform offers a unique blend of style, customization, and convenience, allowing you to create your own personalized fashion statement."
          />
        </div>

        <div className="col-span-4 w-full h-full">
          <Itembox
            title="....You can be here next 😉"
            text=""
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
