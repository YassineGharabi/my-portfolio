import Cardskill from "./Cardskill";
import htmlLogo from "./logos/html.png";
import cssLogo from "./logos/css.png";
import jsLogo from "./logos/javascript.png";
import bootLogo from "./logos/bootstrap.png";
import reactLogo from "./logos/react.png";
import phpLogo from "./logos/php.png";
import laravelLogo from "./logos/laravel.png";
import mysqlLogo from "./logos/mysql.png";

export default function Skills(){

    const data = [
        {logo:htmlLogo,title:"Html"},
        {logo:cssLogo,title:"Css"},
        {logo:jsLogo,title:"Java Script"},
        {logo:bootLogo,title:"Bootstarp"},
        {logo:reactLogo,title:"React"},
        {logo:phpLogo,title:"Php"},
        {logo:laravelLogo,title:"Laravel"},
        {logo:mysqlLogo,title:"Mysql"},
    ];

    const skills = data.map((el,index)=><Cardskill image={el.logo} title={el.title} key={index}/>);

    return(
        <div className="skills container">
        <h2 className="title-skill">what i can do!</h2>
        <div className="skill-cards">
            {skills}
        </div>
        </div>
    );
}