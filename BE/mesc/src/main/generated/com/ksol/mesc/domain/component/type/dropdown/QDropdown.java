package com.ksol.mesc.domain.component.type.dropdown;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QDropdown is a Querydsl query type for Dropdown
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QDropdown extends EntityPathBase<Dropdown> {

    private static final long serialVersionUID = 1209104523L;

    public static final QDropdown dropdown = new QDropdown("dropdown");

    public final StringPath columnName = createString("columnName");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath name = createString("name");

    public final EnumPath<DropdownType> type = createEnum("type", DropdownType.class);

    public QDropdown(String variable) {
        super(Dropdown.class, forVariable(variable));
    }

    public QDropdown(Path<? extends Dropdown> path) {
        super(path.getType(), path.getMetadata());
    }

    public QDropdown(PathMetadata metadata) {
        super(Dropdown.class, metadata);
    }

}

