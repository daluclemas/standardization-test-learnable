import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <div className='footerContainer'>

           <div className="footerContent">
               <h3 className="footerHeaderText">
                   resource edge
               </h3>
               
               <p className="footerParagraph">
                  throw paperwork into the trash 
               </p>
           </div>


           <div className="footerContent">
               <ul className="socialMedias">
                   <li className="socialMediaLogo">
                        <a href=""><i className="fab fa-facebook"></i></a>
                   </li>

                   <li className="socialMediaLogo">

                        <a href=""><i className="fab fa-twitter"></i></a>

                   </li>

                   <li className="socialMediaLogo">

                    <a href=""><i className="fab fa-linkedin"></i></a>

                   </li>

                   <li className="socialMediaLogo">
                    <a href=""><i className="fab fa-instagram"></i></a>
                   </li>
               </ul>

               <p className="footerParagraph">
                   copyright &copy; <span>genesys devStudio. all</span> rights reserved.
               </p>
           </div>
        </div>
    )
}

export default Footer
