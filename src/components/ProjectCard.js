import projImg1 from "../assets/img/project-img1.png"
import {Col} from "react-bootstrap";
export const ProjectCard = ({ title, description, imgURL }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                {/* <img src={imgURL} alt={title} /> */}
                <img src={projImg1} alt={title} />

                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};