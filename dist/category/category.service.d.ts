import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoryService {
    private categoryRepository;
    constructor(categoryRepository: Repository<Category>);
    create(createCategoryDto: CreateCategoryDto): Promise<CreateCategoryDto & Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<string>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<string>;
    remove(id: number): Promise<string>;
}
