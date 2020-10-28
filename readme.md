# Hike One
[![LGTM Grade][lgtm-icon]][lgtm]
[![Depfu Status][depfu-icon]][depfu]

Website for Hike One using [Next.js](https://nextjs.org/), deployed at [ZEIT Now](https://zeit.co/) and with content from [DatoCMS](https://datocms.com/).

## Getting started
```sh
git clone git@github.com:voorhoede/hike-one.git
cd hike-one
yarn install --frozen-lockfile
```

### Environment
All needed environment variables are listed in the [.env](.env) file. To automatically set them fill in a `.env.local` file following the same structure as the example file.
```sh
cp .env .env.local
```

### Local development
```sh
yarn dev
```

### Production build
```sh
yarn build
yarn start
```

## Other scripts
`yarn ...` | Description
---|---
`lint` | Lints `.js` and `.less` files using Prettier and Stylelint and logs any errors/warnings.
`format` | Formats all `.js` files using Prettier.

**NOTE**: Pull request checks will fail if files aren't correctly formatted. To fix this, run `yarn format` and commit the changes.

## Useful links
* [Production website](https://hike.one/)
* [DatoCMS](https://hike-one-1.admin.datocms.com/)

[lgtm]: https://lgtm.com/projects/g/voorhoede/hike-one/
[lgtm-icon]: https://img.shields.io/lgtm/grade/javascript/g/voorhoede/hike-one.svg?style=flat-square
[depfu]: https://depfu.com/repos/github/voorhoede/hike-one/
[depfu-icon]: https://img.shields.io/depfu/voorhoede/hike-one?style=flat-square
