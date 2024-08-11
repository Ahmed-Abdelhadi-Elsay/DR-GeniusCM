import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaMapMarker } from "react-icons/fa";
export default function NotFoundpage(){
    return(
        <>
            <section id="NotFoundpage" className="d-flex justify-content-center m-5 fs-1 text-center pt-5">
                <div>
                    <FaExclamationTriangle style={{color:"orange", marginBottom:"15px", fontSize:"4rem"}}/>
                    <h2>404 Not Found</h2>
                    <p>This page does not exist</p>
                    <Link to="/Home" className="Goback" style={{fontSize:"1.5rem"}}>Go Back</Link>
                </div>
            </section>
        </>
    )
}