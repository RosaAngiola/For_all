import {createBrowserRouter} from 'react-router-dom';
// welcome
import Welcome from '@pages/Welcome';
import Root from '@pages/Root';
// register
import RegisterAccessData from '@pages/register/AccessData';
import RegisterUserData from '@pages/register/UserData';
import RegisterPrivacy from '@pages/register/Privacy';
import RegisterUpload from '@pages/register/Upload';
// login
import Login from '@pages/login/Login';
import LoginOTP from '@pages/login/OTP';
// Wallet
import WalletHome from '@pages/wallet/Home';
import WalletSend from '@pages/wallet/Send';
import WalletReceive from '@pages/wallet/Receive';
import WalletLastTransaction from '@pages/wallet/LastTransaction';
// Market
import MarketHome from '@pages/market/Home';
import MarketBuy from '@pages/market/Buy';
import MarketSell from '@pages/market/Sell';
// Profile
import ProfileHome from '@pages/profile/Home';
import ProfileEditUserData from '@pages/profile/EditUserData';
import ProfileEditPassword from '@pages/profile/EditPassword';
import ProfileSupport from '@pages/profile/Support';
import ProfileFaq from '@pages/profile/Faq';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Welcome/>
    },
    {
        path: '/register',
        element: <Root/>,
        children : [
            {
                path: '/register',
                element: <RegisterAccessData/>
            },
            {
                path: '/register/UserData',
                element: <RegisterUserData/>
            },
            {
                path: '/register/Privacy',
                element: <RegisterPrivacy/>
            },
            {
                path: '/register/Upload',
                element: <RegisterUpload/>
            },
        ]
    },
    {
        path: '/login',
        element: <Root/>,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/login/OTP',
                element: <LoginOTP/>
            },
        ]
    },
    {
        path: '/wallet',
        element: <Root/>,
        children: [
            {
                path: '/wallet/Home',
                element: <WalletHome/>
            },
            {
                path: '/wallet/send',
                element: <WalletSend/>
            },
            {
                path: '/wallet/receive',
                element: <WalletReceive/>
            },
            {
                path: '/wallet/transaction',
                element: <WalletLastTransaction/>
            }
        ]
    },
    {
        path: '/market',
        element: <Root/>,
        children: [
            {
                path: '/market/home',
                element: <MarketHome/>
            },
            {
                path: '/market/buy',
                element: <MarketBuy/>
            },
            {
                path: '/market/sell',
                element: <MarketSell/>
            },
           
        ]
    },
    {
        path: '/profile',
        element: <Root/>,
        children: [
            {
                path: '/profile/home',
                element: <ProfileHome/>
            },
            {
                path: '/profile/EditUserData',
                element: <ProfileEditUserData/>
            },
            {
                path: '/profile/EditPassword',
                element: <ProfileEditPassword/>
            },
            {
                path: '/profile/Support',
                element: <ProfileSupport/>
            },
            {
                path: '/profile/Faq',
                element: <ProfileFaq/>
            },
           
        ]
    },
]);
export default router;