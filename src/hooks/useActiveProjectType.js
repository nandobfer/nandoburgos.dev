import { useContext } from "react"
import ActiveProjectTypeContext from "../contexts/ActiveProjectTypeContext"

export const useActiveProjectType = () => {
    const active_project_type = useContext(ActiveProjectTypeContext);

    return active_project_type;
}