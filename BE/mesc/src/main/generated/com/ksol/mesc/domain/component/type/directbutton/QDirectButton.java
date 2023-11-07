package com.ksol.mesc.domain.component.type.directbutton;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDirectButton is a Querydsl query type for DirectButton
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDirectButton extends EntityPathBase<DirectButton> {

    private static final long serialVersionUID = -1971861141L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDirectButton directButton = new QDirectButton("directButton");

    public final com.ksol.mesc.domain.block.entity.QBlock block;

    public final NumberPath<Integer> iconId = createNumber("iconId", Integer.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath link = createString("link");

    public final EnumPath<com.ksol.mesc.domain.component.LinkType> linkType = createEnum("linkType", com.ksol.mesc.domain.component.LinkType.class);

    public final StringPath name = createString("name");

    public final StringPath response = createString("response");

    public final StringPath responseType = createString("responseType");

    public final NumberPath<Integer> sequence = createNumber("sequence", Integer.class);

    public QDirectButton(String variable) {
        this(DirectButton.class, forVariable(variable), INITS);
    }

    public QDirectButton(Path<? extends DirectButton> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDirectButton(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDirectButton(PathMetadata metadata, PathInits inits) {
        this(DirectButton.class, metadata, inits);
    }

    public QDirectButton(Class<? extends DirectButton> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.block = inits.isInitialized("block") ? new com.ksol.mesc.domain.block.entity.QBlock(forProperty("block")) : null;
    }

}

