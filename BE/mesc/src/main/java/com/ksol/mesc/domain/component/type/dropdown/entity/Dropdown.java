package com.ksol.mesc.domain.component.type.dropdown.entity;

import com.ksol.mesc.domain.common.EntityState;
import com.ksol.mesc.domain.component.type.dropdown.dto.response.DropdownRes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Table(name = "DROPDOWN")
@ToString
// @DiscriminatorValue("DD")
public class Dropdown {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DROPDOWN_ID")
	private Integer id;
	@Column(name = "NAME")
	private String name;
	@Column(name = "REAL_COLUMN_NAME")
	private String columnName;
	@Column(name = "REAL_TABLE_NAME")
	private String tableName;
	@Enumerated(EnumType.STRING)
	private DropdownType type;
	@Enumerated(EnumType.STRING)
	@Builder.Default
	private EntityState state = EntityState.ACTIVE;

	public static Dropdown toEntity(DropdownRes dropdownRes) {
		if (dropdownRes.getState() == null)
			dropdownRes.setState(EntityState.ACTIVE);

		return Dropdown.builder()
			.id(dropdownRes.getId())
			.name(dropdownRes.getName())
			.columnName(dropdownRes.getColumnName())
			.tableName(dropdownRes.getTableName())
			.type(dropdownRes.getType())
			.state(dropdownRes.getState())
			.build();
	}
}
