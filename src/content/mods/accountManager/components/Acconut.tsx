import './Accounts.css';

import { Trashcan } from "@src/icons";
import type { FC } from "react";
import { useAccountsStore } from '../store/accountsStore';

interface AccountProps {
    name: string;
    token: string;
}

export const Account: FC<AccountProps> = ({ name, token }) => {
    const { removeAccount } = useAccountsStore();

    function changeAccount() {
        localStorage.setItem('entrance_hash_key', token);
        window.location.reload();
    }

    return (
        <div className='darkto__accountmanager__account'>
            <button
                className='darkto__accountmanager__account-name'
                onClick={changeAccount}
            >
                {name}
            </button>

            <button
                className='darkto__accountmanager__delete-account'
                onClick={() => removeAccount(name)}
            >
                <Trashcan />
            </button>
        </div>
    )
}