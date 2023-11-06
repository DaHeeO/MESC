package com.ksol.mesc.domain.component;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QComponent is a Querydsl query type for Component
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QComponent extends EntityPathBase<Component> {

    private static final long serialVersionUID = 866235500L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QComponent component = new QComponent("component");

    public final com.ksol.mesc.domain.component.type.card.QCard card;

    public final EnumPath<ComponentType> componentType = createEnum("componentType", ComponentType.class);

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final NumberPath<Integer> linkId = createNumber("linkId", Integer.class);

    public final NumberPath<Integer> sequence = createNumber("sequence", Integer.class);

    public QComponent(String variable) {
        this(Component.class, forVariable(variable), INITS);
    }

    public QComponent(Path<? extends Component> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QComponent(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QComponent(PathMetadata metadata, PathInits inits) {
        this(Component.class, metadata, inits);
    }

    public QComponent(Class<? extends Component> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.card = inits.isInitialized("card") ? new com.ksol.mesc.domain.component.type.card.QCard(forProperty("card"), inits.get("card")) : null;
    }

}

