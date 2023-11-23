import useMediaQuery from "@/hooks/useMediaQuery"
import { SelectedPage } from "@/shared/types"
import ActionButton from "@/shared/ActionButton"
import HomePageText from "@/assets/HomePageText.png";
import bulb from "@/assets/bulb.svg"
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.5
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:pt-20 md:h-full md:pb-0"
    >
      {/* Image and main header */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="flex before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="home-page-text" />
                <motion.img
                  src={bulb}
                  alt="bulb_svg"
                  className="absolute bottom-2 -right-2 h-12 md:bottom-2 md:right-0 md:h-14"
                  style={{ rotate: 30 }}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 1110, scale: 1 }}
                  whileInView="visible"
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 50,
                    delay: 0.5,
                    duration: 0.6
                  }}
                  variants={{
                    hidden: { opacity: 0, y: -90 },
                    visible: { opacity: 1, y: 0 },
                  }}
                />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.div
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </motion.div>
            <motion.div
              transition={{ delay: 0.7, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                href={`${SelectedPage.ContactUs}`}
              >
                Learn more
              </AnchorLink>
            </motion.div>
          </motion.div>
        </div>
        {/* Image */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:t-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, y: 50, x: 70 },
            visible: { opacity: 1, y: 0, x: 0 },
          }}
        >
          <img src={HomePageGraphic} alt="home-page_graphic" />
        </motion.div>
      </motion.div>
      {/* Sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6 flex justify-center">
            <motion.div
              className="flex w-3/5 items-center justify-between gap-8"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.img alt="redbull-sponsor" src={SponsorRedBull} variants={item} />
              <motion.img alt="forbes-sponsor" src={SponsorForbes} variants={item} />
              <motion.img alt="fortune-sponsor" src={SponsorFortune} variants={item} />
            </motion.div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Home