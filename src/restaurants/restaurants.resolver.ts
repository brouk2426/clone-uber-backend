import { Resolver, Query } from '@nestjs/graphql';

@Resolver()
export class RestaurantsResolver {
  @Query(() => String)
  getRestaurant() {
    return 'restaurant';
  }
}
