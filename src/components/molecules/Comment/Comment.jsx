import { ButtonPrimarySmall, TextArea } from '../../atoms'

const Comment = (props) => {
    return (
        <div className="w-full rounded-lg border-2 border-low-contrast-500 mt-5 bg-component-one-500 px-3 py-3">
            <div className="grid h-10 overflow-auto text-low-contrast-500 scrollbar mb-2">
                {props.comments?.length === 0 && (
                    <p className="text-component-two-900">Pas de commentaire</p>
                )}
                {props.comments?.map((item) => {
                    return (
                        <p>
                            <b className="text-medium-contrast-500">
                                {item.from}:{' '}
                            </b>{' '}
                            {item.value}
                        </p>
                    )
                })}
            </div>
            <TextArea
                label="Nouveau commentaire"
                placeholder="Ecrire votre commentaire"
                value={props.value}
                onChange={(e) => {
                    props.setValue(e.target.value)
                }}
                onBlur={props.onBlur}
                width={485}
                height={60}
                type="text"
                helper="Rentrez un email valide"
                margin=""
                className="w-94
                peer
                invalid:ring
                invalid:ring-high-contrast-500
                invalid:border-0
                invalid:text-high-contrast-50
                py-3
                px-3
                text-low-contrast-500
                bg-component-one-500 
                rounded-md
                active:ring-1
                active:ring-medium-contrast-500
                focus:ring-1
                focus:ring-medium-contrast-500
                focus:outline-none
                hover:bg-component-one-400
                mb-1
                "
            />
            <ButtonPrimarySmall
                onClick={() => {
                    console.log('Saving ...')
                    props.saveComment()
                }}
            >
                Ajouter un commentaire
            </ButtonPrimarySmall>
        </div>
    )
}

export default Comment
