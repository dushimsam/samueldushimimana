package com.example.backend.dto.transaction;

import lombok.Data;

import java.util.UUID;

@Data
public class TokenRequest {
    private String meterNumber;
    private float amount;
}
