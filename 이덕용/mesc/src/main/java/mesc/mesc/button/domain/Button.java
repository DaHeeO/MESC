package mesc.mesc.button.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mesc.mesc.block.domain.Block;
import org.hibernate.annotations.DynamicInsert;


import java.util.List;

import static jakarta.persistence.FetchType.*;

@Entity
@Table(name = "BUTTON")
@Getter
@NoArgsConstructor
public class Button {
    @Id
    @GeneratedValue
    @Column(name = "BUTTON_ID")
    private Integer id;
    @ManyToOne(fetch = LAZY)
    @JoinColumn(name = "BL_ID")
    private Block block;
    @Column(name = "BUTTON_NAME")
    private String buttonName;
    @Column(name = "BUTTON_TYPE")
    private Character buttonType;
    @Column(name = "SEQUENCE")
    private Integer sequence;
    @Column(name = "LINK")
    private String link;

    @Override
    public String toString() {
        return "Button{" +
                "id=" + id +
                ", buttonName='" + buttonName + '\'' +
                ", buttonType=" + buttonType +
                ", sequence=" + sequence +
                ", link='" + link + '\'' +
                '}';
    }
}
