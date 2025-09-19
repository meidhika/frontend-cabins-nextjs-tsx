const ReservationSidebar = () => {
  return (
    <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl ">
      <h2 className="mb-5 text-2xl ">Rp. 200.000 per Night</h2>
      <div className="mb-6 p-3 border border-gray-400 rounded-xl">
        <label className="mb-2 block font-bold text-xs">Guest</label>
        <select className="w-full -ml-1 text-xm">
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      </div>
      <div className="w-full mb-6 py-6 text-center text-white bg-airbnb rounded-xl hover:bg-airbnb-dark">
        Book
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>Rp. 200.000 * 4 Nights</p>
        <p>Rp. 800.000</p>
      </div>
      <div className="mb-4 flex justify-between align-center">
        <p>CabinsBnb Fee</p>
        <p>Rp. 50.000</p>
      </div>
      <hr />
      <div className="mt-4 flex justify-between align-center font-bold">
        <p>Total</p>
        <p>Rp. 850.000</p>
      </div>
    </aside>
  );
};
export default ReservationSidebar;
