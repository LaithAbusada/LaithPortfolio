import { Col } from "react-bootstrap";
import icon from "../assets/img/arrow-up-right-circle.svg";



export const ProjectCard = ({title,description,imgUrl,github}) => {

    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src ={imgUrl}/>
                <div className="proj-txtx">
                    <h4>
                        {title}
                    </h4>
                    <h6>
                        {description}
                    </h6>

                    <h6>
                        <a href = {github!== "" ? github : "https://github.com/LaithAbusada" }>
                        <img src = {icon} className = "projCard-img"></img>
                        </a>
                    </h6>
                   
                </div>
            </div>
        </Col>
    )
}