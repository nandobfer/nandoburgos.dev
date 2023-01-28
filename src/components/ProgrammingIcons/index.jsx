import { ReactComponent as PythonIcon } from '../../icons/python.svg';
import { ReactComponent as GitIcon } from '../../icons/git.svg';
import { ReactComponent as JavascriptIcon } from '../../icons/javascript.svg';
import { ReactComponent as ReactIcon } from '../../icons/react.svg';
import { ReactComponent as MysqlIcon } from '../../icons/mysql.svg';
import { ReactComponent as PowershellIcon } from '../../icons/powershell.svg';
import { ReactComponent as LinuxIcon } from '../../icons/linux.svg';
import { ReactComponent as UbuntuIcon } from '../../icons/ubuntu.svg';
import { ReactComponent as HtmlIcon } from '../../icons/html.svg';
import { ReactComponent as CssIcon } from '../../icons/css.svg';
import { ReactComponent as SassIcon } from '../../icons/sass.svg';
import './style.scss';

export const ProgrammingIcons = () => {
    
    return (
        <div className='ProgrammingIcons-Component' >
            <PythonIcon className='icon' />
            <GitIcon className='icon' />
            <JavascriptIcon className='icon' />
            <ReactIcon className='icon' />
            <MysqlIcon className='icon' />
            <PowershellIcon className='icon' />
            <LinuxIcon className='icon' />
            <UbuntuIcon className='icon' />
            <HtmlIcon className='icon' />
            <CssIcon className='icon' />
            <SassIcon className='icon' />
        </div>
    )
}