# Capstone Project - Competency Tracking Tool

## Description

The Competency Tracking Tool is a system being developed for SAIT's School of Health & Public Safety.
The goal of this system is to simplify the process of completing and submitting checklist items to instructors, as well as to secure these documents and prevent them from being tampered with after a preceptor signs off on them.

## Authors

-   Refaat El-hajj
-   Simon Dumalski
-   Brooks Maclean
-   Ryan Delorme
-   Jay Nguyen

## Branch Rules

**Do not** commit to the main branch unless you are editing the README.
When working on a Trello card, create a new branch and give it a descriptive name that pertains to the card.
For example: If you are working on a card called `React Router Setup`, create a branch called `react-router-setup`

**You** are in-charge of making sure your branch is up-to-date with the main branch.
Don't be afraid of merging. Nothing is going to be deleted forever.

When your feature implementation is completed, move your Trello card to the Testing list and have everyone try to break what you've added.

If all is good, create a pull-request so it can be merged with the main branch.

## File Structure

### Backend/Server

#### Controllers

This folder will contain the various controllers needed for the routes.
Files in this folder must follow the naming convention of `<type>Controller.js`
For example: `userController.js`

#### Middleware

This folder will contain all of our custom middleware needed for the routes.
Files in this folder follow no specific naming convention, must **must** be descriptive.

#### Models

This folder will contain all of the models and schemas used in our database.
Files in this folder must follow the naming convention of `<Model>.js`, with the first letter being capitalized.
For example: `User.js`

#### Routes

This folder contains all of the routes that will be used in the system.
Files in this folder must follow the naming convention of `<type>Routes.js`
For example: `userRoutes.js`

#### Schematics

This folder contains all of the schematics used for validation with JOI.
Files in this folder must follow the naming convention of `<Type>Schematic.js`, with the first letter being capitalized.
For example: `UserSchematic.js`

#### Utilties

This folder contains any miscellaneous functions that might be required throughout the application.
Files in this folder follow no specific naming convention, must **must** be descriptive.

### Frontend/Client

All files that export a React Component/Template **must** end in `.jsx` to keep thing organized.
Everything else can end in .js

#### Components

This folder contains all of the components that **could** be re-used throughout the frontend application.
Files in this folder must follow the naming convention of `<Component>.jsx`, with the first letter being capitalized.
For example: `Navbar.jsx`

#### Contexts

This folder contains all of the code pertaining to contexts.
Files in this folder must follow the naming convention of `<Name>Context.jsx`, with the first letter being capitalized.
For example: `AuthContext.jsx`

#### Hooks

This folder contains any custom hooks that we create.
Files in this folder must follow the naming convention of `use<Hook>.js`, with the first word being use.
For example: `useAuthContext.js`

#### Layouts

This folder contains all of the layouts that will be used in the application. Layouts are components that are used to _layout_ the page.
Files in this folder must follow the naming convention of `<Name>Layout.jsx`, with the first letter being capitalized.
For example: `RootLayout.jsx`

#### Pages

This folder contains all of the pages that will be displayed to users.
Files in this folder follow no specific naming convention, must **must** be descriptive.
Store pages as they would appear in the routes.
For example: A home page that would appear at `/student/home/` should be stored in `/pages/student/home/StudentHome.jsx`
