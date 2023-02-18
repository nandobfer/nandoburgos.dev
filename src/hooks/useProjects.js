import { useLanguage } from "./useLanguage"
import { useTechnologies } from "./useTechnologies"

export const useProjects = () => {
    const language = useLanguage().value
    const tech = useTechnologies()
    const projects = {
        web: [
            {
                name: 'BOZ Agency',
                name_pt: 'Agência BOZ',
                url: 'https://app.agenciaboz.com.br',
                technologies: [tech.react, tech.node],
                description: 'Developed a system for our own agency with multiple functionalities: employees and customers control, register and configurations; tasks distribution (with planner, worker, dates, briefings and recursion assignments); automated advertising requests budgets for customers; statistics visualizations from host server and other.',
            },
            {
                name: 'my cheatsheet',
                name_pt: 'colinhas',
                url: 'https://nandoburgos.dev/cheatsheet',
                technologies: [tech.react, tech.node],
                description: 'A cheatsheet for myself, with easy inclusions and deletions, of my working languages and platforms',
            },
            {
                name: 'SBOP',
                url: 'https://sistema.sbop.com.br:5001',
                technologies: [tech.python, tech.javascript],
                description: 'Completely developed a system for a society of ophthalmologists. The doctor can log in and edit his personal and professional info, his profile picture, change his subscription plan in the society with an automated payment system, restrict content that is exclusive to each subscription plan, make requests of membership certificates and others. Also developed an administration panel for this system, where admin flagged accounts can search, alter or remove registers and post or edit restricted contents.',
            },
            {
                name: 'SBOP map',
                name_pt: 'mapa SBOP',
                url: 'https://sistema.sbop.com.br:5001/mapa',
                technologies: [tech.python],
                description: 'Developed webapp containing Brazil’s map divided by states, showing every doctor of the previous system that has a holder subscription plan. Users can search doctors by state, address or name. Ordination by address proximity.',
            },
            {
                name: 'Bapka',
                url: 'https://cupons.bapkasorvetes.com.br/',
                technologies: [tech.react, tech.node, tech.mysql],
                description: 'Vouchers system for an ice-cream parlor with several branches, sharing customers registers but voucher quantity is shop exclusive. Customer panel: Is possible to see how many vouchers the customer has in each shop, and change personal info. Partner panel: Is possible to sign new customers in the system (or only in his shop, for already signed customers), search customers by identification number and add or subtract vouchers.',
            },
            {
                name: 'G2 corretora',
                name_pt: 'insurer G2',
                url: 'https://sistema.g2corretora.com.br:5002/',
                technologies: [tech.python, tech.javascript, tech.mysql],
                description: 'Developed organization and signup system for customers of an insurer, with a highly customizable table, customizable ordination and notifications.',
            },
            {
                name: 'Sion',
                url: 'https://cooperativasion.com.br/',
                technologies: [tech.react, tech.node],
                description: 'Webpage developed for a solar power plant.',

            },
            {
                name: 'Agesbec',
                url: 'https://cooperativasion.com.br/',
                technologies: [tech.react, tech.node, tech.mysql],
                description: 'Webviewer application made for easy table visualization of data sent to IRS from another project, agesbec rpa, with funcionality to try to resend failed api requests',
            },
        ],
        mobile: [
            {
                name: 'movie list',
                name_pt: 'lista de filmes',
                technologies: [tech.reactnative, tech.node, tech.mysql],
            },
        ],
        rpa: [
            {
                name: 'manservmed',
                technologies: [tech.python, tech.mysql],
            },
            {
                name: 'agesbec gate control',
                name_pt: 'agesbec controle de acesso',
                technologies: [tech.python, tech.mysql],
            },
            {
                name: 'genetics silico analysis',
                name_pt: 'genética análise em silico',
                technologies: [tech.python],
            },
            {
                name: 'cpanel accounts backups',
                name_pt: 'backup de contas do cpanel',
                technologies: [tech.linux, tech.python],
            },
            {
                name: 'cpanel bandwidth limits',
                name_pt: 'limite de largura de banda do cpanel',
                technologies: [tech.linux, tech.python],
            },
            {
                name: 'pagseguro challenge decoder',
                name_pt: 'decodificador do desafio pagseguro',
                technologies: [tech.python, tech.mysql],
            },
            {
                name: 'mottu mail trigger',
                name_pt: 'disparador de email mottu',
                technologies: [tech.node, tech.linux],
            },
        ],
        games: [
            {
                name: 'moon clicker',
                technologies: [tech.reactnative],
            },
            {
                name: 'moonlight',
            },
            {
                name: 'memory game',
                name: 'jogo da memória',
                technologies: [tech.reactnative],
            },
            {
                name: 'space invaders',
                technologies: [tech.python],
            },
            {
                name: 'fabinho bird',
                technologies: [tech.python],
            },
        ],
    }

    return projects
}