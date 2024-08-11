import { Link } from "react-router-dom";
import classOne from "../assets/skills2.jpg";
import classThree from "../assets/skills5.jpg";
import classTwo from "../assets/skills4.jpg";

import ImgMrOne from "../assets/ImgMR1.jpg";
import ImgMrTwo from "../assets/ImgMR2bg.jpeg";
import ImgMrThree from "../assets/ImgMR3bg.jpg";
import { FaArrowLeft } from 'react-icons/fa';
export default function Classes() {
    return(
        <>
            <section className="Classes" id="#Classes">
                <div className="title">
                    <p>المراحل الثانويه <FaArrowLeft className="ArrowTittle"/></p>
                </div>
                <div className="cardsAllClasses d-flex justify-content-center gap-3">
                    <div className="card text-bg-dark">
                            <img src={classOne} className="card-img" alt="..."/>
                            <div className="card-img-overlay d-flex justify-content-between mt-5">
                                <div className="InfoClassOne mt-5">
                                    <Link to={"/classOne"} className="LinkClassOne card-text"><FaArrowLeft className="OnlyClass"/> الصف الاول الثانوي</Link>
                                </div>
                                <img className="ImgMR" src={ImgMrOne} alt="wef" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">الكيمياء النانوية والقياس والمخاليط</h5>
                                <p className="card-text">شرح المنهج كامل مع وجود اسئله على كل درس وختبارات وحدات</p>
                            </div>
                                
                    </div>
                    <div className="card text-bg-dark">
                            <img src={classTwo} className="card-img" alt="..."/>
                            <div className="card-img-overlay d-flex justify-content-between mt-5">
                                <div className="InfoClassOne mt-5">
                                <Link to={"/classTwo"} className="LinkClassTwo card-text"><FaArrowLeft className="OnlyClass"/> الصف الثاني الثانوي</Link>
                                </div>
                                <img className="ImgMR" src={ImgMrThree} alt="wef" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">نظريات الذرة والتوزيع الالكترونى والجدول الدورى</h5>
                                <p className="card-text">شرح المنهج كامل مع وجود اسئله على كل درس وختبارات وحدات</p>
                            </div>
                                
                    </div>
                    <div className="card text-bg-dark">
                            <img src={classThree} className="card-img" alt="..."/>
                            <div className="card-img-overlay d-flex justify-content-between mt-5">
                                <div className="InfoClassOne mt-5">
                                <Link to={"/classThree"} className="LinkClassThree card-text"><FaArrowLeft className="OnlyClass"/> الصف الثالث الثانوي</Link>
                                </div>
                                <img className="ImgMR" src={ImgMrTwo} alt="wef" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">محتويات المنهج كاملًا </h5>
                                <p className="card-text">شرح المنهج كامل مع وجود اسئله على كل درس وختبارات وحدات</p>
                            </div>
                    </div>
                </div>          
            </section>
        </>
    )
}