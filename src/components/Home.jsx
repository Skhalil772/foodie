import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../data";
function Home() {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mx-4 sm:m-0 "
      id="home"
    >
      <div className="py-2 flex-1 px-8 container mx-auto flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[1 rem] lg:text-[2.5rem] font-bold w-fit mx-auto text-headingColor">
          The Fastest Delivery in {"  "}
          <span className="text-orange-600 text-[1.5rem] lg:text-[3rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima velit
          eaque fugit distinctio est nam voluptatum architecto, porro iusto
          deserunt recusandae ipsa minus eos sunt, dolores illo repellat facere
          suscipit!
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 mx-auto md:mx-0 md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 w-fit"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 rounded-xl flex bg pt-16 mx-4 items-center ">
        <div className="w-fit px-4 mx-auto h-fit grid-cols-2 grid items-center justify-center   py-4 gap-x-4 gap-y-8 lg:gap-x-8 lg:gap-y-20 ">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-40  p-3 bg-cardOverlay backdrop-blur-md rounded-2xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-16 lg:w-32 rounded-full -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">₦</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
export default Home;
