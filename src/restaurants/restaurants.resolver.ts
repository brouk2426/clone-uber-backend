import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { RegistRestaurantDto } from './dto/regist-restaurant.dto';
import { Restaurant } from './entities/restaurants.entity';

@Resolver(() => Restaurant)
export class RestaurantsResolver {
  @Query(() => [Restaurant])
  getRestaurants(@Args('isVeganOnly') isVeganOnly: boolean): Restaurant[] {
    return [];
  }

  @Mutation(() => Boolean)
  registRestaurant(@Args() registRestaurantDto: RegistRestaurantDto): boolean {
    console.log(registRestaurantDto);
    return true;
  }
}
