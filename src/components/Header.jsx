import phoneSvg from "../assets/svg/phone.svg";

function Header() {
  return (
    // <header>
    //   <p className="text-4xl text-stone-50">Krazy Baazar</p>

    //   <div>
    //     <img className="h-6" src={phoneSvg} alt="" />
    //     <p className="text-stone-50">0123456789</p>
    //   </div>
    //   {/* Buttons */}
    //   <div>
    //     <a
    //       className="group mr-2 inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
    //       href="#"
    //     >
    //       <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
    //         Login
    //       </span>
    //     </a>
    //     <a
    //       className="group mr-2 inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
    //       href="#"
    //     >
    //       <span className="block rounded-sm bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">
    //         Signup
    //       </span>
    //     </a>
    //   </div>
    // </header>
    <header className="flex justify-between items-center">
      <p className="text-4xl text-stone-50">Krazy Baazar</p>

      <div className="flex items-center space-x-4">
        <div>
          <img className="h-6" src={phoneSvg} alt="" />
          <p className="text-stone-50">0123456789</p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-2">
          <a
            className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="#"
          >
            <span className="block rounded-sm bg-white px-4 py-2 text-sm font-medium group-hover:bg-transparent">
              Login
            </span>
          </a>
          <a
            className="group inline-block rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
            href="#"
          >
            <span className="block rounded-sm bg-white px-4 py-2 text-sm font-medium group-hover:bg-transparent">
              Signup
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
