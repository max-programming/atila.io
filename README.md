<div align="center">
    <h1>
    <img src="/public/og.png" alt="Atila Fassina's website">
    </h1>
</div>

## Setup 🧱

<details>
    <summary>Environment Variables</summary>

```
XATA_API_KEY=<xata api token>
XATA_FALLBACK_BRANCH=< default branch >
```

</details>

<details>
    <summary>Database Schema</summary>

```json
{
  "tables": [
    {
      "name": "articles",
      "columns": [
        {
          "name": "published_at",
          "type": "text"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "platform",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        }
      ]
    },
    {
      "name": "appearances",
      "columns": [
        {
          "name": "date",
          "type": "text"
        },
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "recording",
          "type": "string"
        },
        {
          "name": "slides",
          "type": "string"
        },
        {
          "name": "url",
          "type": "string"
        },
        {
          "name": "type",
          "type": "string"
        },
        {
          "name": "published",
          "type": "bool"
        },
        {
          "name": "isFuture",
          "type": "bool"
        },
        {
          "name": "place",
          "type": "string"
        }
      ]
    }
  ]
}
```

You can save the above snippted in a `schema.json` and push to your own Xata workspace:

```sh
pnpm dlx @xata.io/cli init --schema schema.json
```

</details>

## Run It! 🔭

```sh
pnpm install && pnpm dev
```

Runs it locally on [localhost:3000](http://localhost:3000) 🧑‍🚀
