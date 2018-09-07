const joinAuthorsNames = (arr) => {
  return arr.map(author => author.name).join(', ')
}

export default joinAuthorsNames
