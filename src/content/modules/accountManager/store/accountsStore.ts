import { create, type StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import type { AccountsStore } from "./accountStoreTypes";
import { createAccountStoreActions } from "./accountStoreActions";

const accountsStore: StateCreator<AccountsStore> = ((set) => ({
    accounts: new Map(),
    ...createAccountStoreActions(set)
}))

export const useAccountsStore = create<AccountsStore>()(
    persist(
        accountsStore,
        {
            name: 'darkto__account-manager',
            storage: {
                getItem: (name) => {
                    const str = localStorage.getItem(name);
                    if(!str) return null;
                    return {
                        state: {
                            ...JSON.parse(str).state,
                            accounts: new Map(JSON.parse(str).state.accounts)
                        }
                    }
                },
                setItem: (name, newValue) => {
                    const str = JSON.stringify({
                        state: {
                            ...newValue.state,
                            accounts: Array.from(newValue.state.accounts.entries())
                        }
                    })
                    localStorage.setItem(name, str);
                },
                removeItem: (name) => localStorage.removeItem(name)
            }
        }
    )
);