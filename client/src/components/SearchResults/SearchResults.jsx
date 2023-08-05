import React, {useEffect, useState} from 'react'
import {useSearchParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { CardsContainer } from './Search.styles'
import Card from '../Card/Card'

const NoResults = () => {
    return (
      <div style={{ color: 'white', fontSize: '50px', textAlign: 'center' }}>
        Sorry, no results found!
      </div>
    )
  }

const Search = () => {
    const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const searched = useSelector((state) => state.searched)

  return (
    <CardsContainer>
        {loading ? (
            <div>Loading...</div>
        ) : searched.length === 0 ? 
        (
            <NoResults />
        ) : (
            searched.map((card) => ( <Card 
            //key={card.id} 
            //id={card.id}
            />
            ))
        )}
    </CardsContainer>
  )
}

export default Search