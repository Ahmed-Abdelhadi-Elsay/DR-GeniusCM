import power from "../assets/animationlogin3.mp4"
export default function PowerSection(){
    return(
        <>
            <section>
                <div className="Mypower">
                    <div className="row">
                        <div className="colPowertext col-12 col-sm-6">
                            <div className="paragraph">
                                <h1 className="mt-4 fs-2">سهل تبقى جامد ، صعب تبقى دكتور هادي</h1>
                                <p className="fs-5">هنا يا عزيزي الطالب هتلاقى كل ما يخص منهجنا من شرح وحل واختبارات دورية</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                        <video 
                            src={power} 
                            autoPlay 
                            loop 
                            className="FotoPower"
                            style={{borderRadius:"10px"}}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}