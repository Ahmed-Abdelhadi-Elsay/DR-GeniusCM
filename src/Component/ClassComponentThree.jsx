import { useState } from 'react';
import ReactModal from 'react-modal';
import YouTube from 'react-youtube';
import { FaChalkboardTeacher, FaPlay, FaClock, FaNewspaper } from "react-icons/fa";
import vedioAnimation from "../assets/animationBig.mp4";

ReactModal.setAppElement('#root');

const ClassesComponentThree = () => {
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
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <>
            <section className="ClassThreePageSection">
                <video autoPlay loop muted className="background-video">
                    <source src={vedioAnimation} type="video/mp4" />
                </video>
                <div className="ClassThreePage">
                    <div className="text-center">
                        <div className="paragraph px-4 align-self-center">
                            <h3 className="mt-3 mb-3 fs-1">شرح منهج الصف الثالث الثانوي لمادة الكيمياء.</h3>
                            <p className='text-light'>سنقدم لكم في هذه الدورة شرح مفصل لجميع الدروس ووحدة وحدة واختبارات لكل درس ووحدة.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="vediosClassOne p-1 p-lg-5">
                <div className="title">
                    <h2 className="fs-1 mb-3">المنهج</h2>
                </div>
                <div className="contVedio">
                    <div className="accordion" id="accordionExample" style={{ direction: "ltr" }}>
                        {/* Item One */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    <FaChalkboardTeacher className="IconLesson fs-2 me-3" />
                                    <div className="nameGroupLesson text-right">
                                        <h3>العناصر الانتقاليه</h3>
                                        <p><span><FaPlay className="IconVedio" /> 1</span> درس</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-between">
                                    <p><span><FaPlay className="IconVedio" /></span> الكيمياء مركز العلوم</p>
                                    <button onClick={() => handleOpenModal("https://www.youtube.com/watch?v=FPqxlfGQ7cQ")} className="btnWatch">مشاهدة</button>
                                </div>
                            </div>
                        </div>
                        {/* Item Two */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <FaChalkboardTeacher className="IconLesson fs-2 me-3" />
                                    <div className="nameGroupLesson text-right">
                                        <h3>الكيمياء التحليليه</h3>
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
                                        <h3>الاتزان الكيميائي</h3>
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
                        {/* Item Four */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <FaChalkboardTeacher className="IconLesson fs-2 me-3" />
                                    <div className="nameGroupLesson text-right">
                                        <h3>الكيمياء الكهربيه</h3>
                                        <p><span><FaPlay className="IconVedio" /> 1</span> درس</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-between">
                                    <p><span><FaPlay className="IconVedio" /></span> الروابط الكيميائيه</p>
                                    <button onClick={() => handleOpenModal('https://www.youtube.com/watch?v=VIDEO_ID_4')} className="btnWatch">مشاهدة</button>
                                </div>
                            </div>
                        </div>
                        {/* Item Five */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    <FaChalkboardTeacher className="IconLesson fs-2 me-3" />
                                    <div className="nameGroupLesson text-right">
                                        <h3>العضويه</h3>
                                        <p><span><FaPlay className="IconVedio" /> 1</span> درس</p>
                                    </div>
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body d-flex justify-content-between">
                                    <p><span><FaPlay className="IconVedio" /></span> الروابط الكيميائيه</p>
                                    <button onClick={() => handleOpenModal('https://www.youtube.com/watch?v=VIDEO_ID_5')} className="btnWatch">مشاهدة</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal for YouTube videos */}
            <ReactModal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Video Modal">
                <button className='btnCloseVedio mb-3' onClick={handleCloseModal}>إغلاق</button>
                <YouTube videoId={videoId} opts={opts} />
            </ReactModal>
        </>
    );
};

export default ClassesComponentThree;
