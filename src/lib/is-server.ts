const isServer = (): boolean => typeof window === 'undefined';
export default isServer;
