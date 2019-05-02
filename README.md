#### Verificando as versões do node e npm comandos:
```
npm --version
node --version
```

#### Instalando Angular
```
npm install
npm install -g angular-cli
```

#### Criando um novo projeto usando CLI 
```
ng new BookList
```

#### Executando o projeto
```
ng serve
```

----
#### Generating CLI files Angular
```
ng generate component booklist
ng g service booklist
ng generate directive book
ng generate pipe bookfilter
```

----
#### Creating builds targeting various environments

```
ng build --env=prod

angular-cli.json or environment.prod.ts

"environments": { 
  "source": "environments/environment.ts", 
   "dev": "environments/environment.ts", 
   "prod": "environments/environment.prod.ts" 
  } 

```
----
#### Run tests
```
ng test
ng e2e
```