package com.example.backend.util;

import org.springframework.stereotype.Component;

import java.util.function.Predicate;

@Component
public class MeterNumberValidator implements Predicate<String> {
    @Override
    public boolean test(String meterNumber){
        return  meterNumber.length() == 6;
    }
}
