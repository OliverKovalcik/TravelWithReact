import * as React from 'react'
import { useToast, Spinner } from '@chakra-ui/react'
import { isItemNew } from '../helpers/isItemNew'
import { formatPrice } from '../helpers/formatPrice'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { useOffers } from '../hooks'

export const Offers = () => {
  const { data, error, isLoading } = useOffers()

  const toast = useToast()
  if (error) {
    toast({ status: 'error', title: 'something wrong ', description: 'sorry' })
  }

  return (
    <>
      <Header />

      {isLoading ? (
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
      ) : (
        data.map(({ id, thumbnail, nights, city, price, rating, reviewCount, createdAt }) => {
          return (
            <Card
              key={id}
              imageUrl={thumbnail}
              numberOfNights={nights}
              destination={city}
              formatedPrice={formatPrice(price)}
              rating={rating}
              reviewsCount={reviewCount}
              linkTo="/offers/1"
              isNew={isItemNew(createdAt)}
            />
          )
        })
      )}
    </>
  )
}
