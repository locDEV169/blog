import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from "./category.entity";
import { SubCategory } from "./sub-category.entity";
import { User } from "./user.entity";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column({unique:true})
    title:string;

    @Column()
    description:string;

    @Column()
    content:string;

    @Column({default:0})
    view:number;

    @Column()
    thumbnail:string;

    @ManyToOne(() => User, user => user.blogs)
    user: User;

    @ManyToOne(() => SubCategory, subCategory => subCategory.blogs)
    subCategory: SubCategory;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

}