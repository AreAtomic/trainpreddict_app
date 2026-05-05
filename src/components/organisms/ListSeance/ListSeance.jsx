import { Input, Card } from '../../atoms'
import { useState } from 'react'
import calendar from '../../../assets/calendar.svg'
import flag from '../../../assets/flag.svg'
import { CardSeanceList } from '../../molecules'

const ListSeance = (props) => {
    const [activeView, setActiveView] = useState('training')
    const [search, setSearch] = useState('')

    return (
        <div className="grid auto-rows-min justify-center pt-1 border-high-contrast-100 h-full">
            <div className="flex h-fit pb-6">
                <div
                    className={`${
                        activeView === 'training' ? 'active' : 'inactive'
                    } mx-2 mt-2`}
                    onClick={() => {
                        setActiveView('training')
                    }}
                >
                    <img
                        src={calendar}
                        alt="Calendrier icone, entrainement sur mesure par TrainPreddict"
                    />
                </div>
                <div
                    className={`${
                        activeView === 'race' ? 'active' : 'inactive'
                    } mx-2 mt-2`}
                    onClick={() => {
                        setActiveView('race')
                    }}
                >
                    <img
                        src={flag}
                        alt="Drapeau course icone, atteigner vos objectifs avec TrainPreddict"
                    />
                </div>
                <div className="mt-1">
                    <Input
                        className="w-11/12
                    h-fit
                    peer
                    invalid:ring
                    invalid:ring-high-contrast-500
                    invalid:border-0
                    invalid:text-high-contrast-50
                    py-1
                    px-3
                    text-low-contrast-500
                    bg-component-one-500 
                    border-2
                    border-low-contrast-500
                    rounded-md
                    active:ring-1
                    active:ring-medium-contrast-500
                    focus:ring-1
                    focus:ring-medium-contrast-500
                    focus:outline-none
                    hover:bg-component-one-400"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Recherche"
                    />
                </div>
            </div>
            <Card
                width="w-72"
                height=""
                className="scrollbar z-50 overflow-x-none"
            >
                {props.seances.map((item, index) => {
                    return (
                        <div onClick={() => props.setViewSeanceItem(item)}>
                            <CardSeanceList
                                titre={item.titre}
                                type={item.type}
                                temps={item.temps}
                                sse={item.sse}
                            />
                        </div>
                    )
                })}
            </Card>
        </div>
    )
}

export default ListSeance
