import velo from './../../../assets/bicycle.svg'
import finish from '../../../assets/finish-line.svg'

const IndexIndicator = (props) => {
    const slide = props.slide
    return (
        <div className="contaner-indicator">
            <div className="indicator">
                <div
                    className="avancement fade-in-left"
                    style={{ width: `${(slide + 1) * (100 / 7)}vw` }}
                ></div>
                <div
                    className={`${slide >= 5 ? 'finish fade-in-left' : 'velo fade-in-left'}`}
                    style={{ left: `calc(${(slide + 1) * (95 / 6)}vw - ${46 + slide * 20}px)` }}
                >
                    <img
                        src={slide >= 5 ? finish : velo}
                        alt="Vélo rose, TrainPreddict application pour la création de plan d'entrainement intelligent pour cycliste"
                    />
                </div>
                <div
                    className={`circle ${
                        slide === 0
                            ? 'active fade-in-left'
                            : slide > 1
                            ? 'passed one-six'
                            : 'passed three-six'
                    }`}
                >
                    1
                </div>
                <div
                    className={`circle ${
                        slide === 1
                            ? 'active fade-in-left'
                            : slide > 2
                            ? 'passed two-six'
                            : slide > 1
                            ? 'passed three-six'
                            : ''
                    }`}
                >
                    2
                </div>
                <div
                    className={`circle ${
                        slide === 2
                            ? 'active fade-in-left'
                            : slide > 3
                            ? 'passed three-six'
                            : slide > 2
                            ? 'passed four-six'
                            : ''
                    }`}
                >
                    3
                </div>
                <div
                    className={`circle ${
                        slide === 3
                            ? 'active fade-in-left'
                            : slide > 4
                            ? 'passed four-six'
                            : slide > 3
                            ? 'passed'
                            : ''
                    }`}
                >
                    4
                </div>
                <div
                    className={`circle ${
                        slide === 4
                            ? 'active fade-in-left'
                            : slide > 4
                            ? 'passed five-six'
                            : ''
                    }`}
                >
                    5
                </div>
                <div
                    className={`circle ${
                        slide === 5 || slide === 6
                            ? 'active fade-in-left'
                            : slide > 5
                            ? 'passed'
                            : ''
                    }`}
                >
                    6
                </div>
            </div>
        </div>
    )
}

export default IndexIndicator
