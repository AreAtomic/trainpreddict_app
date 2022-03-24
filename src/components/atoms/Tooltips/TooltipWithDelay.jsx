import Floater from 'react-floater'

const TooltipWithDelay = (props) => {
    return (
        <div>
            <Floater
                styles={{
                    floater: {
                        filter: 'none',
                    },
                    container: {
                        backgroundColor: '#0b274e',
                        borderRadius: 5,
                        color: '#ffe5f6',
                        filter: 'none',
                        minHeight: 'none',
                        maxWidth: 100,
                        padding: 10,
                        textAlign: 'left',
                    },
                    arrow: {
                        color: '#0b274e',
                        length: 8,
                        spread: 10,
                    },
                }}
                content={
                    <div className="bg-component-two-500">{props.text}</div>
                }
                event="hover"
                eventDelay={0.5}
                placement="top"
            >
                {props.children}
            </Floater>
        </div>
    )
}

export default TooltipWithDelay
