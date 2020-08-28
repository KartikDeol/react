import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const modal = {
  hidden: {
    y: "-100vh",
    opacity: 0
  },
  visible: {
    y: "100px",
    opacity: 1,
    transition: { delay: 0.5 }
  }
}

const Modal = ({ showModal, setShowModal }) => {
	return (
		<AnimatePresence exitBeforeEnter>
			{ showModal && (
         <motion.div className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"  
          exit="hidden"        
         >
           <motion.div className="modal"
            variants={modal}
           >
              <p>Wanna make another pizza?</p>
                <img src={'https://images-na.ssl-images-amazon.com/images/I/71%2BpiGQkfrL._AC_SX466_.jpg'} alt="boohoo"/>
              <Link to="tel:0">  
                <button>Order</button>
              </Link>  
              <Link to="/">
                <button onClick={() => setShowModal(false)}>Start Agian</button>
              </Link>
              
           </motion.div>

         </motion.div>
			)}
		</AnimatePresence>
	)
}

export default Modal;