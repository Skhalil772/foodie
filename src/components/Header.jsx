import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";
import Logo from "../img/logo.png";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";
import { useApp } from "../context/StateProvider";
function Header() {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const { showCart, setUser, user, logout, cartItems } = useApp();
  const [isMenu, setIsMenu] = useState(false);
  // const user = false;

  //   const login = async () => {
  //     if (!user) {
  //       const {
  //         user: { refreshToken, providerData },
  //       } = await signInWithPopup(firebaseAuth, provider);
  //       dispatch({
  //         type: actionType.SET_USER,
  //         user: providerData[0],
  //       });
  //       localStorage.setItem("user", JSON.stringify(providerData[0]));
  //     } else {
  //       setIsMenu(!isMenu);
  //     }
  //   };
  const login = async () => {
    if (!user) {
      signInWithPopup(firebaseAuth, provider).then((res) => {
        console.log(res.user.providerData[0]);
        const { refreshToken, providerData } = res.user;
        setUser(providerData[0]);
        localStorage.setItem("user", JSON.stringify(providerData[0]));
      });
    } else {
      setIsMenu(!isMenu);
    }
  };

  const Logout = () => {
    setIsMenu(false);

    logout();
  };
  //setIsMenu(false);
  //   const showCart = () => {
  //     dispatch({
  //       type: actionType.SET_CART_SHOW,
  //       cartShow: !cartShow,
  //     });
  //   };
  return (
    <header className="fixed z-50 w-screen p-2 pr-8 pl-4  bg-gray-700 text-white ">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="h-5 object-cover" alt="logo" />
          {/* <p className="text-headingColor text-xl font-bold"> City</p> */}
        </Link>

        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-24 "
          >
            <li className="text-lg text-white hover:text-orange-400 duration-400 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-lg text-white hover:text-orange-400 duration-400 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-lg text-white hover:text-orange-400 duration-400 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-lg text-white hover:text-orange-400 duration-400 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>

          <div
            className="relative flex items-center justify-center"
            onClick={showCart}
          >
            <FaShoppingCart className="text-white text-2xl  cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-8 min-w-[24px] h-8 min-h-[24px] drop-shadow-xl cursor-pointer rounded-full"
              alt="userprofile"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-16 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
              >
                {user && user.email === "salamikhalil02@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p
                      className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                      onClick={() => setIsMenu(false)}
                    >
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}

                <p
                  className="px-2 py-1 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={Logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          //   onClick={showCart}
        >
          <FaShoppingCart className="text-white text-2xl  cursor-pointer" />
          {/* {cartItems && cartItems.length > 0 && (
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">
                {cartItems.length}
              </p>
            </div>
          )} */}
          <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-orange-500 flex items-center justify-center">
            <p className="text-xs text-white font-semibold">
              {/* {cartItems.length} */}5
            </p>
          </div>
        </div>

        <Link to={"/"} className="flex items-center gap-2">
          <img src={Logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && user.email === "salamikhalil02@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}

              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={Logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
export default Header;