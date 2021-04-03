import { BackendHostName, FrontendHostName } from './HostName';

const setBackendHost = (): string => {
    const hostName = window && window.location && window.location.hostname;

    switch (hostName) {
        case FrontendHostName.PRODUCTION:
            return BackendHostName.PRODUCTION;
        case FrontendHostName.STAGING:
            return BackendHostName.STAGING;
        case FrontendHostName.TEST:
            return BackendHostName.TEST;
        default:
            return (
                process.env.REACT_APP_BACKEND_HOST || 'http://localhost:5000'
            );
    }
};

const backendHost: string = setBackendHost();

export const API_ROOT = `${backendHost}`;
