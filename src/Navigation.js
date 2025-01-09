import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import CreateVideo from './screens/CreateVideo';
import InputText from './screens/InputText';
import AudioVideo from './screens/AudioVideo';
import Preview from './screens/Preview';
import BillingAddress from './screens/BillingAddress';
import PaymentMethod from './screens/PaymentMethod';
import PromoCode from './screens/PromoCode';
import PaymentSuccess from './screens/PaymentSuccess';
import Support from './screens/Support';
import Profile from './screens/Profile';
import MyVideos from './screens/MyVideos';
import SampleVideos from './screens/SampleVideos';
import About from './screens/About';
import Help from './screens/Help';
import DeleteConformation from './screens/DeleteConformation';
import HowToDelete from './screens/HowToDelete';
import NotFound from './screens/NotFound';
import TranscationHistory from './screens/TranscationHistory';
import Notification from './screens/Notification';
import IndivitualScreen from './screens/IndivitualScreen';
import MainHome from './screens/MainHome';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';


export default function Navigation() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/create-video' element={<CreateVideo />} />
                    <Route path='/input-text' element={<InputText />} />
                    <Route path='/audio-video' element={<AudioVideo />} />
                    <Route path='/preview' element={<Preview />} />
                    <Route path='/billing-address' element={<BillingAddress />} />
                    <Route path='/payment-method' element={<PaymentMethod />} />
                    <Route path='/promocode' element={<PromoCode />} />
                    <Route path='/payment-success' element={<PaymentSuccess />} />
                    <Route path='/support' element={<Support />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/my-videos' element={<MyVideos />} />
                    <Route path='/sample-videos' element={<SampleVideos />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/help' element={<Help />} />
                    <Route path='/delete-conformation' element={<DeleteConformation />} />
                    <Route path='/how-to-delete' element={<HowToDelete />} />
                    <Route path='/not-found' element={<NotFound />} />
                    <Route path='/transcation-histoy' element={<TranscationHistory />} />
                    <Route path='/notification' element={<Notification />} />
                    <Route path='/indivitual-screen' element={<IndivitualScreen />} />
                    <Route path='/main-home' element={<MainHome />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/signin' element={<SignIn/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

