package com.ksol.mesc.domain.section;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity(name = "SECTION")
@AllArgsConstructor
@NoArgsConstructor
@Getter
public class Section {
    @Override
    public String toString() {
        return "Section{" +
                "sectionId=" + sectionId +
                ", sectionType=" + sectionType +
                ", blockId=" + blockId +
                '}';
    }

    @Id
    @Column(name = "SECTION_ID")
    private Integer sectionId;
    @Column(name = "SECTION_TYPE")
    private Integer sectionType;
    @Column(name = "BLOCK_ID")
    private Integer blockId;
}
