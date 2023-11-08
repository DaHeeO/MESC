package com.ksol.mesc.domain.component.type.button.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ksol.mesc.domain.component.type.button.entity.Button;

public interface ButtonRepository extends JpaRepository<Button, Integer> {
}
