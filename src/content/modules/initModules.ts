import accountManager from './accountManager';
import timer from './timer';

export const initModules = () => {
    accountManager();
    timer();
}