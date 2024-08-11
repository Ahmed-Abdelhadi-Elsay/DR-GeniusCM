import skillTwo from "../assets/skillsColumn.jpg";
export default function Skills() {

    return (
        <>
            <section className="skillSection">
                <div className="MySkills">
                    <div className="row py-4">
                        <div className="colSkillstext col-12 col-sm-6 py-5">
                            <div className="paragraphSkills">
                                <h1 className="mt-5">الغرض من المنصة</h1>
                                <p className="fs-5 mb-3">الغرض منها هو معالجة اى قصور لطالب السنتر ، لو غبت تقدر تعوض الحصة ولو كان فى نقطة مش واضحة فى حصة السنتر تقدر ترجعلها تانى فى المنصة </p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                            <img className="FotoSkills" style={{borderRadius:"5px"}} src={skillTwo} alt="Mr: Hadi" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
