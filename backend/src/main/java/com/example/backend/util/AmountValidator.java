package com.example.backend.util;

import org.springframework.stereotype.Component;

@Component
public class AmountValidator {
    public boolean validateAmount(float amount){
        return !(amount < 100) && !(amount > 182500);
    }
}
