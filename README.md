# Spring Data REST Bootstrap prepack

This repo is a [Structor](https://github.com/ipselon/structor) starter project for [Spring Boot](http://projects.spring.io/spring-boot/) Web application with [React](https://facebook.github.io/react/) UI. 

## What can be built?

Choosing this project as a starter project you can easily build a Web application for database CRUD operations with REST interface, authentication, and dynamic and good looking Web UI. 

Here you will find a wide range (which is getting wider day by day) of the components for sophisticated Web UI:
  * Data Grid components with sorting, paging, editing and deleting capabilities,
  * List components for collections,
  * Form components for adding, editing records in collections,
  * Form components for filtering data in collections,
  * Pagination components for the navigation though pages in Data Grids,
  * more than 40 components from popular labraries React Boostrap and React Widgets,
  * many adopted components such as form input elements, navigation through pages and others.

In contrast to majority of the Web apps for database CRUD operations, UI components of the project can display linked entities collections, interact with each other, search data, and has different types of input elements including dropdowns, date calendars and others.

It's worth a mention that all UI components are created and manipulated by a visual builder, which gives an instant feedback about how components look and feel.

All tools and libraries of this project are neatly configured and works perfect with each other, also you will find here a very simple building process of the whole application.

#### tl;dr
* Create a Web app for database with cool and dynamic UI.
* Build it as a single jar file and deploy it on the server.

## What's inside?

<table>
 <tbody>
  <th>
   <td padding="5px">iruwero</td>
   <td padding="5px">weiruyroie</td>
  </th>
  <tr>
   <td padding="5px">wiuerwueir</td>
   <td padding="5px">weoriueroiu</td>
  </tr>
 </tbody>
</table>


| Server part | Client part |
|-------------|-------------|
|Spring Boot | React |
|Spring Data | React Router |
|Spring Data REST | React Bootrap |
|Spring MVC | React Widgets |
|Spring Security | Redux |
| and other Java libs | and other JS libs |


## Getting started

### Prerequisites

* <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html" target="_blank">JDK 8</a>
* <a href="https://nodejs.org/en/" target="_blank">NodeJS 4 or 5</a>
* <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank">npm 3</a>
* <a href="https://www.npmjs.com/package/structor" target="_blank">Structor 0.2.9</a>

Assuming you are familiar with Spring/Sptring Data/Spring Security and React/Redux/React Router.

### Brief tutorial

It is needed to explain that this project is designed to work with Structor, wich has such a nice feature as the source code generators for React components, and which we will use intensively in this tutorial. So, if you are not familiar with Structor, it is recommended to watch <a href="https://www.youtube.com/watch?v=AY65e6Ry_rY" target="_blank">this video</a> and <a href="https://www.youtube.com/watch?v=JLz8B0XJPyk" target="_blank">this video</a> before starting this tutorial.

#### Three sources of components

There are 3 methods to get components in a Stuctor project:

1. Pre-created components, which have already written source code and can be found in the source code repository of the project
2. Build-in source code generators, which generate the source code from the composition of components on the page. They also can be found in the project source code.
3. Online source code generators, which generate the source code of the advanced components, such as data grids or forms for RESTful interface. They can be installed into project from [Structor Market](https://helmetrex.com) and behave as they are build-in generators. Look at [the list of available generators](http://probe.helmetrex.com/generators?projectId=175) for this project.

#### Create an account on Structor Market

In this tutorial we will create a few data aware components for Spring Data REST interface. You need to install online generators for such components. But if you are not signed in Structor Market you will not be authorized to call online generators from Structor.

If you don't have an account on Structor Market, please create it [here](http://probe.helmetrex.com/sign-up).

#### Starting Structor

If you do not have Structor yet, please install it by this command:
`
npm i structor -g
`

Create an empty folder and enter in it (assuming you are doing that in command line). 
Then type the following to run Structor:
`
structor
`

**Note:**  Structor should be installed in global scope, otherwise you will not be able to clone this repo in folder because folder will not be empty in case structor installed there.

After Stuctor successfully started open this address `http://localhost:2222/structor` in your browser.

**Note:** If you prefer to run Structor on another port use command option where port is specified: `structor -p 4000`

In the browser you will see the projects gallery, find **sdr-bootstrap-prepack** project there and start cloning it by clicking on `clone` link.

Cloning will take approximately 2 or 3 minutes. It takes so much time due to the npm installation process - it tries to install all needed dependecies from the npm repository.

**Note:** Sometimes npm 3 makes installation for a too long time, and Structor looses the control of this process. In that case it is recommended to run `npm install` command manually in project's directory and then reload entire page in the browser.

Right after finishing cloning process, you'll see the workspace of the Stuctor with the home page of the project. But leave it for the moment and switch to the source code, which appeared in our folder.

#### Database entities and repositories

It is time to get familiar with the source code of the project. If you look at the structure of files inside the project directory you'll find two folders `server` and `client`. `server` dir includes all Java source code, and we need to find the source code of database entities in it.

Go to `server/src/main/java/com/changeme/repository` directory. Here you can see classes which describe a database schema with entities and their repositories speaking in terms of Spring Data. If you are not familiar with Spring Data, please read about this in [Spring Data Reference Documentation](http://docs.spring.io/spring-data/jpa/docs/current/reference/html/).

There are already four entities: `AccessLevel`, `Department`, `Person`, `UserProfile`. We are interested only in 3 of them, because `UserProfile` entity is used in authentication mechanism and should not be exposed through the REST enpoint. However, password field will not be shown in JSON even you want to expose `UserProfile`.

All what we should know about entities on this stage is that entities have relations with each other because they are a mapping of the database tables with the same relations. 

All other things regarding the database initialization, its connections and transactions are provided by Spring Boot and Spring Data accoring to the configuration, which you can find in `server/src/main/resources/application.yml` file .

Here is a diagram of the relations between entities:

<p align="center">
 <img src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/db_relational_schema.png" style="width: 100%" />
</p>

#### Running Spring Data REST service

**Q:** Why we need to start Spring Boot server before we can proceed to UI building? 

**A:** You may consider that Structor is a Web server, which gives you the ability to edit pages and the source code of your Web application while it is working. In other words, you have non stop working Web app, and each of the components in it has to be able to fetch data from the database through the REST service when you are working in Structor. Otherwise, you'll see errors in the browser console or on the page.

There is one more reason - online generators of data aware components need to obtain a metadata from Spring Data REST service about exposed collections of entities, but we will learn about this later in this tutorial.

Before starting the server we need to build the Java code. For your convenience there is a script which starts building process, run it from the command line (assuming you are in the project directory):
`
./server/build-server.bsh
`

Now we need to run Spring Boot server. There is also a script for this, and you can run it by the following command:
`
./server/server.bsh start
`

**Note:** To stop server replace `start` with `stop` argument. Also, if you need to rebuild Java source code you don't need to stop the server, just run `build-server.bsh` script again, and it will care about stopping server and running it again after the successful building.

**For Windows users:** There is no a convenient script for building the server on Windows OS so far, but we have one for running the server: `server.bat`. To build the server you have to stop it (if it is runnnig) and run maven: `mvn package`.

#### Authentication mechanism

Now we can back to the Structor workspace. Find on the home page a warning note about the server: we already did start the server, and it's left to sign in to the service.

The project has already implemented an authentication by token with Spring Security. There is one user account in service (this account is created by default while server is starting, to remove or change this bahaviour remove or change `server/src/main/resources/import.sql` file accordingly). By default access to all exposed REST endpoints is closed.

As you already know, in Structor you are working with live Web application, which has to have an access to the REST service. So, you have to sign in into that service before creating components in order to avoid a data access denying.

Switch to `Live preview mode` in Structor, and click `Sign In` link on top navigation toolbar on the home page.
<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/home_page.png" />
</p>

<table border="0" width="100%">
 <tbody>
  <tr>
   <td>wiuerwueir</td>
   <td>weoriueroiu</td>
  </tr>
 </tbody>
</table>
#### Create List component

### How it works

