package com.ksol.mesc.global.annotation.validator;

import com.ksol.mesc.global.annotation.NoQuotes;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

public class NoQuotesValidator implements ConstraintValidator<NoQuotes, String> {


    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }
        return !(value.contains("\"") || value.contains("\'"));
    }
}
