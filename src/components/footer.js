import "../styles/footer.css";
import Aos from 'aos';
import "aos/dist/aos.css";
import git from "../imgs/github-icon.png";
import lin from "../imgs/linkedin-icon.png";
import mail from "../imgs/mail-icon.png";






const Footer = (props) => {

    return (

        <div data-aos="fade-up" className="all-footer">
            <div className="footerAlign">
                <div className="first">
                    <div className="firstAlign">
                        <a href="https://github.com/MouadhChniti" target="_blank" rel="noreferrer"><img src={git} id="git" /></a>
                        <a href="https://www.linkedin.com/in/mouadh-chniti-75345b230/" target="_blank" rel="noreferrer"><img src={lin} id="lin" /></a>
                        <a href="https://mail.google.com/mail/u/0/#inbox/FMfcgxwJXxpcRrTSLbvrGlBFnfMCpSnL?compose=GTvVlcSKjgGkrWWDBVVGTkfnGZGtLllQPbZSrjDkbtcMkvLxJSlnDhTqrCPsjHdTqNhfhSzHmNGbZ" target="_blank" rel="noreferrer"><img src={mail} id="mail" /></a>
                    </div>
                </div>
                <div className="second">Mouadh Chniti</div>
                <div className="third"></div>
                <div>&copy;all right reserved to Mouadh CHNITI</div>
            </div>
        </div>



    )
};

export default Footer;
