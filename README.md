# **Weather App - Documentação do Projeto**

![image](https://github.com/user-attachments/assets/c94b6c69-d69b-4e20-a99b-ba99cac9cd63)


## Descrição

O **Weather App** é uma aplicação de previsão do tempo desenvolvida com **React** no frontend e **Node.js** com **Express** no backend. A aplicação permite que os usuários consultem a previsão do tempo atual e a previsão para os próximos 5 dias. Ela utiliza a API do **OpenWeather** para obter as informações meteorológicas.

---

## Tecnologias Utilizadas

### Frontend:
- **React**: Biblioteca JavaScript para criar interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para aplicações JavaScript.
- **Tailwind CSS**: Framework CSS para criação de interfaces responsivas e personalizadas.
- **Axios**: Cliente HTTP para consumir APIs.
- **ESLint**: Ferramenta para garantir a qualidade do código.
- **PostCSS** e **Autoprefixer**: Para adicionar prefixos automáticos aos estilos CSS.

### Backend:
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construir APIs RESTful.
- **Axios**: Para fazer chamadas à API externa do OpenWeather.

---

## Estrutura do Projeto

weather-app/
├── weather-api/                # Backend
│   ├── src/
│   │   ├── assets/             # Imagens e recursos estáticos
│   │   │   └── background.jpg.png
│   │   ├── controllers/        # Lógica para controlar o fluxo de dados
│   │   │   └── weatherController.js
│   │   ├── routes/             # Roteadores para as APIs
│   │   │   └── weatherRoutes.js
│   │   ├── server.js           # Arquivo principal do servidor
│   │   └── config/             # Arquivo de configurações
│   │       └── config.js
│   ├── package.json            # Dependências e scripts do backend
│   └── .env                    # Variáveis de ambiente (caso necessário)
├── weather-app/                # Frontend
│   ├── public/                 # Arquivos estáticos públicos
│   │   ├── index.html          # HTML principal
│   ├── src/
│   │   ├── assets/             # Imagens e recursos estáticos
│   │   │   └── background.jpg.png
│   │   ├── components/         # Componentes React
│   │   │   ├── Prevision.js    # Componente para previsão do tempo
│   │   │   └── Prevision5Days.js # Componente para previsão dos próximos 5 dias
│   │   ├── App.js              # Componente principal do React
│   │   ├── index.js            # Ponto de entrada para o React
│   │   ├── styles/             # Arquivos de estilo
│   │   │   ├── App.css         # Estilos do componente principal
│   │   │   └── Prevision.css   # Estilos para o componente de previsão
│   │   └── utils/              # Funções auxiliares
│   ├── package.json            # Dependências e scripts do frontend
│   └── vite.config.js          # Configuração do Vite
└── README.md                   # Documentação do projeto


---

## Como Rodar o Projeto

O projeto está dividido em duas partes: **Frontend** e **Backend**. Cada parte pode ser executada separadamente.

### 1. Backend

#### Pré-requisitos:
- **Node.js** (versão 18.x ou superior)
- **NPM** (gerenciador de pacotes)

#### Passos para rodar o backend:

`1. Navegue até a pasta `weather-api` no terminal:`
   
    cd weather-api
 
`2. Instale as dependências do backend:`

npm install

`3. Crie um arquivo .env na raiz da pasta weather-api (caso necessário) e adicione a sua chave da API do OpenWeather:`

OPENWEATHER_API_KEY=your_api_key

`4. Inicie o servidor do backend:`

npm start

O servidor estará rodando na porta 3000 por padrão. O backend serve a API para obter as previsões do tempo.

### 2. Frontend

#### Pré-requisitos:
- **Node.js** (versão 18.x ou superior)
- **NPM** (gerenciador de pacotes)
#### Passos para rodar o frontend:

`1. Navegue até a pasta weather-app no terminal:`

cd weather-app

`2. Instale as dependências do frontend:`

npm install

`3. Inicie o servidor de desenvolvimento:`

npm run dev

`O frontend estará disponível em http://localhost:5173 por padrão, se estiver usando Vite. Você pode visualizar a previsão do tempo e interagir com a interface.`

### Funcionalidade

***Previsão Atual: Exibe a previsão atual com informações como temperatura, sensação térmica, umidade e pressão atmosférica.***

***Previsão para os Próximos 5 Dias: Mostra a previsão mínima e máxima de temperatura para os próximos dias, com a descrição do clima e ícones representando as condições climáticas.***

### Scripts do Projeto

Frontend (weather-app):

`npm run dev: Inicia o servidor de desenvolvimento.`

`npm run build: Gera os arquivos otimizados para produção.`

`npm run preview: Exibe o aplicativo gerado para visualização antes da publicação.`

`npm run lint: Executa a verificação do código com o ESLint.`

### Backend (weather-api):

npm start: Inicia o servidor Express.

### Melhorias Futuras

***Autenticação de Usuários: Implementar autenticação de usuários para salvar previsões favoritas.***

***Mapas Interativos: Adicionar integração com APIs de mapas para mostrar previsões por localização.***

***Melhorias na Interface: Tornar a interface mais interativa, com animações e gráficos de previsão.***

### Contribuição

1. Faça um fork do repositório.

2. Crie uma branch para sua modificação (git checkout -b feature/feature-name).

3. Faça commit das suas alterações (git commit -am 'Adiciona nova feature').

4. Envie para o repositório (git push origin feature/feature-name).

5. Abra um Pull Request.

### Licença
Este projeto está licenciado sob a Licença MIT.
