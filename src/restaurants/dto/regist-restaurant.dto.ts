import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class RegistRestaurantDto {
  @Field(() => String)
  name: string;
  @Field(() => Boolean)
  isVeganOnly: boolean;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownerName: string;
}
