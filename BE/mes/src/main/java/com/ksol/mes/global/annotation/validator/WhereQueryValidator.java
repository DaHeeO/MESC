package com.ksol.mes.global.annotation.validator;

import com.ksol.mes.global.annotation.SelectQuery;
import com.ksol.mes.global.annotation.WhereQuery;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class WhereQueryValidator implements ConstraintValidator<WhereQuery, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }
        value = value.toLowerCase();
        return value.startsWith("where ");
    }
}
