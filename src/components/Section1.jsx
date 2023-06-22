import { RiLineChartLine, RiMoneyEuroCircleLine } from "react-icons/ri";

const Section1 = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-10 gap-8">
        {/* Card1 */}
        <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-5">
          <RiLineChartLine className="text-6xl" />
          <h4 className="text-2xl">Earnings</h4>
          <span className="text-5xl text-white">&euro; 8,350 </span>
          <span className="bg-primary-300/40 rounded-xl py-2 px-3 justify-start">
            + 1$ since last month
          </span>
        </div>

        {/* Card2 */}
        <div className="bg-white p-4 rounded-xl flex flex-col justify-between gap-4 drop-shadow-xl">
          <div className="flex items-center gap-4 bg-primary-100/10 rounded-xl p-4">
            <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
              98
            </span>
            <div>
              <h3 className="font-bold">Rank</h3>
              <p className="text-gray-500">Intop 30%</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 bg-primary-100/10 rounded-xl p-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                32
              </span>
              <div>
                <h3 className="font-bold">Projects</h3>
                <p className="text-gray-500">8 this month</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="bg-primary-100/20 text-gray-500 py-3 px-2 rounded-full">
                Mobile app
              </span>
              <span className="bg-primary-100/20 text-primary-300 py-3 px-2 rounded-full">
                Branding
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-span-1 md:col-span-2 flex flex-col justify-between">
          <h1 className="text-2xl font-bold mb-8">Your Projects</h1>
          <div className="bg-white  drop-shadow-xl rounded-xl p-8 ">
            <div className="flex  gap-4 items-center mb-8">
              <img
                src="https://img.freepik.com/foto-gratis/retrato-hacker_23-2148165916.jpg"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">Logo design for Bakery</h3>
                <p className="text-gray-600">1 day remaining</p>
              </div>
            </div>
            <div className="flex  gap-4 items-center mb-8">
              <img
                src="https://img.freepik.com/foto-gratis/persona-frente-computadora-trabajando-html_23-2150040428.jpg"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-bold">Logo design for Bakery</h3>
                <p className="text-gray-500">1 day remaining</p>
              </div>
            </div>

            <a href="#" className="flex justify-end ">
              See all projects
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
