import { useState, useEffect } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`
const CAT_PREFIX_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        console.log('fact ----->', fact)

        const firstWord = fact.split(' ')[0]
        console.log('firtsWord', firstWord)

        setImageUrl(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red`)
        console.log('imageUrl', imageUrl)
      })
  }, [])

  return (
    <main>
      <h1>Vite Cats App</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='url image from first 3 words' />}
    </main>
  )
}
