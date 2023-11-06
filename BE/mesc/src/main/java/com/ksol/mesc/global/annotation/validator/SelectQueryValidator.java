package com.ksol.mesc.global.annotation.validator;

import com.ksol.mesc.global.annotation.SelectQuery;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class SelectQueryValidator implements ConstraintValidator<SelectQuery, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }
        value = value.toLowerCase();
        return value.startsWith("select ");
    }
}
