import { useActiveProject } from "../../../hooks/useActiveProject"

export const Project = ({  }) => {

    const project = useActiveProject().value
    
    return (
        <div className='Project-Component' >
            <p>{project?.name}</p>
        </div>
    )
}