import { routes } from '../shared/constants';

// import Homepage from './Homepage';
import Dashboard from './Dashboard';
import Welcome from './Welcome';
import LogIn from './LogIn';
import Portfolio from './Portfolio';
import AddCurrency from './AddCurrency';
import Wallets from './Wallets';
import History from './History';
import SecureBackup from './SecureBackup';
import Setting from './Settings';
import RestoreWallet from './RestoreWallet';
import Currency from './Currency';
import AccountSupport from './AccountSupport';

export default {
	// [routes.homepage]: Homepage,
	[routes.dashboardpage]: Dashboard,
	[routes.welcomepage]: Welcome,
	[routes.loginpage]: LogIn,
	[routes.portfoliopage]: Portfolio,
	[routes.addcurrencypage]: AddCurrency,
	[routes.walletspage]: Wallets,
	[routes.historypage]: History,
	[routes.securebackuppage]: SecureBackup,
	[routes.settingspage]: Setting,
	[routes.restorewalletpage]: RestoreWallet,
	[routes.currencypage]: Currency,
	[routes.accountsupportpage]: AccountSupport
};