package com.ksol.mesc.global.annotation;

import com.ksol.mesc.global.annotation.validator.LogLevelsValidator;
import jakarta.validation.Constraint;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = LogLevelsValidator.class)
public @interface LogLevels {
    String message() default "trace, debug, info, warn, error만 가능합니다.";
    Class[] groups() default {};
    Class[] payload() default {};
}
