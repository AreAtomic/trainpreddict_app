import { HeadingFour } from '../../components/atoms'
import { Upload } from '../../components/organisms'

const Televersement = ({ toast }) => {
    return (
        <div className='mt-20 p-2'>
            <HeadingFour>Téléversement</HeadingFour>
            <p>
                Importer un entrainement depuis votre compteur ou depuis un
                fichier .fit téléchargé.
            </p>
            <Upload toast={toast} />
        </div>
    )
}

export default Televersement
