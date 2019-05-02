import Router from 'next/router'

export default async function(baseUrl, slug, res) {
  try {
    const apiResponse = await fetch(`${baseUrl}/api/${slug}`)

    if (!apiResponse.ok) {
      handleError(res)
    }

    return apiResponse.json()
  } catch(err) {
    handleError(res)
  }
}

export function handleError(res) {
  if (res) {
    res.redirect(303, '/error');
  } else {
    Router.push('/error')
  }
}
