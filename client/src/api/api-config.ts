import { BackendHostName, FrontendHostName } from './HostName';

const setBackendHost = (): string => {
    const hostname = window && window.location && window.location.hostname;

    console.log(JSON.stringify(process.env));

    switch (hostname) {
        case FrontendHostName.PRODUCTION:
            return BackendHostName.PRODUCTION;
        case FrontendHostName.STAGING:
            return BackendHostName.STAGING;
        case FrontendHostName.TEST:
            return BackendHostName.TEST;
        default:
            return (
                `${process.env.REACT_APP_API_URL}` || `${hostname}` || 'https://localhost:5001'
            );
    }
};

const backendHost: string = setBackendHost();

console.log(backendHost);

export const API_ROOT = `${backendHost}`;
