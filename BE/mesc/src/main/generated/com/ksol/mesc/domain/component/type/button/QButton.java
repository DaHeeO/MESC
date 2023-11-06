package com.ksol.mesc.domain.component.type.button;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QButton is a Querydsl query type for Button
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QButton extends EntityPathBase<Button> {

    private static final long serialVersionUID = -386880725L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QButton button = new QButton("button");

    public final com.ksol.mesc.domain.component.QComponent component;

    public final StringPath icon = createString("icon");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath link = createString("link");

    public final ComparablePath<Character> linkType = createComparable("linkType", Character.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> sequence = createNumber("sequence", Integer.class);

    public final ComparablePath<Character> type = createComparable("type", Character.class);

    public QButton(String variable) {
        this(Button.class, forVariable(variable), INITS);
    }

    public QButton(Path<? extends Button> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QButton(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QButton(PathMetadata metadata, PathInits inits) {
        this(Button.class, metadata, inits);
    }

    public QButton(Class<? extends Button> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.component = inits.isInitialized("component") ? new com.ksol.mesc.domain.component.QComponent(forProperty("component"), inits.get("component")) : null;
    }

}

