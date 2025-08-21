export interface AccountsStoreValues {
    accounts: Map<string, string>;
}

export interface AccountsStoreActions {
    addAccount: () => void;
    removeAccount: (accountName: string) => void;
}

export type AccountsStore = AccountsStoreValues & AccountsStoreActions;