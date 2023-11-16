package mesc.mesc.block.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import mesc.mesc.button.domain.Button;
import org.hibernate.annotations.DynamicInsert;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "BLOCK")
@Getter
@Setter
@NoArgsConstructor
public class Block {
    @Id @GeneratedValue
    @Column(name = "BL_ID")
    private Integer id;
    @Column(name = "BL_TEXT")
    private String blText;
    @OneToMany(mappedBy = "block")
    private List<Button> buttons;

    @Override
    public String toString() {
        return "Block{" +
                "id=" + id +
                ", blText='" + blText + '\'';
    }
}
