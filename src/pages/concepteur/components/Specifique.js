import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { ButtonSecondaryExtraSmall } from '../../../components'

// Changer la liste de blocs
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

// Styles des blocs
const grid = 2
const minutevh = 1.5

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: 'none',
    height: 'auto',
    padding: 0,
    margin: `0 ${grid}px 0 0`,
    position: 'relative',
    bottom: 0,

    // change background colour if dragging
    background: isDragging ? '#334F76' : '',

    // styles we need to apply on draggables
    ...draggableStyle,
})

// Styles du graphe
const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? '#1d84b5' : '#334F76',
    display: 'flex',
    padding: '0',
    margin: '0 0 0 6.6%',
    overflow: 'auto',
    alignItems: 'flex-end',
    height: '220px',
    width: window.innerWidth * 0.83,
})

class Specifique extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // Partie modification de la séance
            items: props.specifique,
            changingItem: null,
            // Partie sauvegarde de blocs
            saving: false,
            savingItems: [],
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    componentDidUpdate(prevProps) {
        // Import d'un bloc depuis la liste
        if (this.props.specifique.length !== prevProps.specifique.length) {
            this.setState({ ...this.state, items: this.props.specifique })
        }
    }

    onDragEnd(result) {
        const { source, destination } = result
        // Supression d'un bloc
        if (!destination) {
            this.props.onDelete(source.index)
            return
        }

        // Changer la liste de bloc et mettre à jour
        const items = reorder(this.state.items, source.index, destination.index)
        this.setState({
            ...this.state,
            items,
        })
        this.props.onChange(items)
        this.forceUpdate()
    }

    changeProperties = (index) => {
        if (this.state.saving) {
            this.setState({
                ...this.state,
                // Changer donnée de l'item sélectionné
                changingItem: {
                    zone: this.state.items[index].split(':')[0][1],
                    temps: `${this.state.items[index].split(':')[1]}:${
                        this.state.items[index].split(':')[2]
                    }:${this.state.items[index].split(':')[3]}`,
                    index: index,
                },
                saving: this.state.saving,
                savingItems: [
                    ...this.state.savingItems,
                    this.state.items[index],
                ],
            })
        } else {
            this.setState({
                ...this.state,
                // Changer donnée de l'item sélectionné
                changingItem: {
                    zone: this.state.items[index].split(':')[0][1],
                    temps: `${this.state.items[index].split(':')[1]}:${
                        this.state.items[index].split(':')[2]
                    }:${this.state.items[index].split(':')[3]}`,
                    index: index,
                },
                saving: this.state.saving,
                savingItems: [this.state.items[index]],
            })
        }
        this.props.onChange(this.state.items)
    }

    renderBloc = (item, index, grad) => {
        // Initialisation de la taille et de la largeur
        const height = item.split(':')[0][1] * 27
        const width =
            item.split(':')[1] * 60 * minutevh +
            item.split(':')[2] * 1 * minutevh +
            item.split(':')[3] * 0.01 * minutevh

        // Calcul du temps de départ du bloc pour l'échelle
        let arrayToRender = []
        if (grad) {
            let timePred = [0, 0, 0]
            for (let i = 0; i < index; i++) {
                timePred[0] =
                    parseInt(this.state.items[i].split(':')[1]) +
                    parseInt(timePred[0])
                timePred[1] =
                    parseInt(this.state.items[i].split(':')[2]) +
                    parseInt(timePred[1])
                timePred[2] =
                    parseInt(this.state.items[i].split(':')[3]) +
                    parseInt(timePred[2])

                // Gestion chengement minutes et heures
                if (timePred[2] > 60) {
                    timePred[2] = timePred[2] % 60
                    timePred[1] += 1
                }
                if (timePred[1] > 60) {
                    timePred[1] = timePred[1] % 60
                    timePred[0] += 1
                }
            }

            // Récupération du temps du bloc d'avant pour affichage
            timePred.forEach((el, index) => {
                timePred[index] = el > 9 ? `${el}` : `0${el}`
            })

            let time = index > 0 ? item.split(':') : ['00', '00', '00']
            let starttime =
                timePred[0] * 60 + timePred[1] * 1 + timePred[2] * 0.01
            let endtime =
                starttime + time[1] * 60 + time[2] * 1 + time[3] * 0.01

            // Echelle de temps
            arrayToRender = [
                `${
                    timePred[0] > 10 || timePred[0].length === 2
                        ? timePred[0]
                        : `0${timePred[0]}`
                }:${`${
                    timePred[1] > 10 || timePred[1].length === 2
                        ? timePred[1]
                        : `0${timePred[1]}`
                }`}`,
            ]

            for (let i = starttime + 20; i < endtime; i += 20) {
                let hours = parseInt(i / 60)
                let min = parseInt(i % 60)
                arrayToRender.push(
                    `${hours > 9 ? hours : `0${hours}`}:${
                        min > 9 ? min : `0${min}`
                    }`
                )
            }
        }

        return (
            <div
                style={{
                    position: 'relative',
                    width: `${width}vh`,
                    height: `${grad ? height + 25 : height}px`,
                }}
                onClick={() => {
                    this.changeProperties(index)
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        content: '',
                        background: `var(--zone-${item.split(':')[0][1]})`,
                        height: `${height}px`,
                        width: `${width}vh`,
                        overflow: 'hidden',
                        color: '#000033',
                    }}
                >
                    {item}
                </div>
                {grad ? (
                    <div className="graduation-creation">
                        {arrayToRender.map((item) => {
                            return (
                                <div
                                    style={{
                                        width: `${100 / arrayToRender.length}%`,
                                    }}
                                >
                                    {(width * window.innerWidth) / 90 < 45 &&
                                    index !== 0 ? (
                                        index ===
                                        this.state.items.length - 1 ? (
                                            item
                                        ) : (
                                            <span
                                                style={{ color: 'transparent' }}
                                            >
                                                {item}
                                            </span>
                                        )
                                    ) : (
                                        item
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ) : null}
            </div>
        )
    }

    render() {
        return (
            <div className="column specifique-container" id="container-chart">
                <div
                    className={`toggle-select ${
                        this.state.saving ? 'active' : ''
                    }`}
                    onClick={() => {
                        this.setState({
                            ...this.state,
                            saving: !this.state.saving,
                        })
                    }}
                >
                    <span className={this.state.saving ? '' : 'toggle-active'}>
                        Édition séance
                    </span>
                    <span
                        className={
                            this.state.saving ? 'toggle-active left' : ''
                        }
                    >
                        Sauvegarde bloc
                    </span>
                    <div
                        className={`toggle-main ${
                            this.state.saving ? 'active' : ''
                        }`}
                    />
                </div>
                <div className="column">
                    <div
                        className={`bloctosave ${
                            this.state.saving ? 'active' : ''
                        }`}
                    >
                        <div className="blocs">
                            {this.state.savingItems.map((item, i) => {
                                return (
                                    <div
                                        onClick={() => {
                                            let new_blocs_save =
                                                this.state.savingItems
                                            this.setState({
                                                ...this.state,
                                                savingItems: new_blocs_save
                                                    .slice(0, i)
                                                    .concat(
                                                        new_blocs_save.slice(
                                                            i + 1,
                                                            new_blocs_save.length
                                                        )
                                                    ),
                                            })
                                        }}
                                    >
                                        {this.renderBloc(item, i, false)}
                                    </div>
                                )
                            })}
                        </div>
                        <div className="mt-1"></div>
                        <ButtonSecondaryExtraSmall
                            nom="Enregistrer"
                            onClick={() => {
                                this.props.onSaveBloc(this.state.savingItems)
                            }}
                        />
                    </div>
                </div>
                <div
                    className={`inputs ${
                        this.state.saving && this.state.items.length > 0
                            ? 'untouch'
                            : ''
                    }`}
                >
                    {this.state.changingItem !== null ? (
                        <div className="form chart-container">
                            <div className="field-chart-container">
                                <label className="label">Zone</label>
                                <div className="columns">
                                    <button
                                        onClick={() => {
                                            // Décrémentation de la zone
                                            let value =
                                                this.state.changingItem.zone > 1
                                                    ? parseInt(
                                                          this.state
                                                              .changingItem.zone
                                                      ) - 1
                                                    : 1
                                            // Changement de l'item dans le state
                                            let items = this.state.items
                                            items[
                                                this.state.changingItem.index
                                            ] = `Z${value}:${this.state.changingItem.temps}`
                                            this.setState({
                                                ...this.state,
                                                changingItem: {
                                                    zone: value,
                                                    temps: this.state
                                                        .changingItem.temps,
                                                    index: this.state
                                                        .changingItem.index,
                                                },
                                            })
                                            // Mise à jour au niveau du parent
                                            this.props.onChange(
                                                this.state.items
                                            )
                                        }}
                                        className={`button${
                                            this.state.changingItem.zone - 1
                                        }`}
                                    >
                                        -
                                    </button>
                                    <p>{this.state.changingItem.zone}</p>
                                    <button
                                        onClick={() => {
                                            // Décrémentation de la zone
                                            let value =
                                                this.state.changingItem.zone < 7
                                                    ? parseInt(
                                                          this.state
                                                              .changingItem.zone
                                                      ) + 1
                                                    : 7
                                            // Changement de l'item dans le state
                                            let items = this.state.items
                                            items[
                                                this.state.changingItem.index
                                            ] = `Z${value}:${this.state.changingItem.temps}`
                                            this.setState({
                                                ...this.state,
                                                changingItem: {
                                                    zone: value,
                                                    temps: this.state
                                                        .changingItem.temps,
                                                    index: this.state
                                                        .changingItem.index,
                                                },
                                            })
                                            this.props.onChange(
                                                this.state.items
                                            )
                                        }}
                                        className={`button${
                                            this.state.changingItem.zone + 1
                                        }`}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="field-chart-container">
                                <label className="label">Temps</label>
                                <div className="columns">
                                    <input
                                        value={this.state.changingItem.temps}
                                        type="time"
                                        step="2"
                                        onChange={(e) => {
                                            let time = e.target.value
                                            let items = this.state.items
                                            items[
                                                this.state.changingItem.index
                                            ] = `Z${this.state.changingItem.zone}:${time}`
                                            this.setState({
                                                ...this.state,
                                                changingItem: {
                                                    zone: this.state
                                                        .changingItem.zone,
                                                    temps: time,
                                                    index: this.state
                                                        .changingItem.index,
                                                },
                                            })
                                            this.props.onChange(
                                                this.state.items
                                            )
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div>Sélectionnez un bloc pour le modifier</div>
                    )}
                </div>
                <div className="zone-creation">
                    <div className="zone-sous-graduation">
                        <div className="bg">Z7</div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg">Z6</div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg">Z5</div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg">Z4</div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg">Z3</div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg">Z2</div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg">Z1</div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg"></div>
                    </div>
                    <div className="zone-sous-graduation">
                        <div className="bg"></div>
                    </div>
                </div>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable
                        droppableId="specifique"
                        direction="horizontal"
                        onScroll={(e) => {
                            console.log(e)
                        }}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                            >
                                {this.state.items.map((item, index) => (
                                    <Draggable
                                        key={index}
                                        draggableId={`${item}#${index}`}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps
                                                        .style
                                                )}
                                            >
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'baseline',
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    {this.renderBloc(
                                                        item,
                                                        index,
                                                        true
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        )
    }
}

export default Specifique
