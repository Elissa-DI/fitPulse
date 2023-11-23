import ActionButton from "@/shared/ActionButton";
// import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div>
          <div>
            <h1 className="basis-3/5 font-montserrat text-3xl font-bold"></h1>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits