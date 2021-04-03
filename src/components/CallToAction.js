import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

const CallToAction = ({ link = '/', text }) => {
    // let history = useHistory();

    return (
        <Link to={link}>
            <button className='primary-btn'>
                {text}
            </button>
        </Link>
        // <button onClick={() => history.push(link)}>
        //     {text}
        // </button>
    );
};

export default CallToAction;
