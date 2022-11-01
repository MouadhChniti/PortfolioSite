import "../styles/skillBar.css";




const SkillBar = (props) => {

    return (

        <div className="all-skillbar">

            <li className="skillbaricon"> {props.text} </li>
            
        </div>



    )
};

export default SkillBar;
