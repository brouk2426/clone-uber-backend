import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field(() => Boolean, { nullable: true })
  isVeganOnly?: boolean;

  @Field(() => String)
  address: string;

  @Field(() => String)
  ownerName: string;
}
