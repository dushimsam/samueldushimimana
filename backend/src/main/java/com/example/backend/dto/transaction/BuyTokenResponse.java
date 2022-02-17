package com.example.backend.dto.transaction;

import com.example.backend.model.Transaction;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class BuyTokenResponse {
    private Transaction transaction;
    private String message;

}
