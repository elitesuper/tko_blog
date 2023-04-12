import React from 'react';
import '../index.css';
import butter from '../butter-b.png'
import { Link } from 'react-router-dom'
import  twitter  from '../twitter.svg'
import facebook from '../facebook.svg'
// import patreon from '../patreon.png'
import apple from '../apple.svg'
import spotify from '../spotify.svg'

const Footer = () => (
  <footer className="home-footer">
    <div className="footer-content">
      <p className='footer-text'>Powered by </p>
      <Link to ="https://buttercms.com" className='butter-link'>
      <img src={butter} alt='butter logo' className='butter' /></Link>
    </div>
    <div className="social-links">
      <Link to="https://twitter.com/TKO_RAJIO" target="_blank">
        <img src={twitter} width="40" height="40" alt="twitter logo" />
      </Link>
      <Link to="https://www.facebook.com/tkorajio/" target="_blank">
        <img src={facebook} width="40" height="40" alt="facebook logo" />
      </Link>
      {/* <Link to="https://www.patreon.com/TKOrajio" target="_blank">
        <img src={patreon} width="30" height="30" alt="patreon logo" />
      </Link> */}
      <Link to="https://podcasts.apple.com/ca/podcast/tko-radio-japan-and-japanese-culture-lifestyle/id1501468114" target="_blank">
        <img src={apple} className="listen-icon" alt="apple link" />
      </Link>
      <Link to="https://open.spotify.com/show/066N60szxsXusAJD8ZrkAz?si=WypBsbHvTCeBy8gl8Q2ibQ" target="_blank">
        <img src={spotify} className="listen-icon" alt="spotify link" />
      </Link>
    </div>
  </footer>
)

export default Footer;