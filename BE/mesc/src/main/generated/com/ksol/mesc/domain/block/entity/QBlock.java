package com.ksol.mesc.domain.block.entity;

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

    private static final long serialVersionUID = -857367773L;

    public static final QBlock block = new QBlock("block");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final BooleanPath isPossible = createBoolean("isPossible");

    public final StringPath name = createString("name");

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

