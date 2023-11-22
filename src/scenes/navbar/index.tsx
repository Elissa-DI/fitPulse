import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
// import useMediaQuery from "@/hooks/useMediaQuery";
// import ActionButton from "@/shared/ActionButton";


type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    return (
        <nav>
            <div
              className={`${flexBetween} fixed top-0 z-30 w-full py-6`}
            >
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img src={Logo} alt="logo" />
                        <div className={`${flexBetween} w-full`}>
                            {/* links */}
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link 
                                  page="home"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                  page="Benefits"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                                />
                                <Link
                                  page="Our Classes"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                  page="Contact us"
                                  selectedPage={selectedPage}
                                  setSelectedPage={setSelectedPage}
                                />
                            </div>
                            {/* Registering */}
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign in</p>
                                <button>Become a member</button>
                            </div>
                        </div>
                    </div>                                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar