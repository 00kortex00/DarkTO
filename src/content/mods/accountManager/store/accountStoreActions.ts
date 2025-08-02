import type { AccountsStore, AccountsStoreActions } from "./accountStoreTypes";

type createAccountStoreActions = (
    set: {
    (partial: AccountsStore | Partial<AccountsStore> | ((state: AccountsStore) => AccountsStore | Partial<AccountsStore>), replace?: false): void;
    (state: AccountsStore | ((state: AccountsStore) => AccountsStore), replace: true): void;
}
) => AccountsStoreActions;

export const createAccountStoreActions: createAccountStoreActions = (set) =>  ({
    addAccount: () => {
        const usernameElem: HTMLSpanElement | null = document.querySelector('.UserInfoContainerStyle-userNameRank');
        if(!usernameElem) return;
        const usernameWithClanText = usernameElem.innerText.split(' ');
        const username = (usernameWithClanText.length === 1)?usernameWithClanText[0] : usernameWithClanText[1];
        const entranceHash = localStorage.getItem('entrance_hash_key');

        if(!(username && entranceHash)) return;

        set((prev) => {
            const newAccountsMap = new Map(prev.accounts);
            newAccountsMap.set(username, entranceHash);
            return({ accounts: newAccountsMap });
        })
    },
    removeAccount: (accountNameToRemove) => set((prev) => {
        const newAccountsMap = new Map(prev.accounts);
        newAccountsMap.delete(accountNameToRemove);
        return({ accounts: newAccountsMap });
    })
})