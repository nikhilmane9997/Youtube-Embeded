import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
function Home() {
   let iconsize= "iconssize"
   let iconcol="anchor"
    return (
        <>
          <div className="">
              <div className="NameDesc">I AM NIKHIL MANE  </div>
              <div className="WorkDesc">I'm a Bangalore based Web Developer.</div>
              <div className="FindMeCenter">
              <div className="FindMe" >
             <a href="https://www.facebook.com/nikhil.mane.399/" target="_blanck" className={iconcol}><FacebookIcon className={iconsize} /></a> &emsp;
             <a href="https://www.instagram.com/nikhil_mane56/" target="_blanck" className={iconcol}><InstagramIcon className={iconsize}/></a>  &emsp;
             <a href="https://www.linkedin.com/in/nikhil-mane-a9948717a/" target="_blanck" className={iconcol}><LinkedInIcon className={iconsize}/></a>  &emsp;
             <a href="https://github.com/nikhilmane9997" target="_blanck" className={iconcol}><GitHubIcon className={iconsize}/> </a> &emsp;
             <a href="https://www.whatsapp.com/" target="_blanck" className={iconcol}><WhatsAppIcon className={iconsize}/></a> 
              </div>
              </div>
             
          </div>  
        </>
    )
}

export default Home
