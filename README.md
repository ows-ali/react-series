# Deploying React application on vercel using vercel cli

<b>Vercel</b> is a great option to deploy your React application for free.

We will deploy a basic React application created via `create-react-app` or you can clone the following project (on branch lecture13-movies-crud-app):

[React Movie App](https://github.com/ows-ali/react-series/tree/lecture13-movies-crud-app)

## Uploading on Vercel

First make sure vercel cli is installed. Use the following command to install vercel

`npm i -g vercel`

Then, for the first time only, you need to run
`vercel login`

It will show you multiple options to login, select 'Continue with Email' option and click the link sent on email

Finally, just run this simple command in the root directory of your project:
`vercel`

## For updating the application

If you run `vercel` it will deploy on a slightly different URL, which is basically for testing the new changes in development environment. If it looks good, then to update the previous production url, you need to run
`vercel --prod`

## Debugging potential errors

Process exited with status code 1

Run `npm run build` and see if the build is failing, otherwise you can check the logs (it will show you the command to check logs) or you can also check by going on your vercel account

## Conclusion

Vercel also provides you envrionment variable options which you can use to connect with database or backend (if you are using)
