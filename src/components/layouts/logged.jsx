import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Bottom, Header } from '../molecules'
import { OnBoarding } from '../organisms'
import OnBoardingContext from '../../contexts/onboardingContext'

const LoggedLayout = () => {
    const onBoardingContext = useContext(OnBoardingContext)

    return (
        <div>
            {onBoardingContext.fetched && !onBoardingContext.complete && (
                <OnBoarding />
            )}
            <Navbar />
            <Header />
            <main
                className="lg:hidden xl:hidden 2xl:hidden sm:flex md:flex justify-between bg-component-one-500 pt-16 pb-10 rounded-sm z-50 border-b-1 overflow-y-scroll rounded-b-3xl overflow-x-hidden"
                style={{
                    height: 'calc(100vh - 56px)',
                    marginTop: '0px',
                }}
            >
                <Outlet />
            </main>
            <main className="hidden lg:flex xl:flex 2xl:flex sm:hidden md:hidden justify-between bg-component-one-500 pt-16 pb-10 rounded-sm z-50 border-b-1 overflow-y-scroll rounded-b-3xl h-screen overflow-x-hidden">
                <Outlet />
            </main>
            <Bottom />
        </div>
    )
}

export default LoggedLayout
