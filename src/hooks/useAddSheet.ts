import { useSheetModal } from "./useSheetModal"
import { useTerminal } from "./useTerminal"

export const useAddSheet = () => {
    const { openSheetModal } = useSheetModal()
    const terminal = useTerminal()

    const addSheet = (command: string) => {
        openSheetModal()
        terminal.close()
    }

    return addSheet
}
