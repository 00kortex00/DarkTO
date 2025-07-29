import { createModMenu, createModElementInRoot } from "@modApi";
import { AccountManager } from "./AccountManager";

const accountManager = () => {
        createModMenu('Аккаунты', <div>123123</div>);
        createModElementInRoot(<AccountManager />)
}

export default accountManager;