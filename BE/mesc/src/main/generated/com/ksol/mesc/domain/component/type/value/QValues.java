package com.ksol.mesc.domain.component.type.value;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QValues is a Querydsl query type for Values
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QValues extends EntityPathBase<Values> {

    private static final long serialVersionUID = 1655992098L;

    public static final QValues values = new QValues("values");

    public final NumberPath<Integer> comId = createNumber("comId", Integer.class);

    public final EnumPath<com.ksol.mesc.domain.component.ComponentType> componentType = createEnum("componentType", com.ksol.mesc.domain.component.ComponentType.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath name = createString("name");

    public QValues(String variable) {
        super(Values.class, forVariable(variable));
    }

    public QValues(Path<? extends Values> path) {
        super(path.getType(), path.getMetadata());
    }

    public QValues(PathMetadata metadata) {
        super(Values.class, metadata);
    }

}

