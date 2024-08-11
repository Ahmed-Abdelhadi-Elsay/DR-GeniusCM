import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft } from 'react-icons/fa';
import studentsData from '../data/ImageGoodStudent.json';
import Confetti from 'react-confetti';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
};

export default function GoodStudent() {
    const [students, setStudents] = useState({});
    const [showConfetti, setShowConfetti] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        setStudents(studentsData);

        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    setShowConfetti(true);
                } else {
                    setShowConfetti(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showConfetti && (
                <div className="confetti-container">
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        gravity={0.3}
                        recycle={false}
                        numberOfPieces={300}
                    />
                </div>
            )}
            <section className="StudentSection" id="GoodStudent" ref={sectionRef}>
                <div className="conStudent">
                    <div className="title">
                        <p>نحن دائما فخورون بكم <FaArrowLeft className="ArrowTittle" /></p>
                    </div>
                    <div className="row justify-content-center">
                        {['firstYear', 'secondYear', 'thirdYear'].map((year, index) => (
                            <div className="col" key={index}>
                                <div className="slider">
                                    <Slider {...settings}>
                                        {students[year] && students[year].map((student, idx) => (
                                            <div key={idx} className="student-slide">
                                                <div className="student-image">
                                                    <img src={student.image} alt={student.name} />
                                                </div>
                                                <div className="student-info text-center mt-4">
                                                    <p>{student.name}</p>
                                                    <p className='firstStudent'>{`أوائل الصف ${index + 1} الثانوي لعام 2024`}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}



