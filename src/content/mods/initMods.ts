import accountManager from './accountManager';
import timer from './timer';

export const initMods = () => {
    accountManager();
    timer();
}