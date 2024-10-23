import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateBoardInput {
  @Field()
  title: string;

  @Field()
  description: string;
}
