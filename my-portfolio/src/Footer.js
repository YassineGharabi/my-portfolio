import githubLogo from "./footerLogos/icons8-github-50.png";
import gmailLogo from "./footerLogos/icons8-gmail-50.png";
import linkedinLogo from "./footerLogos/icons8-linkedin-50.png";
export default function Footer(){
    return(
        <div className="footer">
            <img src={githubLogo} alt="" className="logos-footer" />
            <img src={gmailLogo} alt="" className="logos-footer" />
            <img src={linkedinLogo} alt="" className="logos-footer" />
        </div>
    );
}