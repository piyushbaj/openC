import { IsString, Length, IsInt, Min } from 'class-validator';

export class CreatePostDto {
  
  @IsInt()
  @Min(1)
  authorId: number;
}
