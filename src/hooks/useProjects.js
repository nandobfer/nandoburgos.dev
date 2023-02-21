import { useLanguage } from "./useLanguage"
import { useTechnologies } from "./useTechnologies"

export const useProjects = () => {
    const language = useLanguage().value
    const tech = useTechnologies()
    const projects = {
        web: [
            {
                name: 'BOZ',
                url: 'https://app.agenciaboz.com.br',
                technologies: [tech.react, tech.node],
                description: 'Developed a system for our own agency with multiple functionalities: employees and customers control, register and configurations; tasks distribution (with planner, worker, dates, briefings and recursion assignments); automated advertising requests budgets for customers; statistics visualizations from host server and other.',
                description_pt: 'Sistema da própria agência com múltiplas funcionalidades: controle, cadastro e configurações de funcionários e clientes; distribuição de tarefas (com atribuição de responsável, desenvolvedor, datas, briefings e recursividade); orçamento automático de solicitações publicitárias para os clientes; visualização e estatísticas do servidor de hospedagem e outros.',
            },
            {
                name: 'Bapka',
                url: 'https://cupons.bapkasorvetes.com.br/',
                technologies: [tech.react, tech.node, tech.mysql],
                description: 'Vouchers system for an ice-cream parlor with several branches, sharing customers registers but voucher quantity is shop exclusive. Customer panel: Is possible to see how many vouchers the customer has in each shop, and change personal info. Partner panel: Is possible to sign new customers in the system (or only in his shop, for already signed customers), search customers by identification number and add or subtract vouchers.',
                description_pt: 'Sistema de cupons para uma sorveteria com diversas filiais, compartilhando cadastro de clientes mas quantidade de cupons exclusiva. Painel do cliente: É possível ver quantos cupons possui em cada loja, alterar dados pessoais. Painel do parceiro: É possível cadastrar novos clientes no sistema (ou apenas na sua loja, para clientes já cadastrados), pesquisar clientes por CPF e inserir ou remover cupons.',
            },
            {
                name: 'Sion',
                url: 'https://cooperativasion.com.br/',
                technologies: [tech.react, tech.node],
                description: 'Webpage developed for a solar power plant company.',
                description_pt: 'Página web desenvolvidada para uma compania de energia solar.',
                
            },
            {
                name: 'SBOP',
                url: 'https://sistema.sbop.com.br:5001',
                technologies: [tech.python, tech.javascript],
                description: 'Completely developed a system for a society of ophthalmologists. The doctor can log in and edit his personal and professional info, his profile picture, change his subscription plan in the society with an automated payment system, restrict content that is exclusive to each subscription plan, make requests of membership certificates and others. Also developed an administration panel for this system, where admin flagged accounts can search, alter or remove registers and post or edit restricted contents.',
                description_pt: 'Sistema completo para sociedade de oftalmologistas. O médico poderá fazer login e editar dados pessoais e profissionais, além de foto; alterar seu plano com pagamento automatizado, acesso a conteúdo exclusivo de publicações e diretrizes, solicitações de certificado de membro e outros. Também desenvolvido painel administrativo para esse sistema, onde contas especiais podem pesquisar, alterar ou excluir cadastros, postar ou alterar as publicações restritas.',
            },
            {
                name: 'SBOP map',
                name_pt: 'mapa SBOP',
                url: 'https://sistema.sbop.com.br:5001/mapa',
                technologies: [tech.python],
                description: 'Developed webapp containing Brazil’s map divided by states, showing every doctor of the previous system that has a holder subscription plan. Users can search doctors by state, address or name. Ordination by address proximity.',
                description_pt: 'Webapp contendo mapa do Brasil, divido por estados, mostrando todos os médicos do sistema anterior, com assinatura Titular. Podendo buscar por estado, endereço ou nome. Ordenação por proximidade do endereço.',
            },
            {
                name: 'insurer G2',
                name_pt: 'G2 corretora',
                url: 'https://sistema.g2corretora.com.br:5002/tabela',
                technologies: [tech.python, tech.javascript, tech.mysql],
                description: 'Developed organization and signup system for customers of an insurer, with a highly customizable table, customizable ordination and notifications.',
                description_pt: 'Sistema de organização e cadastro de clientes para uma seguradora, com tabela altamente customizável, com ordenação customizada e notificações.',
            },
            {
                name: 'Agesbec',
                url: '',
                technologies: [tech.react, tech.node, tech.mysql],
                description: 'Webviewer application made for easy table visualization of data sent to IRS from another project, agesbec rpa, with funcionality to try to resend failed api requests',
                description_pt: 'Webviewer feita para uma fácil visualização em tabela dos dados enviados para a Receita Federal de outro projeto, RPA agesbec, com funcionalidade de reenvio de requisições falhas na API da Receita',
            },
        ],
        mobile: [
            {
                name: 'movie list',
                name_pt: 'lista de filmes',
                technologies: [tech.reactnative, tech.node, tech.mysql],
                description: 'an app for listing, adding and reviewing movies and tv shows.',
                description_pt: 'um aplicativo para listar, adicionar e avaliar filmes e séries.',
            },
        ],
        rpa: [
            {
                name: 'manservmed',
                technologies: [tech.python, tech.mysql],
                description: 'Developed part of automated submission and approval of medical certifications. I programmed the consumption of the webservice after receiving the certificate data from an OCR, crossing data and deciding whether it should be paid or not, depending on the information on each certificate and employee.',
                description_pt: 'Desenvolvida parte de sistema de automação de submissão e abono de atestados médicos. Programei o consumo do webservice após receber de um OCR os dados do atestado, cruzando dados e decidindo se deve ser abonado ou não, dependendo das informações.',
            },
            {
                name: 'agesbec gate control',
                name_pt: 'agesbec controle de acesso',
                technologies: [tech.python, tech.mysql],
                description: 'Completely developed application of an automated system integrated with brazilian IRS, for a customs port. For each employee that enters or leaves the building, the application should make a request to the IRS API, sending the employee’s data, time and direction of movement. The process runs constantly, with real time database reading. The automated application was programmed in Python, and a viewer application was programmed in Electron and React.js. I’ve also made the infrastructure of the server and environment preparation. ',
                description_pt: 'Desenvolvida aplicação completa de um sistema automatizado de integração com API da Receita Federal, para um porto aduaneiro. Para cada funcionário que entra e sai do recinto, a aplicação deve fazer uma requisição para a API da Receita, com os dados do funcionário, horário e tipo de movimentação. O processo roda de forma constante, com leitura em tempo real. Programei toda a aplicação em Python, um programa para verificação dos dados, bem como a resposta da receita para cada envio e a possibilidade de reenvio (React + Electron, javascript). Fiz a infraestrutura da máquina e instalação do ambiente. Participo da sustentação',
            },
            {
                name: 'genetics silico analysis',
                name_pt: 'genética análise em silico',
                technologies: [tech.python],
                description: 'This script has the functionality to transform the results of the FGENESH analysis of the Softberry software from the pdf format to the Excel spreadsheet format. After performing the FGENESH analysis using the Softberry software, you will find all the results arranged in pdf files. To facilitate data management, this script is used to obtain data from the pdf and place them in an Excel spreadsheet containing: start and end position of exons/ORFs, general score, specific score of each exon/ORF and the amount of bp for each exon/ORF. The script also places the name of each pdf file in the Excel spreadsheet, next to the results, to make it easier to identify each line of data. Furthermore, if there is more than one possibility for conformation of exons/ORFs in the sequence, it identifies them and prints all the possibilities in the worksheet.',
                description_pt: 'Esse script tem como funcionalidade transformar os resultados da análise de FGENESH do software Softberry do formato pdf para o formato de planilha Excel. Após realizar a análise de FGENESH pelo software Softberry, você encontra todos os resultados dispostos em arquivos de pdf. Para facilitar o manejo dos dados, esse script serve para obter os dados do pdf e colocá-los em uma planilha de Excel contendo: posição de início e fim dos exons/ORFs, o score geral, o score específico de cada exon/ORF e a quantidade de pb para cada exon/ORF. O script também coloca na planilha do Excel o nome de cada arquivo de pdf, ao lado dos resultados, para facilitar a identificação de cada linha de dados. Além disso, caso exista mais de uma possibilidade para conformação dos exons/ORFs na sequência, ele identifica elas e imprimi na planilha todas as possibilidades.',
            },
            {
                name: 'cpanel accounts backups',
                name_pt: 'backup de contas do cpanel',
                technologies: [tech.linux, tech.python],
                description: 'script that runs weekly, backing up every cPanel account and uploading to google drive, as well as each database',
                description_pt: 'script que roda semanalmente, fazendo backup de cada conta do cPanel e subindo para o google drive, assim como o banco de dados de cada um',
            },
            {
                name: 'cpanel bandwidth limits',
                name_pt: 'limite de largura de banda do cpanel',
                technologies: [tech.linux, tech.python],
                description: 'script that runs weekly, estimating monthly bandwidth usage for each cPanel account and adjusting current bandwidth limit in order to keep usage in 70% of limited max value',
                description_pt: 'script que roda semanalmente, estimando uso mensal de banda para cada conta do cPanel e ajustando o limite atual da largura de banda de forma a manter o uso em 70% do máximo limitado',
            },
            {
                name: 'pagseguro challenge decoder',
                name_pt: 'decodificador do desafio pagseguro',
                technologies: [tech.python, tech.mysql],
                description: 'script that when given a pagseguro token, will check for keys in server, get it or make it, send it requesting the challenge, decrypt and resolve the challenge and then will get the final keys for api usage.',
                description_pt: 'script que, dado um token do pagseguro, vai checar por chaves no servidor, recuperar ou criar, requerer o desafio, decriptografar e resolver o desafio e então recuperar as chaves finais para uso da api',
            },
            {
                name: 'mottu mail trigger',
                name_pt: 'disparador de email mottu',
                technologies: [tech.node, tech.linux],
                description: 'script that runs each minute, checking for a new order in some email. If there is, it will send the order data to our api that will make the order to the delivery api',
                description_pt: 'script que roda todo minuto, checando por um novo pedido em alguns emails. Se existir, ele vai enviar os dados do pedido para nossa api que vai fazer o pedido na api de entregas',
            },
        ],
        games: [
            {
                name: 'moon clicker',
                technologies: [tech.reactnative],
                description: 'mobile cookie clicker style game, made for fun and learning purpose',
                description_pt: 'jogo mobile estilo cookie clicker, feito por diversão e aprendizado',
            },
            {
                name: 'moonlight',
                description: 'open tibia server made to merge concepts of world of warcraft and another rpgs into it',
                description_pt: 'servidor de tibia feito para mesclar conceitos de world of warcraft e outros rpgs nele',
            },
            {
                name: 'memory game',
                name: 'jogo da memória',
                technologies: [tech.reactnative],
                description: 'Memory game for a toy store. There are theme customizations for the game and will have online mode.',
                description_pt: 'Jogo da memória para empresa de brinquedos infantis. Há customização de temas para o jogo e haverá modalidade online.',
            },
            {
                name: 'space invaders',
                technologies: [tech.python],
                description: 'space invaders style game made for fun and learning purpose using pygame',
                description_pt: 'jogo estilo space invaders, feito por diversão e aprendizado usando pygame',
            },
            {
                name: 'fabinho bird',
                technologies: [tech.python],
                description: 'flappy bird style game made for fun and learning purpose using kivy',
                description_pt: 'jogo estilo flappy bird, feito por diversão e aprendizado usando kivy',
            },
        ],
    }

    return projects
}