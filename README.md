[![structor compatible](https://img.shields.io/badge/structor%20compatible-v0.2.9-0077dd.svg?style=flat)](http://helmetrex.com)

##### This repo is a [Structor](https://github.com/ipselon/structor) starter project for [Spring Boot](http://projects.spring.io/spring-boot/) Web application with [React](https://facebook.github.io/react/) UI. 

## What can be built?

Choosing this project as a starter project you can easily build a Web application for database CRUD operations with REST interface, authentication, and dynamic and good looking Web UI. 

Here you will find a wide range of the components for sophisticated Web UI:
  * Data Grid components with sorting, paging, editing and deleting capabilities,
  * List components for collections,
  * Form components for adding, editing records in collections,
  * Form components for filtering data in collections,
  * Pagination components for the navigation though pages in Data Grids,
  * more than 40 components from popular labraries React Boostrap and React Widgets,
  * many adopted components such as form input elements, navigation through pages and others.

In contrast to majority of the Web apps for database CRUD operations, UI components of the project can display collections of linked entities, interact with each other, search data, and has different types of input elements including dropdowns, calendars and others.

It's worth a mention that all UI components are created and manipulated by a visual builder, which gives an instant feedback about how components look and feel.

All tools and libraries of this project are neatly configured and perfectly work with each other, also you will find here a very simple building process of the whole application.

#### tl;dr
* Create a Web app for database with cool and dynamic UI.
* Build it as a single jar file and deploy it on the server.

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/screenshot.png" />
</p>


## What's inside?

| Server part | Client part |
|-------------|-------------|
|Spring Boot | React |
|Spring Data | React Router |
|Spring Data REST | React Bootrap |
|Spring MVC | React Widgets |
|Spring Security | Redux |
| and other Java libs | and other JS libs |


## Getting started

#### Content
* [Prerequisites](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#prerequisites)
* [Brief tutorial](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#brief-tutorial)
 * [Three sources of components](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#three-sources-of-components)
 * [Create an account on Structor Market](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#create-an-account-on-structor-market)
 * [Starting Structor](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#starting-structor)
 * [Database entities and repositories](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#database-entities-and-repositories)
 * [Running Spring Data REST service](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#running-spring-data-rest-service)
 * [Authentication mechanism](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#authentication-mechanism)
 * [Create a List component](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#create-a-list-component)
 * [Create a Data Grid component](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#create-a-data-grid-component)
 * [Create a Form component](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#create-a-form-component)
 * [Create a Pagination component](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#create-a-pagination-component)
 * [Build a Web application](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#build-a-web-application)
 * [Build a Web application](https://github.com/ipselon/sdr-bootstrap-prepack/blob/master/README.md#build-a-web-application)

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
2. Built-in source code generators, which generate the source code from the composition of components on the page. They also can be found in the project source code.
3. Online source code generators, which generate the source code of the advanced components, such as data grids or forms for RESTful interface. They can be installed into project from [Structor Market](https://helmetrex.com) and behave as they are built-in generators. Look at [the list of available generators](http://probe.helmetrex.com/generators?projectId=175) for this project.

#### Create an account on Structor Market

In this tutorial we will create a few data aware components for Spring Data REST interface. You need to install online generators for such components. But if you are not signed in Structor Market you will not be able to call online generators from Structor.

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

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/projects_gallery.png" />
</p>

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
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/db_relational_schema.png" />
</p>

#### Running Spring Data REST service

**Q:** Why we need to start Spring Boot server before we can proceed to UI building? 

**A:** You may consider that Structor is a Web server, which gives you the ability to edit pages and the source code of your Web application while it is working. In other words, you have non stop working Web app, and each of the components in it has to be able to fetch data from the database through the REST service when you are working in Structor. Otherwise, you'll see errors in the browser console or on the page.

There is one more reason - online generators of data aware components need to obtain a metadata from Spring Data REST service about exposed collections of entities, but we will learn about this later in this tutorial.

Before starting the server we need to build the Java code. For your convenience there is a script which starts building process, run it from the command line (assuming you are in the project directory):
```
./server/build-server.bsh
```

Now we need to run Spring Boot server. There is also a script for this, and you can run it by the following command:
```
./server/server.bsh start
```

**Note:** To stop server replace `start` with `stop` argument. Also, if you need to rebuild Java source code you don't need to stop the server, just run `build-server.bsh` script again, and it will care about stopping server and running it again after the successful building.

**For Windows users:** There is no a convenient script for building the server on Windows OS so far, but we have one for running the server: `server.bat`. To build the server you have to stop it (if it is runnnig) and run maven: `mvn package`.

#### Authentication mechanism

Now we can back to the Structor workspace. Find on the home page a warning note about the server: we already did start the server, and it's left to sign in to the service.

The project has already implemented an authentication by token with Spring Security. There are some user accounts in service (they are created by default while server is starting, to remove or change this remove or change `server/src/main/resources/import.sql` file accordingly). Access to all exposed data repositoires is forbidden.

As you already know, in Structor you are working with live Web application, which has to have an access to the REST service. So, you have to sign in into the service before creating components in order to avoid a data access denying.

Switch to `Live preview mode` in Structor, and click `Sign In` link on top navigation toolbar on the home page.
<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/home_page.png" />
</p>

Enter login `user` and password `password` in appeared sign in form. After successful authentication you will be redirected to the home page back.
<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/sign_in_form_page.png" />
</p>

Now we are ready to create first component: a list of departments.

#### Create a List component

First of all, go to the main menu and select `Generators` option.
<p align="center">
 <img width="30%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/main_menu_with_generators.png" />
</p>

In opened tab of the browser choose `Available generators` tab. And find generator with key: `SpringDataRest.Lists.Entity.Toggle`. You can use filer menu on the left-side panel in order to find generator faster. Then just click on `Install` button in the generator card.
<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/generator_card_1.png" />
</p>

Now we have the list generator installed in our project. Let's switch to the Structor workspace, and switch to edit mode.

This project has three pages with routes:
* `/home`
* `/user-profile`
* `/data-grid`

With two of them you are already familiar, now go to the `/data-grid` page. To do this select the route from a routes dropdown list in the top toolbar.

We will see a grid with four Panel components in it. Each Panel component indicates a place where new component should be placed. 
So, select Panel component (click on it) right under `Departments` title. 

Open dropdown list from the green button on the component toolbar (rigth above of selected component) and choose `Generate source code` option as it is shown on screenshot.

**Note:** If you missed and some other element on the page was selected, use breadcrumbs navigation panel right above the page area to correct the selection.
 
<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_1.png" />
</p>

By clicking on `Generate source code` we started the component generation wizard, and now we have to type a group name and a component name.
You may choose any existing group or enter new one. In this tutorial we will place all components source code into `Tutotial` group. 
And the name of our list component will be `DepartmentList`

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_2.png" />
</p>

The next step is for choosing a generator for our component, here we can find built-in generators and online generators as well. 
Find here newly installed generator for list component and click on its label.

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_3.png" />
</p>

This step is very important because here we need to understand what metadata is corresponding to our REST service interface.
Metadata for generators has form of a JSON object structure, and each generator has its own structure. 
But all generators from SpringDataRest category have almost identical structure. 

Metadata of SpringDataRest generators should describe what entities you want to be displayed by particular component. 
According to the Spring Data REST specification, we can have two types of presentation of the entity:
 
* The first is the entity itself - all fields which it has. 
* And the second is the entity projection - can include fields from entity or fields which take values from linked entities fields values.

Read about Spring Data REST projections in <a href="http://docs.spring.io/spring-data/rest/docs/current/reference/html/#projections-excerpts.projections" target="_blank">Reference Documentation</a>.
Now please examine the source code of `DepartmentView` projection in file `server/com/changeme/repository/DepartmentView.java` for `Department` entity.

```java
@Projection(name="departmentView", types = {Department.class})
public interface DepartmentView {

    @Description("{title: 'Department', targetProp: 'name'}")
    @Value("[#{target.accessLevel.description}] #{target.name}")
    public String getFullName();

}
```

Here we can see that projection has name `departmentView` and one field `fullName`. 
According to the annotations this field will display combined value from linked `AccessLevel` entity field `description` and `Department` entity field `name`.
  
Also, you may notice annotation `@Description` with string value, which is similar to JSON object, this is an additional information for generators, 
read more detailed explanation in <a href="https://github.com/ipselon/sdr-bootstrap-prepack/wiki/Description-annotation-format" target="_blank">Description annotation format</a> article.
  
The metadata of the list generator has the following structure:
  
```json5
{
    "collection": {
        "entity": "enter name of entity",
        "projection": "if you want to see a projection"
    }
}
```

* `entity` field stands for entity name as it is written in Spring Data REST metadata.
* `projection` field stands for an entity projection as it is written in Spring Data REST metadata.

About what is metadata in Spring Data REST you may read in <a href="http://docs.spring.io/spring-data/rest/docs/current/reference/html/#metadata.alps" target="_blank">Reference Documentation</a> for ALPS.

Our REST service instance has also a HAL browser which displays information of ALPS and HATEOAS metadata. 
You may check it by opening `http://localhost:8080/api/browser` address in browser. There you may find the names of all our entities, their collections, projections, custom search methods, etc.

According to the ALPS we need to enter into our metadata structure the following values:

```json5
{
    "collection": {
        "entity": "department",
        "projection": "departmentView"
    }
}
```

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_4.png" />
</p>

Click on the `Next` button and wait for generator, at that moment generator checks your data with ALPS and sends data to the Structor Market service.
As a result we will have a bunch of generated source code files, which will be displayed in the next wizard dialog.

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_5.png" />
</p>

Just click on `Save` button and Webpack will do its work - compile all code and reload the page with new `DepartmentList` component.
This component is fully functional and displays all data from departments collection, what you may check in the live preview mode.

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_6.png" />
</p>

**State diagram**

Here is a diagram which explains all processes for the component source code generation.

<p align="center">
 <img width="90%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/HowGeneratorsWork.png" />
</p>

#### Create a Data Grid component

We have to walk through the same process in order to create a Data Grid component for `Person` entity:
* Install generator with `SpringDataRest.DataGrids.Search.SortPageToggle` key.
* Select on `/data-grid` page Panel component under title `Persons`.
* Start generation wizard and enter `Tutorial` for group name and `PersonDataGrid` for component name.
* Choose installed generator from `SpringDataRest` category. It has a description: 

        `
        Data grid for displaying a collection of entities or entity 
        projections found by a custom search method in entity's repository.
        ` 

Here we need to review the metadata structure for this generator. 
The metadata is slightly differs from the previous generator metadata because here we want to generate a component which is listening to another component.

Look at the structure:
```json5
{
    "collection": {
        "entity": "enter name of entity",
        "projection": "if you want to see a projection",
        "search": {
            "name": "name of search by params"
        }
    },
    "linkToComponent": "some component with valid collection signature"
}
```

* `entity` - entity name.
* `projection` - entity projection name.
* `search.name` - name of the custom search method in entity repository.

What the custom search method is is explained in Spring Data JPA <a href="http://docs.spring.io/spring-data/jpa/docs/current/reference/html/#repositories.query-methods" target="_blank">Reference Documentation</a>   

How to find the name of the custom search method for entity repository? 
You may find the method name in ALPS metadata, or (if you did not change method path by annotation in repository Java class file) use the name of the method itself as it is written in class file.
    
```java
@RepositoryRestResource(collectionResourceRel = "persons", path = "persons")
public interface PersonRepository extends PagingAndSortingRepository<Person, Long> {

    Page<Person> findByDepartment(@Param("department") Department department, Pageable pageable);

}
```

As you can see, method `findByDepartment` has an input `department` parameter which corresponds to `Department` entity. 
In other words, if we invoke this method we will get all persons in specified department. 
 
As far as our previously created component has the list of departments and we can toggle (select by clicking) any department in it, we can link new data grid component to this list.
That means we want to select department in the list and see persons which belong to this department.

Additionally, the projection of `Person` entity has name `personView` (`server/com/changeme/repository/PersonView.java` file):
```java
@Projection(name="personView" ,types = {Person.class})
public interface PersonView {

    public String getFirstName();

    public String getLastName();

    public Float getSalary();

    public boolean getIsProbationPeriod();

    @Description("{title: 'Date of birth', targetProp: 'birthDate'}")
    public Date getBirthDate();

    @Description("{title: 'Department', targetProp: 'department'}")
    @Value("[#{target.department.accessLevel.description}] #{target.department.name}")
    public String getDepartmentName();
}
```

So, the resulting metadata for the data grid component will be:

```json5
{
    "collection": {
        "entity": "person",
        "projection": "personView",
        "search": {
            "name": "findByDepartment"
        }
    },
    "linkToComponent": "DepartmentList"
}
```

Save the generated source code, and try to check components in live preview mode.

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_7.png" />
</p>

**State diagram**

The following diagram shows how components connect to each other, and why removing one component does not break others.

<p align="center">
 <img width="90%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/HowDataRESTComponentsWork.png" />
</p>

#### Create a Form component
 
Just like all previous components, Form should be created by its generator. Follow these steps to create a Form component:

1. Install generator with key: `SpringDataRest.Forms.AnyCollection.AddEdit.Vertical`.
2. Select a Panel component under title: `Edit person`.
3. Start generating the source code and choose `Vertical form for editing and creating records in a collection of entities`.
4. Choose `Tutorial` group and type `PersonFormEdit` in name input field.
5. In metadata dialog put the following:
```json5
{
    "linkToComponent": "PersonDataGrid"
}
```
6. In case of the source code is successfully generated click `Save`.

<p align="center">
 <img width="60%" src="https://raw.githubusercontent.com/ipselon/sdr-bootstrap-prepack/master/docs/img/data_grid_page_8.png" />
</p>


#### Create a Pagination component

Try to use all above to create a `Pagination` component for `PersonDataGrid` component.

If you have any troubles to do that, please ask on <a href="https://www.facebook.com/groups/structor/" target="_blank">Facebook group</a> or on our Slack channel. 
Invitation to the Slack channel you will receive after successful account registration.

#### Build a Web application

If you've watched video tutorials <a href="https://www.youtube.com/watch?v=AY65e6Ry_rY" target="_blank">here</a> and <a href="https://www.youtube.com/watch?v=JLz8B0XJPyk" target="_blank">here</a>, 
you might noticed that Structor has an `Export project` item in the main menu. This option will transform all created pages into React components along with React Router settings for your Web application.
  
Before we start building our application we need to export project pages, after that you will see new source code for page components in `client/src/routes` directory.

Now we need to build the client code with project's Webpack. You may find its configuration in `client/build-conf` directory. 
To compile and pack the client JavaScript code just run following command from projects directory:
```
npm run build-client
```

Then if you have Spring Boot server running, just build the Java code:
```
server/build-server.bsh
```
Or if the server is down, build and run it:
```
server/build-server.bsh && server/server.bsh start
```

Just like that. Now you have a Web application, packed in jar file as Spring Boot Web application. 
Find this file here: `server/target/changeme-service-1.0-SNAPSHOT.jar`

And if you try to open `http://localhost:8080` address you will see the home page of your application.

## Further readings

* [Description annotation format](https://github.com/ipselon/sdr-bootstrap-prepack/wiki/Description-annotation-format) - why we need to add custom `Description` annotation to entities and projections.
* [Useful pre-created components](https://github.com/ipselon/sdr-bootstrap-prepack/wiki/Useful-pre-created-components) - description of different components and how to use them for common use cases.

## License

MIT.
