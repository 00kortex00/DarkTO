import { createModMenu, createModElementInRoot } from "@modApi";
import { TimerPage } from "./menu/TimerPage";
import { Timer } from "./Timer";

const timer = () => {
        createModMenu('Таймер', <TimerPage />);
        createModElementInRoot(<Timer />);
}

export default timer;