import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data/QuizData.json';
import VedioAnimation from "../assets/animationTest.mp4";

const QuizPage = () => {
    const [questions, setQuestions] = useState(quizData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState('');
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(50); // مدة التايمر بالثواني
    const [testStarted, setTestStarted] = useState(false); // حالة لبدء الاختبار
    const navigate = useNavigate();

    useEffect(() => {
        const handleBeforeUnload = (event) => {
            if (testStarted) {
                const confirmationMessage = 'الامتحان سيغلق وستظهر النتيجة إذا غادرت الصفحة. هل تريد المتابعة؟';
                event.preventDefault();
                event.returnValue = confirmationMessage; // For modern browsers
                return confirmationMessage; // For older browsers
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [testStarted]);

    useEffect(() => {
        if (timer > 0 && testStarted) {
            const interval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(interval);
        } else if (timer <= 0) {
            handleSubmit();
        }
    }, [timer, testStarted]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    const handleAnswer = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (questions[currentQuestionIndex]?.answer === selectedOption) {
            setScore(score + 1);
        }
        setSelectedOption('');
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePrevious = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        navigate('/result', { state: { score } });
    };

    const startTest = () => {
        setTestStarted(true);
    };

    if (currentQuestionIndex >= questions.length) {
        handleSubmit();
        return null;
    }

    const totalQuestions = questions.length;
    const questionsAnswered = currentQuestionIndex + 1;

    return (
        <div className="quiz-container">
            {!testStarted ? (
                <div className='contenStartTest'>
                    <video className="animation-video" autoPlay muted loop>
                        <source src={VedioAnimation} type="video/mp4" />
                    </video>
                    <h1 className='text-center'>اختبار الكيمياء الباب الاول (1ث)</h1>
                    <button className='StartTest mt-5' onClick={startTest}>ابدأ الاختبار</button>
                </div>
            ) : (
                <div className='contentQuiz'>
                    <div className="timerAndQuistion d-flex justify-content-between align-items-center">
                        <p className='CountQuistion'>{questionsAnswered}/{totalQuestions}</p>
                        <p className='Timer'>الوقت المتبقي: {formatTime(timer)}</p>
                    </div>
                    {questions.length > 0 && (
                        <div className="question-section">
                            <h2 className='Quistion text-center mb-4'>{questions[currentQuestionIndex].question}</h2>
                            <div className="options">
                                {questions[currentQuestionIndex].options.map((option, index) => (
                                    <button
                                        id='Options'
                                        key={index}
                                        onClick={() => handleAnswer(option)}
                                        className={selectedOption === option ? 'selected' : ''}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            <div className='navigation-buttons'>
                                <button onClick={handleNext} disabled={!selectedOption} className='Next'>
                                    التالي
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizPage;
