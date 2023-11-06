package com.ksol.mesc.domain.component.type.dropdown;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QDropdown is a Querydsl query type for Dropdown
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDropdown extends EntityPathBase<Dropdown> {

    private static final long serialVersionUID = 1209104523L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QDropdown dropdown = new QDropdown("dropdown");

    public final StringPath columnName = createString("columnName");

    public final com.ksol.mesc.domain.component.QComponent component;

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath name = createString("name");

    public final EnumPath<DropdownType> type = createEnum("type", DropdownType.class);

    public QDropdown(String variable) {
        this(Dropdown.class, forVariable(variable), INITS);
    }

    public QDropdown(Path<? extends Dropdown> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QDropdown(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QDropdown(PathMetadata metadata, PathInits inits) {
        this(Dropdown.class, metadata, inits);
    }

    public QDropdown(Class<? extends Dropdown> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.component = inits.isInitialized("component") ? new com.ksol.mesc.domain.component.QComponent(forProperty("component"), inits.get("component")) : null;
    }

}

