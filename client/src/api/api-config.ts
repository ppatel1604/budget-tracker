import { BackendHostName, FrontendHostName } from './HostName';

const setBackendHost = (): string => {
    const hostname = window && window.location && window.location.hostname;

    console.log(JSON.stringify(process.env.REACT_APP_BACKEND_SERVICE_HOST));

    switch (hostname) {
        case FrontendHostName.PRODUCTION:
            return BackendHostName.PRODUCTION;
        case FrontendHostName.STAGING:
            return BackendHostName.STAGING;
        case FrontendHostName.TEST:
            return BackendHostName.TEST;
        default:
            return (
                `${process.env.REACT_APP_BACKEND_HOST}` ||
                'https://localhost:5001'
            );
    }
};

const backendHost: string = setBackendHost();

export const API_ROOT = `${backendHost}`;
