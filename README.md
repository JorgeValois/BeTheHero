# BeTheHero
Project Be The Hero, made to find Heros to help NGOs and save the day!

Step-By-Step in portuguese:
Back-end

Instalar o node 
Para usar uma tecnologia com mais controle, geralmente usamos a instalação via gerenciador de pacotes.


Criação de uma aplicação node

Instalar o "express" para facilitar a configuração incial do projeto

Criar o index.js

Criação de uma aplicação React

executar o comando npx create-react-application <nomeApp>


#É preciso especificar no programa a linguagem a ser utilizada pelos parâmetros http: app.use(express.json);


Tipos de Parâmetro HTTP:
•	Query: Parâmetros nomeados enviados dentro da rota após o símbolo “?”
•	Route: Parâmetros utilizados para identificar recursos. Vem após os sinal “:”
•	Request Body: Corpo da requisição


Nodemon: npm install nodemon –D -> -d indica dependências apenas de desenvolvimento

Criar script start: start": "nodemon index.js"

Instalar o DB: SQLite
Existem 3 formas de comunicar com o db na app node.

Instalar o Driver: Select * From <table> | (query clássica, so aceita uma sintaxe)
Query Builder: table(users).select(“*”).where(...) | (constrói a query através do javascript e aceita qq banco sql);

Usaremos KNEX.js : http://knexjs.org/
npm install knex

Selecionar o drive
$ npm install sqlite3
Criar a comumicação com o db
npx knex init

Organizar as rotas (routes.js)

Criar Diretório de migrações.
#Migrações funcionam como formas de criar tabelas mantendo um histórico simulando um controle de versões do db. 

npx knex migrate:status -> mostra todas as funções do knex migrate

Definir lugar das migrações: knex.js

Criar migração:
npx knex migrate:make nome_migrate

criar os schemas na migrate
npx knex migrate:latest


#async torna a função assíncrona
#await faz com que o próximo comando so seja executado após o final deste.

Criar as entidades, controllers e rotas

instalar o CORS (Módulo de Segurança)

Testes

Adicionar validações com o celebrate
npm install celebrate

configurar o JEST (framework de testes)
npm install jest -D

configurar o banco de teste
copiar no knexfile as propriedades para um banco de testes

na conexão, precisamos saber se estamos em ambiente de testes ou não
faremos isso instalando o cross-em
npm install cross-env

#no package.json  no atributo test adicionamos ‘cross-env NODE_ENV=test’

instalar e usar a api superTest para conectar com as rotas (visto que o axios eh uma api para front-end
npm install supertest –D (dependência de desenvolvimento



Front-end

Limpar arquivos da estrutura que não serão utilizados

No React, criamos arquivos js para serem as tags da aplicação
na chamada, podemos passar parâmetros dentro de cada tag e recupera-los como props no arquivo js

O react so consegue retornar um elemento, por isso eh comum retoranrmos <div>s com tudo que precisamos dentro dela

#useState toda vez que utilizamos, quando acontece uma alteração no estado o componente atualiza a tela com as novas informações

#no import o react sempre procura por um arquivo index quando não especificado um arquivo diferente, possibilitando o import de pastas

feather icons foi utilizado

importar react-router-dom

criar as rotas

configurar as telas

instalar o axios -> npm install axios

criar um diretório “services”

criar la o arquivo api.js e configurar a baseurl

Depois de criar a conecação com o back-end, é importante lembrar de utilizar o history para fazer a transição das rotas e usar o localStorage para guardar informações

#useEffect dispara uma função em determinado momento do componente. Sempre que um elemento no parâmetro de elementos se modificar, ele iria atualizar a tela. Caso esteja vazio, ele atualizará apenas 1x;

Usar o atributo “key” na "<li>" pois facilita na hora de buscar um item dinamicamente

#INTL classe global do javascript que faz formatação de dados (data, moeda etc).

Mobile

Baixar e instalar o Expo: Gerenciador de instalação para parte mobile

npm install expo-cli –g
expo init <nomeProjeto>

as tagas são diferentes do html

<View> são como divs
<Text> são pra todos os textos

o css é passado em forma de objeto dentro de um atributo
os campos css agora seguem o padrão camelCase para nome das variáveis
Não existe herança nem estilização geral, cada elemento deve ter seu estilo

Para o sistema de rota, usaremos o react-navigation
npm install @reacti-navigation/native

seguir o passo a passo de instalação no reactnavigation.org


Sempre englobe o retorno de cada rota com <NavigationContainer>
EX:
function Routes(){
	return (
		<NavigationContainer>
			<AppStack.Navigator>
				<AppStack.Screen component={arquivoRota}/>
			</AppStack.Navigator>
		</NavigationContainer>
	);
}

#as imagens png na aplicação devem ter 3 tamanhos diferentes devido a densidade dos pixels em cada aparelho. 1x,2x,3x;

#Para usar o scroll da tela usamos o flatList

#para criar função de email, usar a api mail-composer expo.io
npm install expo-mail-composer

#para criar a função de whats app vamos usar uma técnica chamada deeplinking

#vamos instalar o axios para o contato com o backend

#instalar intl para formatação de texto e numero
npm install intl


Deploy

Back-end
Aplicação Node – Heroku (para planos gratuito)
Aplicação React – digital ocean (tem gratuito, mas preços melhores q o heroku para apps maiores)
Aplicação gigante (AWS, GCP, MA)

Front-end
App pequena Netlify

Mobile
Google Play
Apple Store


Futuros Estudos
Padrões de projeto – back-end
Autenticação jwt – segurança da app
Styled componentes – estilização de front-end
