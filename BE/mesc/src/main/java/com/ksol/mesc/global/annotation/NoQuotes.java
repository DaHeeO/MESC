package com.ksol.mesc.global.annotation;

import com.ksol.mesc.global.annotation.validator.NoQuotesValidator;
import jakarta.validation.Constraint;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = NoQuotesValidator.class)
public @interface NoQuotes {
    String message() default "따옴표 사용 불가";
    Class[] groups() default {};
    Class[] payload() default {};
}
