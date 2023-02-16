import { useContext } from "react"
import ActiveProjectContext from "../contexts/ActiveProjectContext"

export const useActiveProject = () => {
    const active_project = useContext(ActiveProjectContext);

    return active_project;
}