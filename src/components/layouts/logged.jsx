import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Bottom, Header } from '../molecules'
import { OnBoarding } from '../organisms'
import { OnBoardingContext } from '../../contexts/onboardingContext'

const LoggedLayout = (props) => {
    const onBoardingContext = useContext(OnBoardingContext)

    return (
        <div>
            {onBoardingContext.fetched && !onBoardingContext.complete && (
                <OnBoarding toast={props.toast} />
            )}
            <Navbar />
            <Header />
            <main
                className="z-50 justify-between pt-16 pb-10 overflow-x-hidden overflow-y-scroll rounded-sm lg:hidden xl:hidden 2xl:hidden sm:flex md:flex bg-component-one-500 border-b-1 rounded-b-3xl"
                style={{
                    height: 'calc(100vh - 56px)',
                    marginTop: '0px',
                }}
            >
                <Outlet />
            </main>
            <main className="z-50 justify-between hidden h-screen pt-16 pb-10 overflow-x-hidden overflow-y-scroll rounded-sm lg:flex xl:flex 2xl:flex sm:hidden md:hidden bg-component-one-500 border-b-1 rounded-b-3xl">
                <Outlet />
            </main>
            <Bottom />
        </div>
    )
}

export default LoggedLayout
