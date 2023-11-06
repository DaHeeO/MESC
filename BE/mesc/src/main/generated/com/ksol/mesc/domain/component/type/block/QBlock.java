package com.ksol.mesc.domain.component.type.block;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QBlock is a Querydsl query type for Block
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QBlock extends EntityPathBase<Block> {

    private static final long serialVersionUID = -1118953303L;

    public static final QBlock block = new QBlock("block");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> userId = createNumber("userId", Integer.class);

    public QBlock(String variable) {
        super(Block.class, forVariable(variable));
    }

    public QBlock(Path<? extends Block> path) {
        super(path.getType(), path.getMetadata());
    }

    public QBlock(PathMetadata metadata) {
        super(Block.class, metadata);
    }

}

