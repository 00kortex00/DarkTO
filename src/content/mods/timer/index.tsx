import { createModMenu } from "@modApi";
import { TimerPage } from "./menu/TimerPage";

const timer = () => {
        console.log('Timer mod running');
        createModMenu('Таймер', <TimerPage />);
}

export default timer;