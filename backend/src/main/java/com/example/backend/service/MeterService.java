package com.example.backend.service;

import com.example.backend.dto.transaction.BuyTokenRequest;
import com.example.backend.dto.transaction.BuyTokenResponse;
import com.example.backend.model.MeterAccount;
import com.example.backend.model.Transaction;
import com.example.backend.repository.MeterAccountRepository;
import com.example.backend.repository.TransactionRepository;
import com.example.backend.util.MeterNumberValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class MeterService {
    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private MeterAccountRepository meterAccountRepository;

    @Autowired
    private MeterNumberValidator meterNumberValidator;

    public BuyTokenResponse register(BuyTokenRequest buyTokenRequest) {
        Optional<Transaction> transaction = transactionRepository.selectTransactionByToken(buyTokenRequest.getToken());
        if (transaction.isEmpty()) throw new IllegalStateException("Unknown token");

        transaction.get().setUsed(true);
        transactionRepository.save(transaction.get());

        MeterAccount meterAccount = meterAccountRepository.findById(transaction.get().getMeterAccount().getId()).orElseThrow();

        meterAccount.setActiveDays(meterAccount.getActiveDays() + transaction.get().getDays());

        BuyTokenResponse resp = new BuyTokenResponse();
        resp.setTransaction(transaction.get());
        resp.setMessage(transaction.get().getDays() + " added now you have " + meterAccount.getActiveDays() + " days remaining)");
        return resp;
    }

    public MeterAccount get(UUID id) {
        Optional<MeterAccount> meterAccount = meterAccountRepository.findById(id);

        if (meterAccount.isEmpty()) throw new IllegalStateException("Id " + id + " is not found");

        return meterAccount.get();
    }


    public MeterAccount checkStatus(String meterNumber) {
        MeterAccount meterAccount = meterAccountRepository.findMeterAccountByMeterNumber(meterNumber);

        if (!meterNumberValidator.test(meterNumber)) {
            throw new IllegalStateException("Meter Number " + meterNumber + " is not valid");
        }

        if (meterAccount == null) throw new IllegalStateException("You have 0 days, buy now!");

        return meterAccount;
    }
}
