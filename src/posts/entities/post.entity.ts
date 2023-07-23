import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from '../../users/user.entity';
import Category from '../../categories/entities/category.entity';

@Entity()
class Post {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @ManyToMany(() => Category)
  @JoinTable()
  public categories: Category[];

  @ManyToOne(() => User, (author: User) => author.posts)
  public author: User;
}

export default Post;
