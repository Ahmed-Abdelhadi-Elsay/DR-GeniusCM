import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import YouTube from 'react-youtube';
import { FaChalkboardTeacher, FaPlay } from "react-icons/fa";
import ClassOneImg from "../assets/ImgMR1.jpg";
ReactModal.setAppElement('#root');

const ClassesComponentOne = () => {
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
            <section className="ClassOnePageSection">
                <div className="ClassOnePage">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="ClassOneImgEdit" src={ClassOneImg} alt="Mr Hadi" />
                        </div>
                        <div className="paragraph col-lg-6 px-4 align-self-center">
                            <h3 className="mb-3 fs-1">شرح منهج الصف الاول الثانوي لمادة الكيمياء.</h3>
                            <p>سنقدم لكم في هذه الدوره شرح مفصل لجميع الدروس ووحده وحده واختبارات لكل درس ووحده.</p>
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
                                        <h3>الكيمياء مركز العلوم</h3>
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
                                        <h3>الكيمياء الكميه</h3>
                                        <p><span><FaPlay className="IconVedio" /> 1</span> درس</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-between">
                                    <p><span><FaPlay className="IconVedio" /></span> التحليل الكيميائي</p>
                                    <button onClick={() => handleOpenModal('https://www.youtube.com/watch?v=VIDEO_ID_2')} className="btnWatch">مشاهدة</button>
                                </div>
                            </div>
                        </div>
                        {/* Item Three */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <FaChalkboardTeacher className="IconLesson fs-2 me-3" />
                                    <div className="nameGroupLesson text-right">
                                        <h3>المخاليط و الاحماض والقواعد</h3>
                                        <p><span><FaPlay className="IconVedio" /> 1</span> درس</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-between">
                                    <p><span><FaPlay className="IconVedio" /></span> الروابط الكيميائيه</p>
                                    <button onClick={() => handleOpenModal('https://www.youtube.com/watch?v=VIDEO_ID_3')} className="btnWatch">مشاهدة</button>
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

export default ClassesComponentOne;
