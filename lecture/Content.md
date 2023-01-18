# Annotations

## Working with Nx Workspace

Nx was design to work with huge monorepo projects, that contains small projects inside. The goal of this structure is to code 20% on the project folder, and 80% in libs folder, where shared components and utils will be placed.
## Running and serving the application Command

`yarn nx run projectName:serve`

> Here we can pass some flag as --port to indicate in which port should application listening.

## Installing and using external npm packages in Nx Workspace

Example: 
`yarn add @material-ui/core`

> Here is just use add to install a new packages.

## Creating a Shared React Library Command

`yarn nx g @nrwl/react:lib libName --directory=projectName`

> Here we can pass some flag as --dry-run to see what nx is running in the interative cli. With the --dry-run flag we can see if will generate what we expect. To execute the command properly we need to remove --dry-run flag.

## Creating a Shared Component Command

`yarn nx g @nrwl/react:component componentName --project=ProjectNameInLibFolder`

## Creating a TypeScript Library Command

`yarn nx g @nrwl/workspace:lib libraryName --directory=projectName`

## Using the Nx Dependency Graph to Visualize your Monorepo Structure Command

`yarn nx dep-graph`




