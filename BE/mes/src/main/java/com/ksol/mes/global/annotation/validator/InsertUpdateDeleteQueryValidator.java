package com.ksol.mes.global.annotation.validator;

import com.ksol.mes.global.annotation.InsertUpdateDeleteQuery;
import com.ksol.mes.global.annotation.SelectQuery;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class InsertUpdateDeleteQueryValidator implements ConstraintValidator<InsertUpdateDeleteQuery, String> {

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }
        value = value.toLowerCase();
        return value.startsWith("update ") | value.startsWith("insert ") | value.startsWith("delete ");
    }
}
