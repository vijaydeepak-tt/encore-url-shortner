# URL Shortener with Encore

## Developing locally

When you have [installed Encore](https://encore.dev/docs/install), you can create a new Encore application and clone this example with this command.

```bash
encore app create
```

## Running locally

```bash
encore run
```

While `encore run` is running, open <http://localhost:9400/> to view Encore's [local developer dashboard](https://encore.dev/docs/observability/dev-dash).

## Deployment

Deploy your application to a staging environment in Encore's free development cloud:

```bash
git add -A .
git commit -m 'Commit message'
git push encore
```

Then head over to the [Cloud Dashboard](https://app.encore.dev) to monitor your deployment and find your production URL.

From there you can also connect your own AWS or GCP account to use for deployment.

Now off you go into the clouds!

## Testing

```bash
encore test
```

## Commands used

```bash
encore db shell <database-name>
```

connect to Docker DB in shell

## DB Requirement

- Need docker installed and running
- create a migration file's inside the migration (Refer files in: ./url/migrations )
- After setting up the SQLDatabase run the App
- It automatically creates the database in the docker.
- Even after restarting the docker the data stored will not be destroyed
