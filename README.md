<h1 align="center">Next Level Week (NLW#4) - "Pomo Up"</h1>

**Move.it** or **Pomo Up**, is an open source project developed during Next Level Week # 4 from the [Rocketseat](https://github.com/rocketseat) class, by the Rocketseat CTO, [Diego Fernandes](https://github.com/diego3g).

[Visit My LogBook for the full documentation about these and others technolgies I have been learning](https://www.notion.so/Development-7e867a3173424b5f8bb9d93f99659e39)

---
## 🚀 Technologies Incluided in this project

- Yarn/npm
- CSS Modules
- Typescript
- Node.js 
- Next.js

## Concepts

- Context API
- SPA/SSR/SSG
- Versel
- Folder Structure
---

---
## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
---

# Vercel Deploy

## Criando conta na Vercel

[Dashboard - Vercel](https://vercel.com/dashboard)

## Instalando Vercel CLI

**Vercel CLI** é para que via terminal e de maneira fácil e prática possamos dar **Deploy** de uma aplicação/projeto na **Vercel.**

- `yarn global add vercel`
- `npm i -g vercel`

[Download Vercel CLI - Vercel](https://vercel.com/download)

## Dando Deploy

Após fazer todos os passos anteriores, basta na pasta do Projeto executar o comando:

- `**vercel**`

---

Irá pedir algumas informações como:

- Se é para dar **Deploy;**
- Em qual **scope** de perfil na **Vercel** é para usar;
- Se é parar ***Linkar*** com algum projeto existente na **Vercel;**
- Qual será o nome do projeto;
- Em qual diretório o código está localizado
- E se quer sobrescrever as configurações padrões do projeto

# Conhecendo o Next.js

## SPA - SSR - SSG

## SPA (*Single-Page-Applications*)

*Single-Page-Applications* são aplicações que baseiam-se no conceito de somente **uma página.** Ao invés de a cada requisição de novos conteúdos haver a troca de páginas, tudo que deve mudar é somente o conteúdo, a página é a mesma e só muda o conteúdo.

**Exemplos:** Um exemplo de uma SPA é o próprio Notion, no qual ao alterar entre Notas diferentes não há o carregamento de toda página novamente, mas somente do conteúdo, mantendo a aplicação mais fluida. O inverso disso é o GitHub, que a cada novo *link* clicado, nos leva a recarregar a página por inteira.

O **React** é uma arquitetura de projeto **SPA**, porém, como o usuário verá a interface somente depois da mesma for toda carregada, indexadores de busca (**SEO**) e ***Crawlers*** não serão usados com o melhor proveito quando eles são necessários (Páginas públicas). Pois ou farão a busca no site com JavaScript desativado (o que em React quebra a aplicação) ou a busca é feita sem esperar todo o conteúdo ser carregado.

## SSR - (*Server-Side-Rendering*)

Usando do exemplo anterior, o **SSR** é a renderização da página pelo lado servidor. 

### *Crawlers* e Indexadores

***Crawlers*** e **Indexadores** acessam o site em React antes do mesmo ser totalmente carregado porque nossa aplicação React busca todos os dados no Backend e após todos os dados serem reunidos que então a Interface toda será montada, para os *Crawlers* e Indexadores esse processo pode ser lento, além de alguns desligarem o JavaScript para fazerem suas buscas. 

### Next.js como servidor intermediário

O **Next.js** servirá como um **servidor intermediário**. O usuário acessará o intermediário **Next.js** e esse irá fazer as requisições para a API Backend, após reunir os dados necessários, o **Next.js** montará a página visual e enviará para exibição do React.

**Usuários**

Esses usuários podem ser os ***Crawlers*** e **Indexadores**, o que faria com que eles acessem o servidor intermediario **Next.js**, desse modo eles teriam acesso aos dados atualizados mesmo antes da aplicação ser visualmente carregada, e como o **Next.js** é um **interpretador em Node**, fará também com que o JavaScript não seja computado pelo Browser, tirando essa responsabilidade dele e evitando que em casos de "Desligar o JavaScript" nossa aplicação seja negativamente afetada.

[https://whimsical.com/Hxt9UEnkLvpCmssvS4dDcc](https://whimsical.com/Hxt9UEnkLvpCmssvS4dDcc)

## SSG - (*Static-Side-Generation*)

Baseando em modelos antigos de aplicações web, quando eram feitas em HTML, CSS e JS puro. As páginas tinham o que precisavam do banco e ficavam sempre estáticas com aquele conteúdo.

Com o **Next.js** é possível usar do **SSG**, que faz de maneira automatizada a geração de uma página estática, mas que poderá e muito provavelmente irá se alterar, só que em intervalo de tempos.

Um **exemplo** disso pode ser obtido de uma página de notícias, onde cada usuário novo que entra no site fará com que uma nova requisição ao banco seja feita, em um cenário de milhões de acessos, será custoso para o Banco de Dados e partindo do pressuposto que novas notícias só saem em média de 15 a 15 minutos, podemos então com o **Next.js** e **SSG**, a partir de uma primeira requisição armazenar os dados de maneira estática, sendo assim, essa página estática será exibido para todos os próximos usuários seguintes, e depois dos 15 minutos de intervalo que uma nova requisição será feita, alterando os dados da página "estática".

# Context API // React

# Context API

O que é **Context API?** Em termos curtos, **Context API** é a comunicação entre ***Components**,* sendo um modo que um componente pode se comunicar com outro. Quando queremos, por exemplo, fazer que um componente dispare uma ação em **outro** componente, então usamos do **Context API**.

## Configurando o Contexto

Para que a **Context API** possa ser usada, eu crio uma pasta **src/contexts,** essa pasta conterá todos meus arquivos **.tsx** ou **.ts** de contexto. Dentro dela crio um contexto a partir da função `createContext` importada do **React.**

```tsx
import { createContext } from 'react';

export const ChallengesContext = createContext({});
```

Os componentes nos quais eu quero que façam parte de um mesmo contexto, eu coloco eles dentro do Componente do Contexto criado, que segundo exemplo acima, seria dentro do componente `<ChallengesContext>...</ChallengesContext>`. 

Porém há mais alguns passos para concluir o contexto. Devemos nesse componente de contexto referenciar um outro componente interno, sendo o **Provider**, algo possível de se fazer no React, ficando da seguinte maneira:
`<ChallengesContext.Provider>...</ChallengesContext.Provider>`

Dessa forma, podemos acessar a propriedade **value** do **Provider**, o que for colocado nessa propriedade será de acesso de todos componentes dentro do contexto.

Caso eu queira que **toda aplicação** faça parte de **um mesmo contexto**, posso então usar do **App.tsx** e colocar o componente de contexto em volta das rotas da aplicação (tem exemplo mais abaixo)

**Exemplo no App.tsx:**

```tsx
function App() {
  return (
    <ChallengesContext.Provider value={'teste'}>
      <Router history={history}>
        <Routes />
      </Router>
    </ChallengesContext.Provider>
  );
}
```

Podemos passar em **value** diversos tipos de dados, sejam *strings, objects, functions* e outros.

```tsx
const [level, setLevel] = useState(1);

  function levelUp() {
    setLevel(level + 1);
  }

  return (
    <ChallengesContext.Provider value={{ level, levelUp }}>
[...]
```

### Recomendação de Estruturação

Para um contexto é tranquilo colocar funções, variáveis de **state** e outros como no penúltimo exemplo acima. Mas quando a aplicação aumentar e novos contextos aparecerem, pode ser que o **App.tsx** fique poluída demais. Para evitar isso passei a fazer da seguinte maneira:

- Criar uma pasta de **contexts** na qual iremos declarar nossos arquivos de **contexto** específicos.
- Dentro do arquivo em que o contexto está sendo criado, declaramos uma função com uma boa nomeclatura `export funcion nomecontextoProvider()`.
- Dentro dessa função declaramos todos nossos métodos, variáveis de estado, variáveis normais e etc, que serão compartilhadas no **contexto** como se fosse um componente o que estamos codando**.**
- Desse modo, na **App.tsx**, iremos fazer uma substituição de:
`<ChallengesContext.Provider>...</ChallengesContext.Provider>` por
`<ChallengesProvider>...</ChallengesProvider>`
    - Estou usando o exemplo da **App.tsx** mas caso haja contextos que somente alguns componentes fazem parte, devemos então colocar em volta deles em especifico e não em toda a aplicação como está sendo feito no exemplo.
    **Exemplo:**

        ```tsx
        function App() {
          return (
            <ChallengesProvider>
                <Routes />
            </ChallengesProvider>
          );
        }
        ```

- Dentro de nossa função/componente `ChallengesProvider` no nosso arquivo de contexto **ChallengesContext.tsx**, iremos retonar o que antes tinhamos colocado na **App.tsx:**
`<ChallengesContext.Provider>...</ChallengesContext.Provider>`
Entre essas duas *tags* iremos colocar a propriedade de nosso componente `{ children }` e para isso temos de coloca-lá como parâmetro da função. Assim usamos o `children` para representar todos componentes dentro da nossa nova *tag `<ChallengesProvider>`* que no exemplo acima seria o `<Routes />`. Posso também colocar outros componentes específicos junto ao `{ children }` dentro da **Provider**

    ```tsx
    return (
       <ChallengesContext.Provider
            value={{
                level,
                levelUp,
            }}
        >
            {children}

    				<LevelUpModal />

        </ChallengesContext.Provider>
    );
    ```

    ‼️ Lembrando que quando não for preciso colocar o **Contexto** para **TODOS** componentes, literalmente **TODOS**, devo então tentar evitar coloca-lo nos arquivos gerais **App.tsx** ou **_app.tsx,** mas sim colocar o **Context** em volta exatamente dos componentes específicos que lhe usuarão. 
    Mesmo que seja colocando dentro de uma **Home** em um **Index.tsx** principal.

    ```tsx
    return (
        <ChallengesProvider>
          <div className={styles.container}>
            <Head>
              <title>Inicio | Pomo Up</title>
            </Head>
    [...]
    ```

Uma boa prática é fazer a tipagem desse `{ children }` usando de uma **interface**, como no exemplo mais abaixo.

Outra boa prática é fazer a tipagem do objeto, mesmo que vazio, dentro do `**createContext**`, por meio de uma **interface**, que representará o nome e os tipos dos dados que serão compartilhados pelo **Context**.
`export const ChallengesContext = **createContext({} as ChallengesContextData)**;`

- **Exemplo Completo:**

    ```tsx
    interface challenge {
    		// Ao invés de tipar como String, foi tipado para que não seja QUALQUER String
    		// mas que seja 'body' ou 'eye'
        type: 'body' | 'eye'; 
        description: string;
        amount: number;
    }

    interface ChallengesContextData {
      level: number;
      currentExperience: number;
      challengesCompleted: number;
    // É recomendado quando for tipar algo como Objeto, declarar uma Interface desse objeto 
    // e usar essa nova Interface criada como um Tipo, ou especificar o conteudo e tipo interno
    // do objeto aqui mesmo
    	activeChallenge: challenge
      levelUp: () => void;
      startNewChallenge: () => void;
      resetChallenge: () => void;
    }

    interface ChallengesProviderProps {
        children: ReactNode;
    }

    export const ChallengesContext = createContext({} as ChallengesContextData);

    export function ChallengesProvider({ children }: ChallengesProviderProps) {
        const [level, setLevel] = useState(1);

        function levelUp() {
            setLevel(level + 1);
        }

        return (
           <ChallengesContext.Provider
                value={{
                    level,
                    levelUp,
                }}
            >
                {children}
            </ChallengesContext.Provider>
        );
    }
    ```

---

## 💡 Como usar dados de um contexto

Dentro de cada componente seguimos algo parecido do `useEffect()` e `useState()`, ou seja, usamos de um **Hook**. Haverá uma variável que receberá o `**useContext()`** que receberá como parâmetro o contexto desejado, e assim a variável terá as informações do **value** compartilhado por aquele contexto.

**Exemplo em um Componente**

```tsx
const contextData = useContext(ExampleContext);
console.log(contextData);
// Será exibido o 'teste' passado no value do Provider

const { isActive, functionX, count } = useContext(ExampleContext);
// Com desestruturação
```

Um componente pode ter acesso aos dados de mais de um **Contexto**, basta fazer o mesmo uso do `useContext()` para cada um desejado, desde que o **Provider** dos contextos desejados estejam **em volta** dos componentes que irão ter acesso aos contexto.

⚠️ Lembrar que para funcionar, tem de colocar o **Provider** do contexto desejado em volta dos componentes que vão ter acesso a esse contexto.

Como nos exemplos acima, ao usar do **Provider X** nos arquivos **app.tsx** no caso do **React** e **React Native**, assim como no **_app.tsx** no caso do **Next.js**, estaremos colocando o **Contexto X** em ****volta de **TODA** aplicação ao usar desses arquivos. 
Porém, haverá situações nas quais um **Contexto** não será compartilhado com toda a aplicação, mas somente com **ALGUNS** componentes. Para isso reforço a ideia de que podemos colocar o **Provider** de um contexto em volta dos componentes em qualquer lugar que eles estejam, não necessariamente nesses arquivos gerais.

**Exemplo colocando o Provider em um arquivo das PAGES:**

```tsx
return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Pomo Up</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>

    </div>
  );
```

⚠️ Ponto **importante:** É comum que ***Contextos* dependam** um do outro. Ao colocar um **Provider** dentro de outro, devo analisar quem deve ficar por fora, pois **quem fica por fora não tem acesso ao Contexto do de dentro.**

```tsx
<LeiteProvider>
	<CafeProvider>
		<Home />
	</CafeProvider>
</LeiteProvider>
// -> Nesse exemplo, o **LeiteProvider NÃO** tem acesso ao contexto do CafeProvider.
// -> Enquanto que o **CafeProvider TEM** acesso ao contexto do LeiteProvider
```

---

# Context Authentification

Com o **Context Authentification** podemos contextualizar o método de **Login** e **Loggout**, as **varíaveis que determinam alguem autentificado** e o **header** da aplicação com o **Token** para ser enviado ao Backend.

## AuthContext

Na pasta de **contexts** iremos declarar um arquivo **authContext.tsx**, nele inicialmente o retorno do **Component** criado, que chamamos de **AuthProvider,** ficando da seguinte forma:

```tsx
const Context = useContext();

function AuthProvider({children}){
	return (
			<Context.Provider value={{}}>
				{children}
			</Context.Provider>
	)
}
```

Para utilizar de **Context** devemos usar do `useContext()` e também trazer o `children` que irá representar o resto da aplicação que ficará dentro desse **contexto.**

Ir para o topo para melhores detalhes da estruturação e uso de **Contextos**.

---

### Lidando com Login

Nesse **AuthContext** iremos criar o **state** que definirá se um usuário está ou não autentificado, como exemplo usaremos uma varíavel `authenticated` como valor **FALSE** como padrão. Logo em seguida criamos a função de Login como `handleLogin()`, a qual realizará a requisição ao nosso **Backend** levando as informações do usuário, esse retornará como resposta um **Token** e qualquer outra informação configurada pelo **Backend** desde que as informações enviadas existam na **Base de Dados**. Logo em seguida faço o seguinte:

1. Coloco o **Token** recebido dentro do **LocalStorage** ou **Cookie** ou **Session** dependendo da aplicação.
2. Como utilizo **axios** para conexões de **API's** configuro seu **defaults.headers** com um **Authentication** recebendo o **Token** de retorno para que esse seja enviado em toda requisição daqui em diante para o **Backend** fazer suas verificações de **middleware**.
3. Mudo o **state** da variável `authenticated` para **TRUE**.
4. Redireciono o usuário para o resto da aplicação.

Caso o **Token** não seja retornado da **API** devemos então informar que os dados foram incorretos ou qualquer outro tipo de decisão para **Login** **mal sucedido**.

Lembrar de concatenar a palavra **Bearer** no **Token** ao vinculá-lo no **defaults.headers**

```tsx
const [authenticated, setAuthenticated] = useState(false);
const [loading, setLoading] = useState(true);

async function handleLogin() {
    const { data: { token } } = await api.post('/authenticate');

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/users');
}
```

Dessa forma, adicionaremos a função de Login `handleLogin` e a variável `authenticated` para o nosso **value** do **Contexto** que será compartilhado com todo resto da aplicação.

```tsx
return (
    <Context.Provider value={{ authenticated, handleLogin}}>
      {children}
    </Context.Provider>
  );
```

---

### Lidando com Logout

Do mesmo modo do Login, iremos criar uma função para sair da aplicação, que no exemplo é chamada de `handleLogout` que agirá da seguinte maneira:

1. Mudo o **state** da varíavel `authenticated` para **FALSE.**
2. Removo o **Token** do **LocalStorage**
3. Defino como **undefined** o **defaults.headers Authorization** para não passar em futuras requisições.
4. Redireciona o usuário para a tela de Login

```tsx
  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
```

E assim adicionamos mais uma função ao **Contexto** da aplicação, sendo ela a `handleLogout`.

```tsx
 return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
```

---

### Manter o Login Ativo [Web]

A não ser que o usuário saia da aplicação pelo **Logout**, não iremos querer que ele perca o acesso toda vez que fechar o navegador ou aplicativo, sendo assim iremos por meio do **useEffect** garantir que toda vez que a aplicação for carregada, busque antes no **LocalStorage** se existe um **Token** salvo, todo processo será feito assim:

1. Dentro de um **useEffect** para executar ao entrar na aplicação
2. Buscar o **Token** no **LocalStorage**
3. **Se existir:** 
    1. Definiremos ele no **defaults.headers Authorization**
    2. Mudo o **state** da `authenticated` para **TRUE**

Como o processo de busca na **LocalStorage** pode demorar, para evitar que a tela de Login seja aberta mesmo que muito rapidamente, coloco um **state** **loading** para determinar se está em carregamento a busca da autentificação, usando esse **loading** como **TRUE** posso colocar uma tela de espera até que tudo seja verificado, adicionando também a variável no **Contexto** da aplicação.

Lembrar de concatenar a palavra **Bearer** no **Token** ao vinculá-lo no **defaults.headers**

```tsx
 return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}
```

- **Exemplo Completo**

    ```tsx
    import React, { createContext, useState, useEffect } from 'react';

    import useAuth from './hooks/useAuth';
    import { useState, useEffect } from 'react';

    import api from '../../api';
    import history from '../../history';

    const Context = createContext();

    function AuthProvider({ children }) {
      const [authenticated, setAuthenticated] = useState(false);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
          api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
          setAuthenticated(true);
        }

        setLoading(false);
      }, []);
      
      async function handleLogin() {
        const { data: { token } } = await api.post('/authenticate');

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);
        history.push('/users');
      }

      function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;
        history.push('/login');
      }

      return (
        <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
          {children}
        </Context.Provider>
      );
    }

    export { Context, AuthProvider };
    ```

### Separando a lógica em Hooks

Para melhor organização e arquitetura de código, separo toda lógica do **Contexto** criado dentro de uma **Hook** denominada **useAuth.tsx.**

Para isso dentro da pasta **contexts** crio uma outra pasta de **hooks**, onde ficará o **useAuth.tsx**.

Dentro dele teremos os **imports** e toda lógica programada para o **Contexto** desde a criação das variáveis **state** até as funções criadas, retornando elas dentro de um objeto para ser acessado pela nossa **AuthContext.tsx**

Ficando da seguinte maneira:

**useAuth.tsx**

```tsx
import { useState, useEffect } from 'react';

import api from '../../api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);
  
  async function handleLogin() {
    const { data: { token } } = await api.post('/authenticate');

    localStorage.setItem('token', JSON.stringify(token));
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    history.push('/users');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = undefined;
    history.push('/login');
  }
  
  return { authenticated, loading, handleLogin, handleLogout };
}
```

**authContext.tsx**

```tsx
import React, { createContext, useState, useEffect } from 'react';

import useAuth from './hooks/useAuth';

export const Context = createContext();

export function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout,
  } = useAuth();

  return (
    <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
      {children}
    </Context.Provider>
  );
}
```

---

## Autentificação nas Rotas [React]

Para bloquear rotas nas quais um usuário não pode acessar sem que tenha se autenticado, precisamos **privar** essas rotas em nosso **routes.tsx.**

Faço da seguinte maneira:

1. Defino minha **CustomRoute** que terá como propriedade as seguintes caracteristicas:
    1. **isPrivate,** que se existir significará que a rota precisa de autenticação antes.
    2. **...rest,** que será todos as outras propriedades de uma **Route**.
2. Traremos do **Contexto authContext** nossas variáveis de **state loading** e **authenticated**
3. **LOADING:** 
    1. Caso esteja em **loading** iremos exibir a tela de carregamento
    2. Se não, seguirá adiante.
4. **PRIVATE** e **AUTHENTICATED:** 
    1. Se existir a propriedade **isPrivate** e a variável **authenticated** for **FALSE**, então a rota será bloqueada redirecionando o usuário para o **Login**.
    2. Se não, irá retornar todo o resto das propriedades de deixará seguir adiante.

```tsx
function CustomRoute({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} />;
}

export default function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/login" component={Login} />
      <CustomRoute isPrivate exact path="/users" component={Users} />
    </Switch>
  );
```

Ou posso seguir a estratégia feito no **React Native** de separar as Rotas Privadas em um Arquivo diferente, ficando um **authRoutes.tsx** e outro **appRoutes.tsx** por exemplo.

---

# Context API no Next.js e React Native

### Context Next.js

As diferenças ao se utilizar o **Next.js** estão registradas nos **[Conceitos do Next.js](https://www.notion.so/Context-API-Next-js-02f69dd57ca44b1087d6fda8f463d1b3):**

[Context API // Next.js](https://www.notion.so/Context-API-Next-js-02f69dd57ca44b1087d6fda8f463d1b3) 

### Context React Native

As diferenças ao se utilizar o **React Native** estão registradas nos **[Conceitos do React Native](https://www.notion.so/Context-API-do-React-Native-77ffe2e1926d4c2bafe4f86a9176d835):**

[Context API do React Native](https://www.notion.so/Context-API-do-React-Native-77ffe2e1926d4c2bafe4f86a9176d835)

# Funcionalidade Avançada

Como **Next.js** é algo **Hibrído**, ou seja, ele roda em **Node.js** por trás dos panos, como um **Servidor Intermediario** do **Frontend** e programado como **Frontend**, fazendo com que nossa aplicação passe a ter **3 camadas**:

- **Backend** (Qualquer linguagem)
- **Next.js** (Node.js)
- **Frontend** (React.js)

Sendo assim o **Next.js** constroi a **Interface** da aplicação a partir da camada **Frontend (React.js)**, buscando os dados da camada **Backend.** Nessa camada do **Next.js** ele roda por meio do **Node.js**, que faz com que ele seja mais voltado ao **Backend,** sendo assim, a camada com **Next.js** pode fazer qualquer coisa que se faria na camada **Backend.  O que NÃO é recomendado!** 

# getServerSideProps

Esse método **deve** possuir o nome exatamente dessa forma,`**getServerSideProps`,** sendo melhor declarado a partir de um `**export const**` ao invés de `export function`. E **precisa** ser **Assíncrona**, ou seja, ter o **Async.**

Como esse método **dentro** de uma página do **Next.js,** eu posso **manipular** quais dados serão passados da camada do **Servidor** **Next (Node Servidor Intermediario)** para a camada do **Frontend React**. Inclusive para fazer chamadas **API**.

```tsx
export const getServerSideProps: GetServerSideProps = async () => {

  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  return {
    props: user
  }
}
```

Os dados buscados nesse método serão **compartilhados** com a página em que esse método se encontra por meio das ***props.***

```tsx
export default function Home(props) {
 console.log("essa props como parametro é a props retornada do ***getServerSideProps***: ", props);

  return (
		[...]
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
  const user = {
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }

  return {
    props: user
  }
}
```

---

### Chamadas API dentro do `getServerSideProps` ou dentro do componente?

Todos dados que vierem de **chamadas externas**, de chamadas **Assíncronas**, dentro de ***Components***, **NÃO** ficaram disponíveis quando o site for acessado por um **Moto de Busca** (Google), pois eles não aguardarão essas chamadas serem realizadas, já que todas chamadas feitas dentro dos ***Components*** são realizadas pelos **Browsers** e não pelo **Next Servidor.** 

Já com a função do **Next.js** `**getServerSideProps`** e diversas outras, conseguimos antes de toda interface visual ser construida e ficar visível em tela, obter os dados necessários do **Servidor,** que possibilitará que os **Motores de Busca** identifiquem esses dados também ao buscarem pelo nosso site. Pois assim o **Crawlers** irão primeiro executar as operações do **Servidor** e só então quando finalizar ele irá mostrar a interface.

---

## Tipagem e Parâmetro

A Tipagem para esse método é `**GetServerSideProps`** das **Lib** **Next:**
`import { GetServerSideProps } from 'next';`

Esse método possui um parâmetro, como um **contexto**, que se eu tiver definido o tipo do método corretamente com a tipagem acima, terei acesso aos **snippets** das opções que esse parâmetro me proporciona.

![Funcionalidade%20Avanc%CC%A7ada%20bd27d9bbdc204df18b0abec0ec859ac0/Untitled.png](Funcionalidade%20Avanc%CC%A7ada%20bd27d9bbdc204df18b0abec0ec859ac0/Untitled.png)

Algumas das opções disponíveis.

Para acessar os **Cookies** de uma página por exemplo, podemos usar da opção **req,** que me permite acessar dados da requisição, como o caso dos **Cookies** que podem ser acessados tanto via **Frontend (Browser)** como via **Backend (Servidor).**

```tsx
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level,
      currentExperience,
      challengesCompleted
    }
  }
}
```