![](logoP.png)		
			
<Div Align=CENTER>

<h1><br>RAPPORT PROJET INTERNE</br></h1>

<h3>Réalisation d’une application web</h3>

SERVE ME


![](servemelogo.png)

</div>




Rédigé par :

**Alban DUVERNIER**

**Chaimae KHARBOUCH**

**Houssam LAMTOUL**

**Oussama KABBOUCH**


Encadré par :

**M. Samir YOUCEF**








# **Table des matières**
[**Remerciements**](#_Toc92837150)

[**Introduction**](#_Toc92837151)

[Objectif de notre application Web](#_Toc92837152)

[**I. Description du projet**](#_Toc92837153)

[i.	Expression du besoin et description du cas de l'application	](#_Toc92837154)

[**II.	Conception et choix architectural**](#_Toc92837155)

[ii.	Modèle de données UML	](#_Toc92837156)

[iii.	Choix d'architecture	](#_Toc92837157)

[**III.	Description détaillée de l’architecture à mettre en place**](#_Toc92837158)

[iv.  Les entités Hibernate / JPA	](#_Toc92837159)

[Annotation pour appliquer l'héritage :	](#_Toc92837160)

[v.	Les Dao Spring Data JPA	](#_Toc92837161)

[vi.	Les contrôleurs REST	](#_Toc92837162)

[**IV.	Frameworks utilisés**](#_Toc92837163)

[i.	Angular	](#_Toc92837164)

[·	Description	](#_Toc92837165)

[·	Choix d'Angular	](#_Toc92837166)

[ii.	Choix de Bootstrap	](#_Toc92837167)

[**Gestion de notre code**](#_Toc92837168)

[i.	Inscription	](#_Toc92837169)

[·	Utilisateur	](#_Toc92837170)

[·	Administrateur	](#_Toc92837171)

[ii.	Connexion	](#_Toc92837172)

[iii.	Offres et demandes	](#_Toc92837173)

[Component liste	](#_Toc92837174)

[Component dépôt	](#_Toc92837175)

[Component modifier	](#_Toc92837176)

[iv.	Profils utilisateurs	](#_Toc92837177)

[**Conclusion**](#_Toc92837178)




# **Remerciements** 
Tout d’abord, nous souhaiterions remercier l’ensemble du corps enseignant et personnel de l’école Polytech Nancy, pour nous avoir offert l’opportunité de réaliser ce projet.

Ensuite, nous tenions également à exprimer toute notre gratitude envers notre tuteur M. Samir Youcef, pour nous avoir soutenu tout au long de ce semestre.

Enfin, nous remercions aussi tout autant le ou les candide(s) qui acceptent de donner de leur temps pour lire ce rapport.
# **Introduction** 
Depuis quelques années, le développement de l’offre de services en ligne a été fulgurant. Les services en ligne vont bouleverser des secteurs comme la vente ou les services clients, et révolutionner en profondeur le fonctionnement quotidien des entreprises. 

Aujourd’hui, quérir un service dans son entourage demande d’effectuer des recherches en ligne et avoir une connaissance des entreprises ou des personnes. Alors notre idée pour ce projet est de faciliter la recherche pour les clients et de faire de la publicité pour les entreprises ou les particuliers en leur permettant de trouver toutes ces informations en une seule et même plateforme unique. Elle proposerait de mettre en relation clients et entreprise. Ce fut notre leitmotiv lors de ce projet de semestre depuis le mois de septembre.
### **Objectif de notre application Web** 
Aujourd’hui, chercher une offre de service demande une connaissance de l’écosystème client, lié à ce domaine. Ainsi pour mettre en relation la demande et l’offre correspondante nous souhaitions créer une plateforme appelée SERVE ME l’offre de service à son client cible.



# **I. Description du projet**
### **i. Expression du besoin et description du cas de l'application** 
Notre projet consiste à la création d’une application web manipulable directement en ligne. C’est une plateforme qui permet la mise en relation directe entre clients et prestataires. Le fonctionnement est simple : les acteurs proposent leurs services, et les clients peuvent donc choisir dans un vaste catalogue l’offre qui correspond le mieux à la réalisation de leur projet. Tous les deux peuvent ensuite communiquer directement sur le projet.

Le cas échéant, le client peut déposer également une annonce explicitant ses besoins… Dans l’attente d’une mise en relation directe avec le prestataire correspondant. Tous les deux peuvent ensuite communiquer sur les finalités du projet « prix ou autres contraintes… ».

Le but indispensable de notre application est d’apporter une vitrine aux acteurs et de les rassembler au même endroit afin d’accroître la vitesse de sourcing pour les différents clients.
# **II. Conception et choix architectural**
### **i. Modèle de données UML**
Afin de décrire clairement la structure de notre application et de modéliser ses différentes classes composant la couche métier du site, nous avons utilisé un diagramme de classe axé sur deux grandes parties, une partie pour gérer le compte utilisateur et Admin et une seconde pour gérer les offres et les demandes :

Un utilisateur peut s’inscrire, posséder un compte sur la plateforme, L’utilisateur peut jouer le rôle d’un acteur ou un client en même temps. Un acteur peut déposer des offres sous forme de publications. Un client peut réserver une offre parmi les différentes offres déposées sur la plateforme. Il peut également déposer lui-même une annonce sous forme de publication si aucune des offres déposées ne correspond à ses besoins. Ces différentes réservations seront stockées par la suite dans une classe réservation qui regroupera toutes les informations sur la réservation (id réservation, date de réservation…).


L’administrateur de l’application web possède aussi un compte. C’est la personne qui va en assurer le bon fonctionnement et qui sera responsable de la création et de la maintenance du cadre de travail. Il s'occupe du contenu qui est directement publié sur le site. Il peut par exemple supprimer une publication. Il peut affecter les droits administrateurs à un utilisateur. Il sera donc modérateur.

<<<<<<< HEAD
<Div Align=CENTER>
![DiagramDescription](uml.png)
</div>
=======
![](uml.png)
>>>>>>> 4c4885f9190e7f82ace2611c9dbd79f5b0dc5a70


<p Align=CENTER>Figure 1 : Modèle de données UML de notre cas d'application</p>
### **ii. Choix d'architecture**
Nous avons mis en œuvre notre application en faisant les choix suivants :

- Le frontend correspondant au côté client, qui a été mis en place à l'aide des langages descriptifs HTML/Bootstrap. Nous avons géré la dynamisation des pages web construites, ainsi que la communication entre le frontend et le backend à l'aide du Framework Angular.


- Le backend correspondant au côté serveur, qui a été mis en place à l'aide du Framework Spring Boot qui offrent entre autres, la possibilité de construire une application Java intégrant par défaut un écosystème Framework Spring. De plus, il s'occupe de l'inclusion et de la gestion des versions de multiples dépendances aux Framework dont a nécessité l'application lors de son développement.

Par ailleurs durant ce projet, nous avons appliqué l'architecture à trois tiers qui est une architecture basée sur une organisation des packages d'un projet Java, par couches. La figure ci-dessous résume de façon graphique l'architecture de notre application.

![](architecture.png)


<p Align=CENTER>Figure 2 : Représentation de l'architecture en couches mise en place</p>

**Couche Controller :** reçoit une requête HTTP REST cliente, et en fonction de la requête, elle fait appel à la couche métier pour effectuer les traitements, et cette dernière utilise la couche DAO pour accéder aux données. Une fois les données récupérées du système de gestion de la base de données, il assure le suivi des sessions pour envoyer la réponse au client. Il vérifie ainsi, les autorisations d'accès de chaque session du front avec l'annotation @CrossOrigin("origins="http://localhost:4200/").



**Couche métier :** dans laquelle nous avons implémenté toute la logique métier de l'application "nos classes". Où nous avons fait tous les traitements concernant les spécifications fonctionnelles. Or, nous utilisons l'approche orientée objet, d'où la nécessité d'utiliser l'opération mapping objet relationnel ORM, qui permet de faire le lien entre les données des tables et les objets de l'application. Pour faire l'ORM nous avons créé une couche d'accès aux données.

**Couche d'accès aux données DAO :** pour récupérer les données de manière plus simple, on utilise **spring data** qui est une implémentation générique basée sur **Jpa** et qui permet d'assurer presque l'essentiel du mapping objet relationnel. Elle fait appel par la suite au Framework spécialisé dans l'accès aux données : **Hibernate** (implémentation de Jpa).
# **III. Description détaillée de l’architecture à mettre en place**
### **i.  Les entités Hibernate / JPA**
Dans la partie I, nous avons présenté le modèle de données UML de notre application. De ce modèle de données, nous déduisons le modèle relationnel ci-dessous.

- <span style = "color: blue">Compte(<u>idUser</u>, password, fullName, telephone, email)</style>;
- Admin(<u>idUser</u>, password, fullName, telephone, email);
- User(<u>idUser</u>, password, fullName, telephone, email, profession, disponible, codePostal, adresse);
- <span style = "color: blue">Publication(<u>idPub</u>, name, content, created, online, type);</style>
- Offre(<u>idPub</u>, name, content, created, online, type, acteurId, prix);
- Demande(<u>idPub</u>, name, content, created, online, type, demandeurId);
- Reservation(<u>idUser</u>, <u>idPub</u>, dateReservation, dateAnnulation).

La propriété soulignée dans chaque relation ci-dessus correspond à sa clef primaire. Et les modèles marqués en couleur présentent les classes mères.

Cette modélisation nous a permis ainsi de créer les classes entités Hibernate/JPA en se servant des annotations suivantes :

**@Entity**, qui permet à Hibernate/JPA de les considérer comme des ORM (Object Relationnel Mapping) devant transporter des données entre l'application et la base de données. 

**@Id**, qui permet de consacrer un attribut de la classe comme étant sa clef primaire ; et **@GeneratedValue** pour la stratégie de génération des valeurs de cette clef primaire. 
##### **Annotation pour appliquer l'héritage :** 
Comme les classes User et Admin héritent les propriétés de la classe de base Compte, dans le but d'éviter la redondance et d'alléger le traitement des données. Mais la classe Compte n'occupera pas une table dans la base de données. La relation d’héritage n’a pas de sens dans le modèle relationnel. Dans ce cas, la classe parente n’est pas vraiment une entité au sens JPA, on parle de mapped superclass. La classe Compte et Publication ne sont plus déclarées avec l’annotation @Entity mais avec l’annotation **@MappedSuperclass**.
## **Les Dao Spring Data JPA**
Dans notre application, nous avons choisi pour nos classes DAO (Data Access Object) d'utiliser le Framework Spring Data JPA pour la gestion d'accès aux données vers sa base MySQL. Pour que les classes DAO de l'application soient prises en charge par le Framework Spring Data JPA et considérées comme une couche d'accès aux données, elles doivent respecter les conditions suivantes :

- Être est interfaces Java ;
- Porter l'annotation @Repository, pour permettre à Spring de l'injecter comme Bean dans l'application ;
- Etendre de l'interface JpaRepository en précisant la classe de la couche métier correspondante et le type de la clef primaire de cette dernière.

### **ii. Les contrôleurs REST**
Nous avons créé des contrôleurs REST qui réalisent des opérations de création/ modification/ suppression/ mise à jour d'un Offre/Demande ou encore de filtrer les dépôts/réservations des utilisateurs on s'est servi d'un nombre important d'annotations Spring qui ont facilité la communication entre le client et le serveur. A noter : 

**@RestController :** permet de marquer une classe comme étant une qui exposera des ressources appelées web services ; 

**@RequestMapping :** permet de spécifier l'URI d'un web service ou d'une classe représentant le Contrôleur REST ; 

**@GetMapping :** marque une ressource (et donc un web service) comme accessible par la méthode GET de HTTP. Spécifie aussi l'URI de la ressource ; 

**@PostMapping :** marque une ressource comme accessible par la méthode POST de HTTP. Spécifie aussi l'URI de la ressource ; 

**@PutMapping :** marque une ressource comme accessible par la méthode PUT de HTTP. Spécifie aussi l'URI de la ressource ; 

**@DeleteMapping :** marque une ressource comme accessible par la méthode DELETE de HTTP. Spécifie aussi l'URI de la ressource. 

Nous avons utilisé d'autres annotations fournies par Spring, à savoir, **@RequestBody**, **@RequestParam**, **@PathVariable** qui sont les moyens de passage de paramètres du client vers le serveur.
# **IV. Frameworks utilisés**
### i. Angular
#### <u> Description</u>
Angular est un Framework web qui permet de faciliter la mise en forme d'une application web coté client. En effet, ce Framework contient des balises appelées component qui permettent d'agencer plus facilement le code HTML en encapsulant des components ou de définir des accès sous certaines conditions a d'autres component.

Chaque component est constitué de plusieurs éléments :

- Un fichier HTML qui est le code de la page web
- Un fichier Ty Script qui permet de définir des variables à afficher dans le code HTML, de communiquer avec d'autres component ou avec le Back end
- Un fichier CSS qui définit le style de la page HTML.

La gestion de toutes ces fonctionnalités permet une grande liberté dans l'agencement des pages web.


#### <u> Choix d'Angular</u>
Nous avons choisi le Framework Angular pour ce projet. Ce choix a en effet été réalisé selon plusieurs critères.

Premièrement, C'est un des Framework les plus utilisés sur le marché actuel. Nous avons pu le constater lors de nos recherches de stages. Ainsi, en l'utilisant sur un projet comme celui-ci, cela nous fourni le bagage nécessaire pour postuler à ces offres.

D'autre part, c'est un Framework très riche qui permet une grande liberté. En effet, le système de components impliqués les uns dans les autres permet d'architecturer facilement notre code.

Enfin, la séparation entre la partie Ty Script et HTML permet de concorder parfaitement avec notre architecture Global MVN.
### **ii. Bootstrap**
Pour la partie Frontend nous avons opté pour le Framework Bootstrap qui nous a facilité le développement de notre application web. L’un des Framework les plus populaires au monde avec sa boîte à outils open source comprenant des variables sas et un système de grille responsive avec de nombreux composants prédéfinis et de puissants plugins JavaScript.

Donc grâce à Bootstrap nous avons pu rapidement et facilement gérer le responsive ainsi que concevoir et personnaliser notre site Web avec ses composants (buttons, caroussels, navbars…) disponibles dans la documentation Bootstrap, avec des exemples de thèmes (la connexion, inscription…) et une bibliothèque d’icônes open source.

<Div Align=CENTER>
![](Aspose.Words.3edbb4b1-1118-4d3a-b95d-fedba69f0806.008.jpeg)
</div>



# **V. Gestion de notre code**
### **i. Inscription**
#### <u> **Utilisateur**</u>
Pour gérer l'inscription d'un utilisateur, nous avons créé un modèle identique à celui du back end Springs boot, un service et un component.

Le service inscription permet de regrouper toutes les méthodes qui communiquent avec le back end :

- Une méthode get qui récupère tous les utilisateurs de la base de données et les stockent dans un tableau d'utilisateurs selon le modèle défini précédemment
- Une méthode post qui permet d'enregistrer un utilisateur dans la base de données
- Une méthode delete qui permet de supprimer un utilisateur.

` `A noter que toutes ces méthodes sont également disponibles pour les administrateurs via un autre service.

Dans le component, on récupère les informations d'un formulaire remplis par l'utilisateur, puis on utilise la méthode post pour l'enregistrer dans la base de données.
#### <u> **Administrateur**</u>
Si un administrateur est connecté, il aura accès à un component qui liste tous les utilisateurs et administrateurs par les méthodes get vu précédemment. Il pourra ainsi supprimer des utilisateurs (ou autres administrateurs) par ma méthode delete appelée dans les services ou encore promouvoir un utilisateur en tant qu'administrateur.

Pour cela, on récupère toutes les informations de l'utilisateur à promouvoir, on crée un administrateur avec ces informations que l'on enregistre dans la base de données via la méthode post (comme celle des utilisateurs). Enfin, l'utilisateur est supprimé de la base de données.
### **ii. Connexion**
La connexion requiert uniquement le mot de passe et le pseudo (composé de son nom et prénom) de l'utilisateur. Ces informations sont récupérées via un formulaire dans le component Connexion. Ensuite, on va réaliser deux méthodes get (administrateurs et utilisateurs) qui va récupérer tous les clients de la base de données et les stocker dans deux tableaux administrateurs et utilisateurs. Après, le mot de passe et le pseudo est comparé avec tous les mots de passe et pseudos de ces deux tableaux pour vérifier si l’utilisateur (ou administrateur) existe et est bien connecté. Enfin, s'il existe, on le renvoie sur son profil utilisateur.

Certaines données sont stockées dans le stockage local du client pour savoir s’il est connecté et qui il est. Ces données sont :

- Son Id ce qui nous servira dans d'autres components (notamment le profils utilisateurs)
- Son pseudo et son mot de passe
- Ses droits d'accès (s'il est administrateur ou simple utilisateur)
### **iii. Offres et demandes**
Les offres et les demandes fonctionnent de la même manière, selon 3 components : \* un premier component pour lister toutes les offres et demandes \* un autre pour les déposer \* et enfin un dernier pour les modifier
#### <u> **Component liste**</u>
Ce component permet d'afficher toutes les offres et les demandes de la base de données. Il exécute une requête get auprès du back end pour récupérer ces valeurs dans la base de données grâce à une méthode dans le component offre Services. Ces données sont ensuite affichées dans la page HTML. Pour chaque offre ou demande, il est possible de la supprimer ou l'éditer. Ces actions sont disponibles sous certaines conditions (si l'on est un admin ou que l'utilisateur actuel a déposé l'offre). Il est aussi possible de réserver une offre, si nous ne sommes pas l'auteur de cette offre (ou demande)
#### <u> **Component dépôt**</u>
Ce component permet de déposer une nouvelle offre(demande) dans la base de données via une méthode post. Les informations de cette offre (demande) sont récupérées dans un formulaire de la page HTML, puis envoyées au back end qui va les enregistrer dans la base de données.
#### <u> **Component modifier**</u>
Ce component permet de modifier une offre (demande). Il permet de réaliser une requête pull dans la base de données. Ce component a le même Template HTML que le dépôt.
### **iv. Profils utilisateurs**
Ce component est celui où les utilisateurs sont redirigés après leur inscription ou à chaque connexion. Il permet d'afficher plusieurs fonctionnalités

- la liste de toutes les demandes déposées par l'utilisateur
- la liste de toutes les offres déposées par l'utilisateur
- la liste des offres/demandes réservées par l'utilisateur

Cela est possible grâce au Stockage local où sont stockés l’Id de l'utilisateur courant ainsi que son nom et password. Les méthodes qui permettent d'afficher les offres/ demandes/ réservation de l'utilisateurs font appel à une méthode get du back end qui prend en paramètre l'id de l'utilisateur et qui s'applique à la table des offres ou des demandes.

### **Résumé**

Pour conclure cette partie, l'utilisation d'Angular nous a permis de mieux comprendre le fonctionnement des sites web. Bien que ce Framework soit difficile à appréhender, il permet une grande modularité et une grande liberté de création.



# **Conclusion**
Pour conclure, ce projet a été très enrichissant sur plusieurs points. Tout d’abord, nous avons pu développer des compétences en développement web. En effet, nous avons pu obtenir une première expérience avec les Framework Bootstrap et Angular. Ensuite, la cohésion de groupe a été le cœur de notre projet, nous avons pu surmonter plusieurs obstacles et difficultés grâce à notre travail d'équipe.

Réaliser un projet de ce genre pour nous est une opportunité pour pouvoir appliquer tout ce que nous avons pu étudier surtout en programmation distribuée, en même temps développer nos compétences en développement et en programmation JAVA avec l'utilisation du Framework open source Spring pour construire et définir l'infrastructure de notre application Java et qui facilite le développement et les tests ainsi que Hibernate qui gère la persistance des objets en base de données relationnelles et Maven notre outil de gestion et d'automatisation de production de notre projet.

Enfin, SERVE ME est le fruit de notre travail durant ce semestre. Ce projet très productif nous a permis d'avoir un aperçu de notre futur métier d'ingénieurs.

# **Ressources** 
[1] <https://openclassrooms.com/fr/courses/7471261-debutez-avec-angular?archived-source=4668271>

[2] <https://docs.spring.io/spring-data/rest/docs/current/reference/html/#reference>

[3] <https://openclassrooms.com/fr/courses/6900101-creez-une-application-java-avec-spring-boot>

Pour la réalisation de notre application nous nous sommes également servi des tutoriels sur YouTube des chaînes :

[4] CodeForgeYT

[5] Professeur Mohamed YOUSSFI



![](logoL.png)

