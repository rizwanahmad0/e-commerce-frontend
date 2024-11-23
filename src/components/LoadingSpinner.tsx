
import React from 'react'


const LoadingSpinner: React.FC = () => {

    return (<>
        <div className="text-center">
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        </div>

    </>);
}

export default LoadingSpinner;