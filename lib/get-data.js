import Router from 'next/router'

export default async function(baseUrl, slug, res, apiResponse) {
  try {
    apiResponse = await fetch(`${baseUrl}/api/cases/${slug}`)

    if(!apiResponse.ok) {
      handleError(res) 
    }

    return apiResponse.json()
  } catch(err) {
    handleError(res) 
  }
}

function handleError(res) {
  if (res) {
    res.redirect(303, '/error');
  } else {
    Router.push('/error')
  }
}