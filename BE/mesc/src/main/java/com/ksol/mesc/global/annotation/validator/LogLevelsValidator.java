package com.ksol.mesc.global.annotation.validator;

import com.ksol.mesc.global.annotation.LogLevels;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class LogLevelsValidator implements ConstraintValidator<LogLevels, List<String>> {
    private static Set<String> levels = new HashSet<>();
    {
        levels.add("trace");
        levels.add("debug");
        levels.add("info");
        levels.add("warn");
        levels.add("error");
    }

    @Override
    public boolean isValid(List<String> value, ConstraintValidatorContext context) {
        if (value == null) {
            return false;
        }
        for (String level : value) {
            level = level.toLowerCase();
            if (!levels.contains(level)) {
                System.out.println("잘못된 level = " + level);
                return false;
            }
        }
        return true;
    }
}
