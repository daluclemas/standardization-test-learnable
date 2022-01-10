import React from 'react';
import './ArtworkComponent.css';
import person from '../assets/std/person.svg';

import {motion} from 'framer-motion'

const ArtworkComponent = () => {

  const parentVariant = {
		visible:{
			opacity:1,
			transition:{
				when:"beforeChildren",
				staggerChildren:0.5,
				duration:1
			}
		},

		hidden:{
			opacity:0
			
		}
	}

	const kidVariant={
		visible:{
			opacity:1
		},
		
		hidden:{
			opacity:0
		}
	}





    return (
        <motion.div className='artworkContainer'  variants={parentVariant} animate="visible" initial="hidden">

          <motion.div className="textContainer">

            <motion.h1 className="headerText" variants={kidVariant}>throw paper work into the trash where it belongs.</motion.h1>

            <motion.p className="headerParagraph" variants={kidVariant}>
              eliminate all hassle involved in managing people operations by managing it.
            </motion.p>

          </motion.div>

          <motion.div className="imgContainer">

            <motion.img src={person} alt="person-logo" variants={kidVariant} />

          </motion.div>
            
        </motion.div>
    )
}

export default ArtworkComponent
