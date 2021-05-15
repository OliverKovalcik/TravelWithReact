import * as React from 'react'
import { useToast, Spinner, SimpleGrid } from '@chakra-ui/react'
import { isItemNew } from '../helpers/isItemNew'
import { formatPrice } from '../helpers/formatPrice'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { useOffers } from '../hooks'
import { HomeInput } from './components/HomeInput'
import { FilterCards } from './components/FilterCards'

export const Offers = () => {
  const { data, error, isLoading } = useOffers()

  const toast = useToast()
  if (error) {
    toast({ status: 'error', title: 'something wrong ', description: 'sorry' })
  }

  return (
    <>
      <Header />
      <HomeInput />
      <FilterCards />
      <SimpleGrid minChildWidth="300px" spacing="40px">
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
      </SimpleGrid>
    </>
  )
}
