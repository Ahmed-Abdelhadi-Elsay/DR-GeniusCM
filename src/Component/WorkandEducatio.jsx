import { FaArrowLeft } from 'react-icons/fa';
import BigNews from "../assets/اكتشف.svg";
import JoinUsImg from "../assets/التحق.svg";
import LearnImg from "../assets/تعلم.svg";
import TopDegreeImg from "../assets/اعلى الدرجات.svg";
export default function WorkandEducatio(){
    return(
        <>
            <div className="contentWork">
                <div className="LearnWork d-flex justify-content-center">
                    <div className="here px-3">
                        <p>هنا تبدا رحلتك في تعلم الكيمياء</p>
                        <FaArrowLeft className='ArrowLeft'/>
                    </div>
                    <div className="BigNews px-3">
                        <img src={BigNews} alt="BigNews" />
                        <h3>اكتشف</h3>
                        <p>مخرجات التعلم وافكار العصف الذهنى من خلال فيديوهات الشرح</p>
                    </div>
                    <div className="JoinUs px-3">
                        <img src={JoinUsImg} alt="JoinUs" />
                        <h3>التحق</h3>
                        <p>بمنصتنا لانها الاكثر تطورًا بين كل المنصات</p>
                    </div>
                    <div className="Learn px-3">
                        <img src={LearnImg} alt="Learn" />
                        <h3>تعلم</h3>
                        <p>مع مستر هادي الكيمياء في شوال يا بطل</p>
                    </div>
                    <div className="TopDegree px-3">
                        <img src={TopDegreeImg} alt="TopDegree" />
                        <h3>هتقفل</h3>
                        <p>مش هنسيبك الا اما تبقي وحش في الكيمياء</p>
                    </div>
                </div>
            </div>
        </>
    )
}