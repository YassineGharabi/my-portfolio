
export default function Cardskill({image,title}){
    return(
        <div className="skill">
            <img src={image} alt="" className="skill-logo"/>
            <p className="skill-name">{title}</p>
        </div>
    );
}