import Image from "next/image";
import ReservationSidebar from "../ReservationSidebar";

const PropertyDetailPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64ch] mb-4 overflow-hidden rounded-xl relative">
        <Image
          src="/beach-view.webp"
          alt="Beach House"
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">Property Name</h1>
          <span className="mb-6 block text-lg text-gray-600">
            5 Guests - 2 Bedrooms - 1 Bathroom
          </span>
          <hr />
          <div className="py-6 flex items-center space-x-4">
            <Image
              src="/MyFoto.jpeg"
              alt="The User name"
              width={50}
              height={50}
              className="rounded-full "
            />
            <p>
              <strong>Meidhika Ns</strong> is Your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
            deserunt iusto aliquid tempora ipsa dolorem, eos dolores adipisci
            accusantium vero dolor aliquam ut! Harum consectetur mollitia
            accusantium deleniti fuga itaque suscipit ipsum officia, soluta
            saepe libero corrupti repellendus possimus explicabo temporibus odio
            doloremque reiciendis nisi. Accusamus ipsum numquam culpa eum.
          </p>
        </div>
        <ReservationSidebar />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
