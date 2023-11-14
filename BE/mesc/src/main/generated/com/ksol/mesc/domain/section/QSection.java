package com.ksol.mesc.domain.section;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QSection is a Querydsl query type for Section
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QSection extends EntityPathBase<Section> {

    private static final long serialVersionUID = -1769607172L;

    public static final QSection section = new QSection("section");

    public final NumberPath<Integer> blockId = createNumber("blockId", Integer.class);

    public final NumberPath<Integer> sectionId = createNumber("sectionId", Integer.class);

    public final NumberPath<Integer> sectionType = createNumber("sectionType", Integer.class);

    public QSection(String variable) {
        super(Section.class, forVariable(variable));
    }

    public QSection(Path<? extends Section> path) {
        super(path.getType(), path.getMetadata());
    }

    public QSection(PathMetadata metadata) {
        super(Section.class, metadata);
    }

}

