import myPhoto from "../assets/my-image.jpg"
import { motion } from "framer-motion"

const HeroImage = ({variants}) => {
  return (
    <motion.div className="mask-gradient absolute top-0 right-0 h-[550px] w-full overflow-hidden rounded-bl-full rounded-br-full border-r-[10px] border-x-blue-500 bg-gray-700 md:h-[600px] md:w-[450px]"
      variants={variants}
    >
      <img src={myPhoto} alt="my-image" className="absolute bottom-0 left-1/2 w-[450px] -translate-x-1/2"></img>
    </motion.div>
  )
}  

export default HeroImage
