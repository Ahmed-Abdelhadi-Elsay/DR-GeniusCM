import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import YouTube from 'react-youtube';
import { FaChalkboardTeacher, FaPlay, FaClock, FaNewspaper } from "react-icons/fa";
import ClassTwoImg from "../assets/FotobackgroundDark.jpg";
ReactModal.setAppElement('#root');

const ClassesComponentTwo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoId, setVideoId] = useState('');

    const handleOpenModal = (url) => {
        const videoId = new URL(url).searchParams.get('v');
        setVideoId(videoId);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setVideoId('');
    };

    const opts = {
        height: '390',
        width: '540',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <section className="ClassTwoPageSection">
                <div className="ClassTwoPage">
                    <div className="row">
                        <div className="fotoPageClassTwo col-lg-6">
                            <img className="ClassTwoImgEdit" src={ClassTwoImg} alt="Mr Hadi" />
                        </div>
                        <div className="paragraph col-lg-6 px-4 align-self-center">
                            <h3 className="mb-3 fs-1">شرح منهج الصف الثاني الثانوي لمادة الكيمياء.</h3>
                            <p>سنقدم لكم في هذه الدوره شرح مفصل لجميع الدروس ووحده وحده واختبارات لكل درس ووحده.</p>
                            <div className="timeAndlessons d-flex justify-content-center pt-5">
                                <p className="mx-4"><span><FaNewspaper className="ms-2" style={{ color: "#00a5a5" }} /></span>20 درس</p>
                                <p className="mx-4"><span><FaClock className="ms-2" style={{ color: "#00a5a5" }} /></span>5 ساعات</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vediosClassOne p-1 p-lg-5">
                <div className="title">
                    <h2 className="fs-1 mb-3">المنهج</h2>
                    <p className='TextLesson text-center pt-3'>الفصل الدراسي الأول</p>
                </div>
                <div className="contVedio">
                    <div className="accordion" id="accordionExample" style={{ direction: "ltr" }}>
                        {/* Item One */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <FaChalkboardTeacher className="IconLesson fs-2 me-3" />
                                    <div className="nameGroupLesson text-right">
                                        <h3>نظريات الذره والتوزيع الالكتروني</h3>
                                        <p><span><FaPlay className="IconVedio" /> 1</span> درس</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-between">
                                    <p><span><FaPlay className="IconVedio" /></span> الكيمياء مركز العلوم</p>
                                    <div className="btns d-flex justify-content-center align-items-center">
                                        <div className="btnQuiz me-4 text-center">
                                            <Link className='Quiz' to={"/quiz"}>اختبار الباب</Link>
                                        </div>
                                        <button onClick={() => handleOpenModal("https://www.youtube.com/watch?v=FPqxlfGQ7cQ")} className="btnWatch">مشاهدة</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Item Two */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <FaChalkboardTeacher className="IconLesson fs-2 me-3" />
                                    <div className="nameGroupLesson text-right">
                                        <h3>الجدول الدوري</h3>
                                        <p><span><FaPlay className="IconVedio" /> 1</span> درس</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-between">
                                    <p><span><FaPlay className="IconVedio" /></span> التحليل الكيميائي</p>
                                    <div className="btns d-flex justify-content-center align-items-center">
                                        <div className="btnQuiz me-4 text-center">
                                            <Link className='Quiz' to={"/quiz"}>اختبار الباب</Link>
                                        </div>
                                        <button onClick={() => handleOpenModal("https://www.youtube.com/watch?v=FPqxlfGQ7cQ")} className="btnWatch">مشاهدة</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ReactModal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Video Modal">
                <button className='btnCloseVedio mb-3' onClick={handleCloseModal}>Close</button>
                <YouTube videoId={videoId} opts={opts} />
            </ReactModal>
        </>
    );
};

export default ClassesComponentTwo;
