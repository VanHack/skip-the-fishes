// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  backendUrl: 'https://1n6ha9u5pd.execute-api.us-west-2.amazonaws.com/dev',
  restaurants: '/restaurants',
  restaurant: (id) => '/restaurant/' + String(id),
  meals: (id) => '/restaurant/' + String(id) + '/meals'
};
