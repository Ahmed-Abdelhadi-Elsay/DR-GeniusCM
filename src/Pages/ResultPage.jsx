import { useLocation } from 'react-router-dom';

const ResultPage = () => {
const location = useLocation();
const { score } = location.state || { score: 0 };

return (
    <div className="result-container">
        <h1>درجت الاختبار</h1>
        <p className='mt-4 fs-3'>درجتك: {score}</p>
    </div>
);
};

export default ResultPage;
