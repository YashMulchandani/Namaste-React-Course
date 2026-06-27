import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
    console.error('Error:', error);
    return (
        <div className="error">
            <h1>Oops! Something went wrong.</h1>
            <p>We are unable to fetch the data at the moment. Please try again later.</p>
            <p>Error Details: {error.status} : {error.statusText}</p>
        </div>
    );
}

export default Error;