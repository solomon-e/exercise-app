
export const exerciseOptions = {
  method: 'GET',
  headers: {
    //'x-rapidapi-key': process.env.RAPID_API_KEY,
    'x-rapidapi-key': '5c5f437e2dmsh5d3fe01cc3990c9p14e25bjsnd13a84920dd6',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
}

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`)
    }

    const data = await response.json();
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

/*
export const fetchData = async (url, options) => {
  const response =  await fetch(url, options)

  // extract data
  const data = await response.json()

  return data
} 
*/
