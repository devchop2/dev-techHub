import { Injectable } from '@nestjs/common';
import { Board } from './entities/board.entity';
import { CreateBoardInput } from './dto/create-board.input';

@Injectable()
export class BoardService {
  private boards: Board[] = [];

  findAll(): Board[] {
    return this.boards;
  }

  findOne(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  create(input: CreateBoardInput): Board {
    const newBoard = {
      id: Date.now().toString(),
      ...input,
    };
    this.boards.push(newBoard);
    return newBoard;
  }

  remove(id: string): boolean {
    const index = this.boards.findIndex((board) => board.id === id);
    if (index === -1) {
      return false;
    }
    this.boards.splice(index, 1);
    return true;
  }
}
