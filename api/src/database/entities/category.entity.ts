import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SubCategory } from "./sub-category.entity";

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    title:string;

    @OneToMany(() => SubCategory, subCategory => subCategory.category)
    subCategories: SubCategory[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;
}