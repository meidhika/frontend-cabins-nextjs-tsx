import Image from "next/image";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">My Reservations</h1>
      <div className="space-y-4">
        <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/beach-view.webp"
                alt="Beach House"
                className="hover:scale-110 transition h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-1 md:col-span-3 space-y-2">
            <h2 className="mb-4 text-xl">Property Name</h2>
            <p>
              <strong>Check in date:</strong> 12/2/2025
            </p>
            <p>
              <strong>Check out date:</strong> 12/2/2025
            </p>
            <p>
              <strong>Number of nights:</strong> 2
            </p>
            <p>
              <strong>Total Price:</strong> Rp. 200.000
            </p>
            <div className="cursor-pointer inline-block mt-6 py-4 px-6 text-center transition text-white bg-airbnb rounded-xl hover:bg-airbnb-dark">
              Go to property
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
