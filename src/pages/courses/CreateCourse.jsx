import { HeadingOne } from '../../components/atoms'
import { CourseForm } from '../../components/organisms'

const CreateCourse = (props) => {
    return (
        <div className="grid">
            <HeadingOne>Création d'une course</HeadingOne>
            <CourseForm toast={props.toast} />
        </div>
    )
}

export default CreateCourse
