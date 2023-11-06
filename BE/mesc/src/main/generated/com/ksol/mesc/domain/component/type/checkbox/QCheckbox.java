package com.ksol.mesc.domain.component.type.checkbox;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCheckbox is a Querydsl query type for Checkbox
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCheckbox extends EntityPathBase<Checkbox> {

    private static final long serialVersionUID = -1484521269L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCheckbox checkbox = new QCheckbox("checkbox");

    public final com.ksol.mesc.domain.component.QComponent component;

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath name = createString("name");

    public QCheckbox(String variable) {
        this(Checkbox.class, forVariable(variable), INITS);
    }

    public QCheckbox(Path<? extends Checkbox> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCheckbox(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCheckbox(PathMetadata metadata, PathInits inits) {
        this(Checkbox.class, metadata, inits);
    }

    public QCheckbox(Class<? extends Checkbox> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.component = inits.isInitialized("component") ? new com.ksol.mesc.domain.component.QComponent(forProperty("component"), inits.get("component")) : null;
    }

}

