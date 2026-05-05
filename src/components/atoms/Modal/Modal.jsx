import close from '../../../assets/ico-close.svg'

const Modal = (props) => {
    return (
        <div
            className={`fixed w-full h-full top-0 z-50 ${
                props.visible ? '' : 'hidden'
            }`}
        >
            <div className="w-full h-full bg-primary-blue-500 opacity-40 absolute"></div>
            <div className="w-11/12 h-5/6 bg-component-one-500 absolute py-4 px-6 top-16 left-14 xs:left-4 overflow-y-auto scrollbar max-w-screen">
                <div className="w-fit absolute right-5 top-3">
                    <img
                        src={close}
                        alt="Close icon, trainpreddict application pour cyclistes"
                        onClick={() => {
                            props.onClose()
                        }}
                        className="cursor-pointer"
                    />
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal
