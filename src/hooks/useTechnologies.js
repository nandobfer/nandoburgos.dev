import { ReactComponent as PythonIcon } from '../icons/python.svg';
import { ReactComponent as GitIcon } from '../icons/git.svg';
import { ReactComponent as JavascriptIcon } from '../icons/javascript.svg';
import { ReactComponent as ReactIcon } from '../icons/react.svg';
import { ReactComponent as MysqlIcon } from '../icons/mysql.svg';
import { ReactComponent as PowershellIcon } from '../icons/powershell.svg';
import { ReactComponent as LinuxIcon } from '../icons/linux.svg';
import { ReactComponent as UbuntuIcon } from '../icons/ubuntu.svg';
import { ReactComponent as HtmlIcon } from '../icons/html.svg';
import { ReactComponent as CssIcon } from '../icons/css.svg';
import { ReactComponent as SassIcon } from '../icons/sass.svg';
import COLORS from '../sass/_colors.scss'

export const useTechnologies = () => {
    const style = {
        fill: COLORS.blue,
    }

    const technologies = {
        react: {
            name: 'React.js',
            icon: <ReactIcon style={style} />
        },
        reactnative: {
            name: 'React Native',
            icon: <ReactIcon style={style} />
        },
        node: {
            name: 'Node.js',
            icon: <JavascriptIcon style={style} />
        },
        javascript: {
            name: 'JavaScript',
            icon: <JavascriptIcon style={style} />
        },
        python: {
            name: 'Python',
            icon: <PythonIcon style={style} />
        },
        mysql: {
            name: 'Mysql',
            icon: <MysqlIcon style={style} />
        },
        linux: {
            name: 'Linux',
            icon: <LinuxIcon style={style} />
        },
        html: {
            name: 'HTML',
            icon: <HtmlIcon style={style} />
        },
        sass: {
            name: 'Sass',
            icon: <SassIcon style={style} />
        },
    }

    return technologies
}