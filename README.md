# React for beginners

## What is React

Frontend library
The hottest right now, most likely topmost among Angular, Vue etc

## Why learn React

A lot of jobs out there
Widely used, and appreciated, and support is available
Web3 frontend is mostly React (and yes NextJS as well)
Even, if you dont go for web3, it is itself enough to get a job as a frontend developer

## Prerequisites

- HTML
- CSS
- JS-Basic and advanced JS like ES6+ including arrow functions, map/reduce/filter, promises, async await, .then/.catch, rest/spread, etc

## Setup

You need to install NodeJS, which will be used to run the React application

## Creating first React app

Run `npx create-react-app firstreactapp`

cd into the directory
and run `npm start`

## Understanding file structure and features like hot reloading

package.json
package-lock.json
.git
.gitignore
node_modules
public

Understanding index.html, our application mounts at root

Git is auto setup.

Few files and folders wont be pushed on Github

## Intro to component

- It is a function: rafc, rafce, rfc, rfce
- Html vs JSX (because we have brackets {} to add JS)
- Importing React is optional in React 18
- Must return only one element
- camelCase (classname , onClick nd everything else)
- React.Fragment or <></>
- Composite pattern: can use component within a component, nest components (will be covered in props children) etc
- Reusability of components (will see power after learnign props)
- Old way: Class vs Functional components (an application can contain both type of compoents at the same time)

## VS Code Extensions

- Auto close tag
- Auto rename tag
- ES7, React snippets (rafc, rfc, rfc, rfce)
- Prettier (make sure format on save is ticked and default formatter is set to Prettier)

## Chrome extension

React debugger

## Adding css, classes and styles

- importing css file
- adding classNames
- inline styling: adding styles in double brackets {{...}} or object in single bracket
- everything is camelCase and stringified

## Props

- props to component are same as input to functions
- reusability advantage
- Destructuring: direct, first line, right inside argument area
- passing obj items as props at a time

## Children Prop

It is a special prop

## Passing functions as props

Similarly, we can pass functions as props as well, (there is a hook named useCallback() that you may need to use, which is required to avoid unnecessary rerendering of child component to improve performance, but more on useCallback later/separate video)
