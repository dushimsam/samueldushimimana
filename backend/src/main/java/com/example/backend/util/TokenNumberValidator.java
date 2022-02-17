package com.example.backend.util;

import org.springframework.stereotype.Component;

import java.util.function.Predicate;
@Component
public class TokenNumberValidator implements Predicate<String> {
    @Override
    public boolean test(String tokenNumber){
        return tokenNumber.startsWith("01") && tokenNumber.length() == 8;
    }
}
