import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaArrowLeft } from 'react-icons/fa';
export default function Footer(){
    return(
        <>
            <footer className='Footer'>
                <div className="footme">
                    <div className="title text-light pt-3 me-3">
                        <p>تابعنا على مواقع التواصل الاجتماعي<FaArrowLeft className="ArrowTittle"/></p>
                    </div>
                    <div className="foot d-flex justify-content-center">
                        <div className="iconMedia">
                            <div className="facebook">
                                <FaFacebook className='iconFace'/>
                            </div>
                            <div className="twitter" style={{background:""}}>
                                <FaTwitter className='iconTwitter'/>
                            </div>
                            <div className="instagram">
                                <FaInstagram className='iconInsta'/>
                            </div>
                            <div className="youtube" style={{background:""}}>
                                <FaYoutube className='iconYout'/>
                            </div>
                        </div>
                    </div>
                    <div className="created text-center mt-5">
                        <p className='text-light pb-4'>Copyright © 2024 Createed by <span style={{color:"#00a5a5", fontSize:"20px"}}>Ahmed ELsay</span> All rights reserved</p>
                    </div>
                </div>
            </footer>
        </>
    )
}