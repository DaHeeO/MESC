package com.ksol.mesc.domain.component.type.directbutton;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDirectButton is a Querydsl query type for DirectButton
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDirectButton extends EntityPathBase<DirectButton> {

    private static final long serialVersionUID = -1971861141L;

    public static final QDirectButton directButton = new QDirectButton("directButton");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final NumberPath<Integer> linkId = createNumber("linkId", Integer.class);

    public final EnumPath<com.ksol.mesc.domain.component.LinkType> linkType = createEnum("linkType", com.ksol.mesc.domain.component.LinkType.class);

    public final StringPath name = createString("name");

    public final NumberPath<Integer> sequence = createNumber("sequence", Integer.class);

    public QDirectButton(String variable) {
        super(DirectButton.class, forVariable(variable));
    }

    public QDirectButton(Path<? extends DirectButton> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDirectButton(PathMetadata metadata) {
        super(DirectButton.class, metadata);
    }

}

