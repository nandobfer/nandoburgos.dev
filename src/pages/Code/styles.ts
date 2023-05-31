import colors from "../../colors"
import { Style } from "../../styles"

interface Styles {
    body: React.CSSProperties
}

const styles: Styles = {
    body: {
        backgroundColor: colors.background,
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
    },
}
export default styles
