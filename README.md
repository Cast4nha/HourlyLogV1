# HourlyLog

Aplicação para gerenciamento de colaboradores com registro de ponto.

## 🚀 Começando

As seguintes instruções tem como objetivo final a execução da aplicação e também explicar o funcionamento do ambiente de desenvolvimento.


### 📋 Informações prévias 
O sistema HourlyLog pode ser executado de duas maneiras distintas: utilizando contêineres ou localmente. Ambas as formas de execução dependem de um conjunto de pré-requisitos essenciais para o funcionamento adequado do sistema.

Estrutura da aplicação:

Banco de Dados SQL Server em Docker: Independentemente do método de execução escolhido, o HourlyLog utiliza um banco de dados SQL Server que roda em um contêiner Docker. Isso garante a portabilidade e a facilidade de configuração do banco de dados, além de oferecer um ambiente isolado e consistente para o armazenamento de dados.

.NET Core 8: A lógica de negócios do HourlyLog é gerenciada por uma API desenvolvida em .NET Core 8.

Front-end em Angular: O front-end do HourlyLog é construído com Angular 17.

Execução em Contêineres:

Para executar o HourlyLog em contêineres, é necessário ter o Docker instalado e configurado na máquina. Os contêineres permitem que o sistema seja executado em um ambiente isolado, o que facilita a implantação e a escalabilidade. Além disso, a utilização de contêineres ajuda a evitar conflitos entre dependências e simplifica o processo de atualização do sistema.

Execução Localmente:

A execução local do HourlyLog é ideal para desenvolvimento e testes. Neste cenário, é necessário ter o .NET Core 8 e o Node.js instalados localmente, além de uma instância do SQL Server. O desenvolvedor pode executar a API e o front-end diretamente em sua máquina, permitindo uma interação mais rápida e um ciclo de feedback mais curto durante o desenvolvimento.

Em ambos os casos, é importante garantir que todas as dependências estejam corretamente instaladas e configuradas para que o sistema funcione como esperado. A documentação detalhada e um guia de instalação passo a passo são essenciais para auxiliar os usuários na configuração do HourlyLog, seja em contêineres ou localmente.

### 📋 Pré-requisitos para executar a aplicação em Docker:
```
Docker: 23.0 
Node: 20.11.1
```

### 🔧 Instalação

1.Primeiramente devemos fazer o clone do projeto:

```
https://github.com/Cast4nha/HourlyLogV1.git
```

2.Deve-se ter a seguinte estrutura de diretórios:

```
HourlyLogV1
        |    HourlyLog.API
        |    HourlyLog.Client
```
3.Entre na pasta HourlyLogV1 pelo terminal.

4.Em seguida acesse o diretório HourlyLog.Client:

```
cd .\HourlyLog.Client\
```
5.Instale as dependências do projeto

```
npm install
```

6.Após o exito na instalação, retorne para o diretório raiz:
```
cd ..
```
7.Ative o docker se necessário e execute o comando:
```
docker compose up
```
Utilize a flag -d caso não deseje visualizar logs de execução.

8.Retorne para o diretório da aplicação:
```
cd .\HourlyLog.Client\
```
9.Execute a aplicação:
```
ng serve
```
10.Acesse o sistema pelo navegador:
```
localhost:4200/
```
11.Ao visualizar a página inicial, acesse a opção Cadastro de Colaboradores, faça o seu cadastro e em seguida clique na barra de navegação e registre o seu ponto.

Para mais informações veja uma breve [Apresentação do Projeto.](https://docs.google.com/presentation/d/1lVBb2QoZPdWlsWUgMLOu0f7ERJL9qIXA74YjuFAK_Js/edit?usp=sharing)



## 🛠️ Seção destinada a preparar o ambiente de desenvolvimento)

A seguinte seção conterá as informações para configurar o ambiente de desenvolvimento e de como manter este projeto.
```
.NET: 8.0
Angular: 17.0
Docker: 23.0 
Node: 20.11.1
Bootstrap 5.3.3
Entity Framework Core (Configurado globalmente)
Visual Studio Code e Visual Studio
Datagrip: 2023.4 (Ou SGBD de prefêrencia)
```





