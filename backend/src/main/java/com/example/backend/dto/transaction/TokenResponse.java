package com.example.backend.dto.transaction;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {
    private UUID id;
    private String meterNumber;
    private float amount;
    private int days;
}
