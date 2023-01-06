import { IProgram } from "interface/IProgram";
import { useNavigate } from "react-router-dom";

const useNavigateDetails = () => {
    const navigate = useNavigate()
    const goDetails = (program: IProgram) => {
        navigate(`/details/${program.id}`, { state: { program }, replace: true });
    }

    return {goDetails}
}

export default useNavigateDetails