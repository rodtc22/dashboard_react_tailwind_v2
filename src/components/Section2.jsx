import { RiHashtag } from "react-icons/ri";

const Section2 = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
        <div className="flex flex-col ">
          <h1 className="text-2xl font-bold mb-8">Recent invoices</h1>

          {/* Card1 */}
          <div className=" bg-white p-8 rounded-xl shadow-xl mb-8 flex flex-col gap-8 ">
            {/* Card1.1 */}
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4 mb-4">
              <div className="col-span-2 flex items-center gap-4 ">
                <img
                  src="https://img.freepik.com/foto-gratis/hombre-analizando-codigo-binario-pantalla-virtual_53876-96329.jpg"
                  alt="nombre de imagen"
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-bold">Alexander Williams</h3>
                  <p className="text-gray-500">JQ Holdings</p>
                </div>
              </div>
              <div>
                <span className="bg-green-100 text-green-900 py-1 px-3 rounded-full">
                  Paid
                </span>
              </div>
              <div>
                <span className="font-bold py-1 px-3 rounded-full">
                  &euro;1,280.87
                </span>
              </div>
            </div>
            {/* Card1.2 */}
            <div className=" grid grid-cols-1 lg:grid-cols-4 items-center gap-4">
              <div className="col-span-2 flex  items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/programador-tiro-medio-sentado-silla_23-2149101160.jpg"
                  alt="nombre de imagen"
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-bold">Jhon Philips</h3>
                  <p className="text-gray-500">Inchor Techs</p>
                </div>
              </div>
              <div>
                <span className="bg-red-100 text-red-900 py-1 px-3 rounded-full">
                  Late
                </span>
              </div>
              <div>
                <span className="font-bold py-1 px-3 rounded-full">
                  &euro;12,998.88
                </span>
              </div>
            </div>
          </div>

          {/* Card2 */}
          <div className="bg-primary-900 xl:flex-nowrap p-8 rounded-xl shadow-xl flex flex-wrap gap-8 justify-between items-center">
            <RiHashtag className="text-white text-3xl rotate-12" />
            <div>
              <h2 className="text-white font-bold">Engage with clients</h2>
              <p className="text-gray-300">Join slack channel</p>
            </div>
            <div className="w-full">
              <button className="  w-full  py-2 px-10 rounded-xl bg-primary-100 text-white">
                Join now
              </button>
            </div>
          </div>
        </div>

        {/* Card3 */}
        <div>
          <h1 className="text-2xl font-bold mb-8">Recommended Project</h1>
          <div className=" bg-white p-8 rounded-xl shadow-xl mb-8 flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://img.freepik.com/foto-gratis/hombre-analizando-codigo-binario-pantalla-virtual_53876-96329.jpg"
                  alt="nombre de imagen"
                  className="h-14 w-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">Thomas Martin</h3>
                  <p className="text-gray-500">Updated 10m ago</p>
                </div>
              </div>
              <div>
                <span className="bg-primary-900 text-white py-2 px-4 rounded-full">
                  Design
                </span>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="text-lg font-bold">
                Need a designer to form branding essentials for my business.
              </h5>
              <p className="text-gray-500">
                Looking for a talented brand designer to create all the branding
                materials my new startup
              </p>
            </div>
            <div className="bg-primary-100/10 flex flex-col md:flex-row items-center justify-between gap-4 py-8 px-4 rounded-xl">
              <div>
                <sup className="text-sm text-gray-500">&euro;</sup>
                <span className="text-2xl font-bold mr-2 ml-1">8,700</span>
                <span className="text-sm text-gray-500">/ month</span>
              </div>
              <div>
                <span className="border border-primary-100 text-primary-100 py-1 px-3 rounded-full">Full time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2;
