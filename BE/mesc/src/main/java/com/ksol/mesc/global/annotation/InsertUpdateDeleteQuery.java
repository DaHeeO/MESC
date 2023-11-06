package com.ksol.mesc.global.annotation;

import com.ksol.mesc.global.annotation.validator.InsertUpdateDeleteQueryValidator;
import jakarta.validation.Constraint;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = InsertUpdateDeleteQueryValidator.class)
public @interface InsertUpdateDeleteQuery {
    String message() default "insert/update/delete 쿼리만 가능합니다";
    Class[] groups() default {};
    Class[] payload() default {};
}
