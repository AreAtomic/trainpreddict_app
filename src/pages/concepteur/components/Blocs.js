import React, { Component } from 'react'
import { Draggable, Droppable, DragDropContext } from 'react-beautiful-dnd'
import arrow from '../../../assets/Arrow 1.svg'

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
}

const grid = 1
const minutePX = 3

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '3fr 1fr 3fr',
    background: isDragging ? '#1d84b5' : '',
    alignItems: 'center',
    ...draggableStyle,
})

const getListStyle = (isDraggingOver) => ({
    background: 'transparent',
    padding: grid,
    width: 300,
    margin: '0 auto',
})

class Blocs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: props.blocs,
            move: false,
            moveItem: null,
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    onDragEnd(result) {
        const { source, destination } = result
        // dropped outside the list
        if (!destination) {
            this.props.onMove(this.state.items[source.index])
            return
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                this.state.items,
                source.index,
                destination.index
            )

            let state = { items }

            if (source.droppableId === 'droppable2') {
                state = { selected: items }
            }

            this.setState(state)
        } else {
            this.props.onMove()
        }

        const items = reorder(
            this.state.items,
            result.source.index,
            result.destination.index
        )

        this.setState({
            items,
        })
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <div className="column blocs">
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {this.state.items.map((item, index) => (
                                    <Draggable
                                        key={item._id}
                                        draggableId={item._id}
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
                                                <div className="bloc-description">
                                                    {item.specifique.map(
                                                        (serie, i) => {
                                                            if (
                                                                i ===
                                                                item.specifique
                                                                    .length -
                                                                    1
                                                            ) {
                                                                return serie
                                                            } else {
                                                                return `${serie}, `
                                                            }
                                                        }
                                                    )}
                                                </div>
                                                <img
                                                    src={arrow}
                                                    alt="Flèche entrainement cyclsite"
                                                />
                                                <div
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        alignItems: 'baseline',
                                                        justifyContent:
                                                            'center',
                                                    }}
                                                >
                                                    {item.specifique.map(
                                                        (serie, i) => {
                                                            const height =
                                                                serie.split(
                                                                    ':'
                                                                )[0][1] * 20
                                                            const width =
                                                                serie.split(
                                                                    ':'
                                                                )[1] *
                                                                    60 *
                                                                    minutePX +
                                                                serie.split(
                                                                    ':'
                                                                )[2] *
                                                                    1 *
                                                                    minutePX +
                                                                serie.split(
                                                                    ':'
                                                                )[3] *
                                                                    0.01 *
                                                                    minutePX
                                                            return (
                                                                <div
                                                                    style={{
                                                                        position:
                                                                            'relative',
                                                                        width: `${
                                                                            width +
                                                                            1
                                                                        }px`,
                                                                        height: `${height}px`,
                                                                    }}
                                                                >
                                                                    <div
                                                                        style={{
                                                                            position:
                                                                                'absolute',
                                                                            content:
                                                                                '',
                                                                            background: `var(--zone-${
                                                                                serie.split(
                                                                                    ':'
                                                                                )[0][1]
                                                                            })`,
                                                                            height: `${height}px`,
                                                                            width: `${width}px`,
                                                                        }}
                                                                    ></div>
                                                                </div>
                                                            )
                                                        }
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

export default Blocs
