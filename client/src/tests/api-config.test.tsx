import { BackendHostName, FrontendHostName } from '../api/HostName';

beforeEach(() => {
    jest.resetModules();
    delete process.env.REACT_APP_BACKEND_HOST;
});

test('should return production backend url for production frontend', () => {
    var config = setupTest(FrontendHostName.PRODUCTION);
    expect(config.API_ROOT).toEqual(BackendHostName.PRODUCTION);
});

test('should return staging backend url for staging frontend', () => {
    var config = setupTest(FrontendHostName.STAGING);
    expect(config.API_ROOT).toEqual(BackendHostName.STAGING);
});

test('should return test backend url for test frontend', () => {
    var config = setupTest(FrontendHostName.TEST);
    expect(config.API_ROOT).toEqual(BackendHostName.TEST);
});

test('should return development backend url for development frontend', () => {
    const config = setupTest('http://localhost:3000');
    expect(config.API_ROOT).toEqual('http://localhost:5000');
});

const setupTest = (hostName: string) => {
    setHostName(hostName);
    return require('../api/api-config');
};

const setHostName = (hostName: string) => {
    Object.defineProperty(window, 'location', {
        value: { hostname: hostName },
        writable: true,
    });
};
