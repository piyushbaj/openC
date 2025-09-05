import { IsString, Length, IsInt, Min } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(3, 50)
  subject: string;

  @IsString()
  body: string;

  @IsInt()
  @Min(1)
  authorId: number;
}
