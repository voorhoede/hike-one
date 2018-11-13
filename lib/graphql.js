require('dotenv').config()
const fs = require('fs')
const { GraphQLClient } = require('graphql-request')

const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${process.env.DATO_API_TOKEN}`,
  }
})

const getData = async (fileName) => {
  const query = await readQueryFile(`./pages/queries/${fileName}.query.graphql`)
  const data = await client.request(query)

  return { ...data[fileName] }
}

function readQueryFile(query) {
  return new Promise((resolve, reject) => {
    fs.readFile(query, 'utf8', (err, query) => {
      err ? reject(err) : resolve(query)
    })
  })
}

module.exports = getData
