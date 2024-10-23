import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Board {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;
}
