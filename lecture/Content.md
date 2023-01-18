# Annotations

## Running and serving the application Command

`yarn nx run projectName:serve`

> Here we can pass some flag as --port to indicate in which port should application listening.

## Creating a Shared React Library Command

`yarn nx g @nrwl/react:lib libName --directory=projectName`

> Here we can pass some flag as --dry-run to see what nx is running in the interative cli. With the --dry-run flag we can see if will generate what we expect. To execute the command properly we need to remove --dry-run flag.

## Creating a Shared Component Command

`yarn nx g @nrwl/react:component componentName --project=ProjectNameInLibFolder`

## Creating a TypeScript Library Command

`yarn nx g @nrwl/workspace:lib libraryName --directory=projectName`



