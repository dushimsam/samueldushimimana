package com.example.backend.util;

import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class TokenGenerator {
    public String generate() {
        Random r = new Random();
        int low = 0;
        int high = 100000000;
        String result = Integer.toString(r.nextInt(high - low) + low);
        for (int i = 1; i <= (8 - result.length()); i++)
            result = "0" + result;
        return result;
    }

}
