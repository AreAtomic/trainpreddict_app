# Documentation technique
Ce répertoire est le projet de front-end du TrainPreddict coureurs. Il est déployé directement en préprod et en prodution avec un processus de DevOps. Dans la documentation tu trouveras toutes les fonctionnalités du front-end.

| :exclamation: Attention | Les sections (En cours) sont en cours d'écriture et peuvent contenir des fautes et des erreurs d'utilisation |
|-|:-|
## Sommaire <a id="sommaire"></a>
[Sommaire](#sommaire)
[Technologie](#technologie)
1. [CRA Template PWA](#cra)
2. [Prettier](#prettier)
3. [Bulma](#bulma)
4. [AM Charts](#amcharts)
[Squelette](#squelette)

## Technologie (En cours) <a id="technologie"></a>
### 1. CRA Template PWA <a id="cra"></a>
Le projet est développé sur la base d'un projet [React - CRA Template PWA](https://github.com/cra-template/pwa). Cela permet d'installer dépendence et les scripts nécessaire à la création d'une Progressive Web App.

Il contient les script basique de react :
* `npm start`
* `npm run build`
* `npm run test`

### 2. Prettier <a id="prettier"></a>
La librairie Prettier pour formater le code. Tu dois installer [l'extension VS Code](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode#:~:text=Prettier%20Formatter%20for%20Visual%20Studio%20Code%20Prettier%20is,%C2%B7%20TypeScript%20%C2%B7%20Flow%20%C2%B7%20JSX%20%C2%B7%20JSON) pour pouvoir formater le code. Une fois installer tu peux exécuter le raccourcis [figure 1](#figure-1) pour formatter le fichier actif.
<a id="figure-1"></a> 
```
Ctrl + Maj + F
```
###### *Figure 1*
Tu peux également formatter l'ensemble du projet en exécutant la commande [figure 2](#figure-2)
<a id="figure-2"></a> 
```
npm run pretty
```
###### *Figure 2* 

### 3. Bulma <a id="bulma"></a>
Le framework CSS Bulma est installé grâce aux librairie javascript: 

* Bulma
* Node-sass
* Sass

Cela permet de créer un thème css/js général.

### 4. AM Charts <a id="amcharts"></a>
La librairie AM Charts permet de créer des graphique scientifique. Pour plus d'information sur [amcharts4](https://www.amcharts.com/docs/v4/getting-started/integrations/using-react/).

## Squelette (En cours) <a id="squelette"></a>

