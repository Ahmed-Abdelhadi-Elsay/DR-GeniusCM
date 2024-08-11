import FooterTopImg from "../assets/footerTop.svg"
export default function FooterTop(){
    return(
        <>
            <section className="SectionTopFooter">
                <div className="LearnScool">
                    <div className="row py-5 text-light">
                        <div className="col text-center">
                            <img src={FooterTopImg} alt="Learn" />
                        </div>
                        <div className="col align-self-center">
                            <h1 className="mb-4">موارد التعليم </h1>
                            <p className="fs-5 mb-5">توفّر منصة الدكتور جينيس العديد من االمذكرات والملخصات وايضا الكتب  معا الى التفوق.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}