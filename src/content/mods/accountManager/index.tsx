import { createModMenu } from "@modApi";
import { AccountManager } from "./AccountManager";

const accountManager = () => {
        createModMenu('Аккаунты', <AccountManager />);
}

export default accountManager;