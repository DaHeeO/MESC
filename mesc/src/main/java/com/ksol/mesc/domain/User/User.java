package com.ksol.mesc.domain.User;

import com.ksol.mesc.domain.group.UserRole;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	@Column(name="USER_ID")
	Integer userId;
	@Column(name="KNOX_ID")
	String knoxId;
	@Column(name="USER_ROLE")
	UserRole role;
	String email;
	String profile;
	@Column(name = "USER_NAME")
	String name;
}
