import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-20 pt-10 pb-2">
      <div className="max-w mx-auto w-full px-2 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        {/* About Section */}
        <div className="flex flex-col justify-center items-start md:col-span-2">
          <h3 className="text-lg font-bold mb-2">About</h3>
          <p className="text-sm">
            Alexas Teams is a startup founded by a group of IT students based in
            Egypt. We are a full-stack web development team specializing in
            technologies such as React.js, Node.js, Next.js, Express.js,
            MongoDB, Supabase, and Flask. Our expertise spans both developing
            our own SaaS projects and delivering tailored solutions for clients.
            If you are interested in similar projects or have new ideas
            you&apos;d like to explore, please feel free to contact us. We would
            be happy to discuss how we can collaborate and create something
            great together.
          </p>
        </div>
        {/* Get in Touch Section */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg font-bold mb-2">Get in Touch</h3>
          <p className="text-sm">
            Email:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alxa0684@gmaol.com&su=Contact%20Us&body=Hello%2C%20I%20would%20like%20to%20inquire%20about..."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              
            >
              alxa0684@gmail.com
            </a>
          </p>
          <p className="text-sm">
            Phone:{" & "}Whatsapp :{" "}
            <a
              href="https://wa.me/201271490616?text=Hello%2C%20I%20would%20like%20to%20inquire%20about..."
              target="_blank"
              rel="noopener noreferrer"className="hover:underline"
            >
              +01271490616
            </a>
          </p>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        <p>
          &copy; {new Date().getFullYear()} Alexzes Team&apos;s. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
