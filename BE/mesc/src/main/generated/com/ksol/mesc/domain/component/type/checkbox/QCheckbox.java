package com.ksol.mesc.domain.component.type.checkbox;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.ksol.mesc.domain.component.type.checkbox.entity.Checkbox;
import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QCheckbox is a Querydsl query type for Checkbox
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QCheckbox extends EntityPathBase<Checkbox> {

    private static final long serialVersionUID = -1484521269L;

    public static final QCheckbox checkbox = new QCheckbox("checkbox");

    public final NumberPath<Integer> id = createNumber("id", Integer.class);

    public final StringPath name = createString("name");

    public QCheckbox(String variable) {
        super(Checkbox.class, forVariable(variable));
    }

    public QCheckbox(Path<? extends Checkbox> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCheckbox(PathMetadata metadata) {
        super(Checkbox.class, metadata);
    }

}

