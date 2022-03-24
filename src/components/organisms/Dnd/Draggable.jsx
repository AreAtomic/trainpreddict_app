import React from 'react'
import { useDraggable } from '@dnd-kit/core'

const Draggable = (props) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
        data: props.data
    })

    return (
        <div ref={setNodeRef} {...listeners} {...attributes}>
            {props.children}
        </div>
    )
}

export default Draggable
