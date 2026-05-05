const OnBoardingModal = (props) => {
    return (
        <div className={`absolute w-screen h-screen z-onboarding`}>
            <div className="w-full h-full bg-primary-blue-500 opacity-90 absolute"></div>
            <div className="w-screen h-5/6 absolute overflow-y-auto top-16 flex flex-col">
                {props.children}
            </div>
        </div>
    )
}

export default OnBoardingModal
