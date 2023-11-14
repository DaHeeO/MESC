package com.ksol.mesc.domain.dcb.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDCB is a Querydsl query type for DCB
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDCB extends EntityPathBase<DCB> {

    private static final long serialVersionUID = -1856702749L;

    public static final QDCB dCB = new QDCB("dCB");

    public final NumberPath<Integer> blockId = createNumber("blockId", Integer.class);

    public final NumberPath<Integer> dcbId = createNumber("dcbId", Integer.class);

    public final NumberPath<Integer> dcbMapId = createNumber("dcbMapId", Integer.class);

    public QDCB(String variable) {
        super(DCB.class, forVariable(variable));
    }

    public QDCB(Path<? extends DCB> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDCB(PathMetadata metadata) {
        super(DCB.class, metadata);
    }

}

