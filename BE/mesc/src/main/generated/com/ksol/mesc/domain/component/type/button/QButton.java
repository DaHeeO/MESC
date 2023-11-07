package com.ksol.mesc.domain.component.type.button;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QButton is a Querydsl query type for Button
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QButton extends EntityPathBase<Button> {

    private static final long serialVersionUID = -386880725L;

    public static final QButton button = new QButton("button");

    public final StringPath icon = createString("icon");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath link = createString("link");

    public final EnumPath<com.ksol.mesc.domain.component.LinkType> linkType = createEnum("linkType", com.ksol.mesc.domain.component.LinkType.class);

    public final StringPath name = createString("name");

    public final StringPath response = createString("response");

    public final NumberPath<Integer> sequence = createNumber("sequence", Integer.class);

    public final StringPath type = createString("type");

    public QButton(String variable) {
        super(Button.class, forVariable(variable));
    }

    public QButton(Path<? extends Button> path) {
        super(path.getType(), path.getMetadata());
    }

    public QButton(PathMetadata metadata) {
        super(Button.class, metadata);
    }

}

