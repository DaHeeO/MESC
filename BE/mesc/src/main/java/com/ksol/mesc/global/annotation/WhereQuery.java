package com.ksol.mesc.global.annotation;

import com.ksol.mesc.global.annotation.validator.WhereQueryValidator;
import jakarta.validation.Constraint;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = WhereQueryValidator.class)
public @interface WhereQuery {
    String message() default "where절만 가능합니다";
    Class[] groups() default {};
    Class[] payload() default {};
}
