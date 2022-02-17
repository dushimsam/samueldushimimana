package com.example.backend.util;

import org.springframework.stereotype.Component;

import java.util.function.Predicate;

@Component
public class MeterNumberVerification  implements Predicate<String> {
    @Override
    public String test(String meterNumber){

        if(meterNumber.length() != 6)
            return "invalid meter, only 6 digits accepted";

        return tokenNumber.startsWith("01") && tokenNumber.length() == 6;
    }
}
