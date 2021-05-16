import * as React from 'react'
import { useToast, Spinner, Grid, GridItem } from '@chakra-ui/react'
import { uniqBy, sortBy } from 'lodash-es'
import { isItemNew } from '../helpers/isItemNew'
import { formatPrice } from '../helpers/formatPrice'
import { Header } from './components/Header'
import { Card } from './components/Card'
import { useOffers } from '../hooks'
import { HomeInput } from './components/HomeInput'
import { FilterNew } from './components/FilterNew'
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
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <GridItem rowSpan={3}>
          <FilterNew />
          {sortBy(uniqBy(data, 'country'), ['country']).map(({ id, country }) => {
            return <FilterCards key={id} country={country} />
          })}
        </GridItem>
        {isLoading ? (
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        ) : (
          data.map(
            ({ id, thumbnail, nights, city, country, price, rating, reviewCount, createdAt }) => {
              return (
                <Card
                  key={id}
                  imageUrl={thumbnail}
                  numberOfNights={nights}
                  destination={`${city}, ${country}`}
                  formatedPrice={formatPrice(price)}
                  rating={rating}
                  reviewsCount={reviewCount}
                  linkTo="/offers/1"
                  isNew={isItemNew(createdAt)}
                />
              )
            }
          )
        )}
      </Grid>
    </>
  )
}
