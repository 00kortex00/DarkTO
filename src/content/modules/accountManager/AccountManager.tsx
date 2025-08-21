import './AccountManager.css';
import { Account } from "./components/Acconut"
import { useAccountsStore } from './store/accountsStore';

export const AccountManager = () => {
    const { addAccount, accounts } = useAccountsStore();

    return (
        <div className="darkto__accountmanager">
            <h2>Управление аккаунтами</h2>
            <button
                className="darkto__accountmanager__add-account"
                onClick={addAccount}
            >
                Добавить текущий аккаунт
            </button>
            <div className='darkto__accountmanager__account-list'>
                {Array.from(accounts).map(([username, entranceHash]) => 
                <Account name={username} token={entranceHash} />)}
            </div>
        </div>
    )
}