package com.ksol.mesc.global.annotation.validator;

import com.ksol.mesc.global.annotation.InsertUpdateDeleteQuery;
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
