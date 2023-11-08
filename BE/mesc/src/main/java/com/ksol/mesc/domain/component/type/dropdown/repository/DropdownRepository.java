package com.ksol.mesc.domain.component.type.dropdown.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ksol.mesc.domain.component.type.dropdown.entity.Dropdown;

public interface DropdownRepository extends JpaRepository<Dropdown, Integer> {
}
