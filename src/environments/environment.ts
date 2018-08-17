// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // contentful: {
  //   spaceId:'62lvjjthprje',
  //   token:'656f7386b787cf3157fca5cb7c168abd78c0da70c0fcb85baa0ab7393912ddf1'
  // }

    contentful: {
    spaceId:'pvdxttzvgb3d',
    token:'e88ac34324a5256d85ce142fe40ed93cec2aebdf6709ce2bc0c5e84c028a779b'
  }
};
