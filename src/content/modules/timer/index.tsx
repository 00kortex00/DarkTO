import { createModuleMenu, createModuleElementInRoot } from "@src/content/core/modulesApi";
import { TimerPage } from "./menu/TimerPage";
import { Timer } from "./Timer";

const timer = () => {
        createModuleMenu('Таймер', <TimerPage />);
        createModuleElementInRoot(<Timer />);
}

export default timer;