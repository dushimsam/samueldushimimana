package com.example.backend.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class TokenRequest {
    private String meterNumber;
    private float amount;
}
