import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BoardService } from './boards.service';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';

@Resolver(() => Board)
export class BoardResolver {
  constructor(private readonly boardService: BoardService) {}

  @Query(() => [Board])
  async boards() {
    return this.boardService.findAll();
  }

  @Query(() => Board)
  async board(@Args('id') id: string) {
    return this.boardService.findOne(id);
  }

  @Mutation(() => Board)
  async createBoard(@Args('input') input: CreateBoardInput) {
    return this.boardService.create(input);
  }

  @Mutation(() => Boolean)
  async deleteBoard(@Args('id') id: string) {
    return this.boardService.remove(id);
  }

  @Query(() => String)
  async test() {
    return 'success!';
  }
}
