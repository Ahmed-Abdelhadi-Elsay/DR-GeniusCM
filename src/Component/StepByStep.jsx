import Imagesteps from "../assets/skills2.jpg";

import ImgstepOne from "../assets/Step1.svg";
import ImgstepTwo from "../assets/Step2.svg";
import ImgstepThree from "../assets/step3.svg";
export default function StepByStep(){
    return(
        <>
            <section className="sectionSteps">
                <div className="row text-center">
                    <div className="col-12 col-sm-7">
                        <img  className="Imagesteps" src={Imagesteps}  alt="STEP" />
                    </div>
                    <div className="col-12 col-sm-5 px-5">
                        <div className="firstParagraph">
                            <h3>خليك دحيح مع دكتور جينيس  </h3>
                            <p>هنا تقدر توصل لكل اللى محتاجه يا عزيزي</p>
                        </div>
                        <div className="secondParagraph d-flex mt-5">
                            <div className="steps px-4">
                                <img src={ImgstepOne} alt="stepOne" />
                                <h3>الفيديوهات عالية الجودة</h3>
                                <p>عشان تضمن راحة واستمتاع </p>
                            </div>
                            <div className="steps px-4">
                                <img src={ImgstepTwo} alt="stepOne" />
                                <h3>شرح مفصل لكل جزئية فى المنهج</h3>
                                <p>معاك خطوه بخطوه هتضمن ان مفيش ولا درجه هتروح منك مع الدوك</p>
                            </div>
                            <div className="steps px-4">
                                <img src={ImgstepThree} alt="stepOne" />
                                <h3>اختبارات لكل فيديو </h3>
                                <p>عشان نضمن ان المعلومة وصلت يا عزيزي</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}