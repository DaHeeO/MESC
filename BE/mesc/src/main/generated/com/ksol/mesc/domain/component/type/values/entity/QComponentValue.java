package com.ksol.mesc.domain.component.type.values.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QComponentValue is a Querydsl query type for ComponentValue
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QComponentValue extends EntityPathBase<ComponentValue> {

    private static final long serialVersionUID = 1119450358L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QComponentValue componentValue = new QComponentValue("componentValue");

    public final com.ksol.mesc.domain.component.type.dropdown.entity.QDropdown dropdown;

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath value = createString("value");

    public QComponentValue(String variable) {
        this(ComponentValue.class, forVariable(variable), INITS);
    }

    public QComponentValue(Path<? extends ComponentValue> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QComponentValue(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QComponentValue(PathMetadata metadata, PathInits inits) {
        this(ComponentValue.class, metadata, inits);
    }

    public QComponentValue(Class<? extends ComponentValue> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.dropdown = inits.isInitialized("dropdown") ? new com.ksol.mesc.domain.component.type.dropdown.entity.QDropdown(forProperty("dropdown")) : null;
    }

}

