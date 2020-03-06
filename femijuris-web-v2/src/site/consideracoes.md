#
Utilizando alguns recursos do ECMAScript 6, dá pra enxugar mais o código. Por exemplo, com o Arrow Function (=>) não precisa fazer o bind dos métodos internos da classe (devido o contexto de execução do js). Ele já faz o bind automaticamente, não necessitando declarar no construtor.
        
        ##SEM Arrow Function
        class LeftTeaser {

            constructor(props) {
                super(props)
                this.goTo       = this.goTo.bind(this);
            }

            goTo(path) {
                store.dispatch(push(path))
            }

            ...
        }

        ##COM Arrow Function
        class LeftTeaser {

            constructor(props) {
                super(props)
            }

            //add =>
            goTo = (path) => {
                store.dispatch(push(path))
            }

            ...
        }


#
O Styled Component a depender do uso se torna desnecessário, costumo utilizar ele quando tenho DIVs que sofrem alterações de estilo CSS que precisam de parametros dinamicos.
Dá forma como está, todo novo desenvolvedor terá que abrir todos os style.js para entender o comportamento.

#
Notei que tem muito encapsulamento separando o conteudo e em alguns momentos até desnecessário. Pois é somente exibição de conteúdo, sem nenhuma ação especifica.

#
os imports estão engessados, necessitando de muitos '../', dá para melhorar isso configurando o webpack

#
seria melhor considerar que existem componentes que são reutilizaveis e centraliza-los em um ponto de fácil acesso


#
o menu se repete em varios partials e com import longos ../, pode melhor isso criando subrotas para as que contém o menu