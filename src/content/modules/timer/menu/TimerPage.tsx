import { Section } from "../../../core/menu/components/section/Section"
import { TimerCommon } from "./sections/TimerCommon";
import { TimerCustomization } from "./sections/TimerCustomization";
import { TimerHotkeys } from "./sections/TimerHotkeys";
import { TimerOther } from "./sections/TimerOther";

export const TimerPage = () => {
    return (
        <div>
            <Section>
                <TimerCommon />
                <TimerHotkeys />
                <TimerCustomization />
                <TimerOther />
            </Section>
        </div>
    )
}