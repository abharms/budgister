// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
		apiKey: "AIzaSyBcer1B6RlmsNN8RjLfEEbf_Wri9OTJgEw",
	    authDomain: "fir-test-8a650.firebaseapp.com",
	    databaseURL: "https://fir-test-8a650.firebaseio.com",
	    projectId: "fir-test-8a650",
	    storageBucket: "fir-test-8a650.appspot.com",
	    messagingSenderId: "150346517256"
  }
};
