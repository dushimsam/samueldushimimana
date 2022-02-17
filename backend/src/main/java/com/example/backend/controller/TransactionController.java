package com.example.backend.controller;

import com.example.backend.dto.transaction.TokenRequest;
import com.example.backend.model.MeterAccount;
import com.example.backend.model.Transaction;
import com.example.backend.service.TransactionService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/transaction")
@AllArgsConstructor
public class TransactionController {
    private final TransactionService transactionService;

    @PostMapping
    public ResponseEntity<Transaction> request(@RequestBody TokenRequest tokenRequest) {
        return new ResponseEntity<Transaction>(transactionService.requestNewToken(tokenRequest), HttpStatus.OK);
    }
}
