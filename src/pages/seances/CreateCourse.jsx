import { HeadingTwo } from '../../components/atoms'
import { CourseForm } from '../../components/organisms'

const CreateCourse = (props) => {
    return (
        <div>
            <HeadingTwo className="ml-5 mb-4">Création d'une course</HeadingTwo>
            <CourseForm toast={props.toast} />
        </div>
    )
}

export default CreateCourse
