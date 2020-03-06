import {FETCH_ALL_LAWYERS_FAILED, FETCH_ALL_LAWYERS_LOADING, FETCH_ALL_LAWYERS_SUCCEEDED} from "./directory-actions";
const areas = [
    {
    id:"direito-sindical",
    name:"Direito Sindical",
    description:"",
    pic:"",
    home:false
},
    {
        id:"mediacao",
        name:"Mediação",
        description:"",
        pic:"",
        home:false
    },
    {
        id:"arbitragem",
        name:"Arbitragem",
        description:"",
        pic:"",
        home:false
    },
    {
        id:"conciliacao",
        name:"Conciliação",
        description:"",
        pic:"",
        home:false
    },
    {
        id:"direito-bancario",
        name:"Direito Bancário",
        description:"",
        pic:"",
        home:false
    },
    {
        id:"consultivo",
        name:"Consultivo",
        description:"",
        pic:"",
        home:false
    },
    {
        id:"direito-educacional",
        name:"Direito Educacional",
        description:"",
        pic:"",
        home:false
    },
    {
        id: "direito-processual-civil",
        name:"Direito Processual Civil",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-militar",
        name:"Direito Militar",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-trabalho",
        name:"Direito do Trabalho",
        description:"Ramo do direito que rege as relações entre empregados e empregadores",
        pic:"https://femijuris.com.br/images/areas/direito-do-trabalho.jpg",
        home: true
    },
    {
        id: "direito-transito",
        name:"Trânsito",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "advogado-correspondente",
        name:"Advogado Correspondente",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-administrativo",
        name:"Direito Administrativo",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-aeronautico",
        name:"Direito Aeronáutico",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-agrario",
        name:"Direito Agrário",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-ambiental",
        name:"Direito Ambiental",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-civil",
        name:"Direito Civil",
        description:"Matéria do direito que disciplina os direitos e obrigações nas relações privadas",
        pic:"https://femijuris.com.br/images/areas/direito-civil.jpg",
        home: true
    },
    {
        id: "direito-constitucional",
        name:"Direito Constitucional",
        description:"Ramo do direito público que objetiva analisar e disciplinar normas fundamentais do Estado",
        pic:"https://femijuris.com.br/images/areas/direito-constitucional.jpg",
        home: true
    },
    {
        id: "direito-de-energia",
        name:"Direito de Energia",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-de-familia",
        name:"Direito de Família",
        description:"Trata-se da matéria do direito que almeja garantir os direitos e obrigações das relações familiares",
        pic:"https://femijuris.com.br/images/areas/direito-de-familia.jpg",
        home: true
    },
    {
        id: "direito-de-propriedade",
        name:"Direito de Propriedade",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-do-consumidor",
        name:"Direito do Consumidor",
        description:"Ramo do direito que assegura as relações de consumo, por intermédio de normas estabelecidas no Código de Defesa do Consumidor",
        pic:"https://femijuris.com.br/images/areas/direito-do-consumidor.jpg",
        home: true
    },
    {
        id: "direito-do-turismo",
        name:"Direito do Turismo",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-de-internet",
        name:"Direito de Internet",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-eleitoral",
        name:"Direito Eleitoral",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-empresarial",
        name:"Direito Empresarial",
        description:"Área do direito privado que disciplina as atividades da empresa e do empresário",
        pic:"https://femijuris.com.br/images/areas/direito-empresarial.jpg",
        home: true
    },
    {
        id: "direito-financeiro",
        name:"Direito Financeiro",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-imobiliario",
        name:"Direito Imobiliário",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-internacional",
        name:"Direito Internacional",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-medico",
        name:"Direito Médico",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-penal",
        name:"Direito Penal",
        description:"Conjunto de regramentos jurídicos que tutelam os conflitos que envolvem as condutas humanas, estabelecendo sanções e reprimendas",
        pic:"https://femijuris.com.br/images/areas/direito-penal.jpg",
        home: true
    },
    {
        id: "direito-previdenciário",
        name:"Direito Previdenciário",
        description:"É a área do direito que organiza e regulamenta o Instituto Nacional de Seguridade Social (INSS), garantindo que a seguridade social seja respeitada",
        pic:"https://femijuris.com.br/images/areas/previdenciario.jpg",
        home: true
    },
    {
        id: "direito-público",
        name:"Direito Público",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-securitário",
        name:"Direito Securitário",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-tributario",
        name:"Direito Tributário",
        description:"É o ramo do direito público que disciplina as leis que irão regular e fiscalizar a arrecadação de tributos",
        pic:"https://femijuris.com.br/images/areas/tributario.png",
        home: true
    },
    {
        id: "direitos-humanos",
        name:"Direitos Humanos",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-processual-penal",
        name:"Direito Processual Penal",
        description:"",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-da-saúde",
        name:"Direito da Saúde",
        description:"Cras rhoncus id felis ut laoreet",
        pic:"https://media-exp2.licdn.com/media/AAIAAgDGAAwAAQAAAAAAAAyrAAAAJDI5MTNkOGYxLTQ2MGUtNGJhMy05MmRkLTZiNmExN2MwNjNmMA.jpg",
        home: false
    },
    {
        id: "direito-digital",
        name:"Direito Digital",
        description:"Matéria do direito que visa a amparar, juridicamente, nossa relação com as novas tecnologias",
        pic:"https://femijuris.com.br/images/areas/direito-digital.jpg",
        home: true
    },
    {
        id:"direito-societario",
        name: "Direito Societário",
        description: "",
        pic:"",
        home: false
    },
    {
        id:"direito-contratual",
        name: "Direito Contratual",
        description: "",
        pic:"",
        home: false
    },
    {
        id:"direitos-autorais",
        name: "Direitos Autorais",
        description: "",
        pic:"",
        home: false
    },
    {
        id:"propriedade-intelectual",
        name: "Propriedade Intelectual",
        description: "",
        pic:"",
        home: false
    },
    {
        id:"direito-das-sucessões",
        name: "Direito das Sucessões",
        description: "",
        pic:"",
        home: false
    },
    {
        id:"advocacia-de-partido",
        name: "Direito de Partido",
        description: "",
        pic:"",
        home: false
    }];


export const lawyers_reducer = (state=[],action) => {
    switch (action.type) {
        case FETCH_ALL_LAWYERS_SUCCEEDED:
            return action.payload;

        default:
            return state
    }
};

const directory = {
    loadingLawyers: false
};

export const directory_reducer = (state=directory,action) => {
    switch (action.type) {
        case FETCH_ALL_LAWYERS_LOADING:
            return {...state,loadingLawyers:true};
        case FETCH_ALL_LAWYERS_SUCCEEDED:
            return {...state,loadingLawyers:false};
        case FETCH_ALL_LAWYERS_FAILED:
            return {...state,loadingLawyers:false};
        default:
            return state
    }
};

export const areas_reducer = (state=areas,action) => {
    return state
}