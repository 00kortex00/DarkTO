import { createModuleMenu } from "@src/content/core/modulesApi";
import { AccountManager } from "./AccountManager";

const accountManager = () => {
        createModuleMenu('Аккаунты', <AccountManager />);
}

export default accountManager;