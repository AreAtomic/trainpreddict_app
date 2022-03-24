import { useSelector } from 'react-redux'
import Coureur from './Coureur'
import ListCoureur from './ListCoureur'

const Page = ({ toast }) => {
    const userSelected = useSelector((state) => state.userSelected)

    return userSelected.id ? <Coureur toast={toast} /> : <ListCoureur />
}

export default Page