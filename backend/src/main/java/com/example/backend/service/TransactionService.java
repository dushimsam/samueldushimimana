package com.example.backend.service;


import com.example.backend.dto.transaction.TokenRequest;
import com.example.backend.model.MeterAccount;
import com.example.backend.model.Transaction;
import com.example.backend.repository.MeterAccountRepository;
import com.example.backend.repository.TransactionRepository;
import com.example.backend.util.AmountValidator;
import com.example.backend.util.MeterNumberValidator;
import com.example.backend.util.TokenGenerator;
import com.example.backend.util.TokenNumberValidator;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Optional;
import java.util.UUID;

@Service
public class TransactionService {

    @Autowired
    private  TransactionRepository transactionRepository;

    @Autowired
    private  TokenNumberValidator tokenNumberValidator;

    @Autowired
    private  TokenGenerator tokenGenerator;

    @Autowired
    private AmountValidator amountValidator;

    @Autowired
    private  MeterAccountRepository meterAccountRepository;

    @Autowired
    private MeterNumberValidator meterNumberValidator;



    public Transaction requestNewToken(TokenRequest request) {

        String meterNumber = request.getMeterNumber();

        if (!meterNumberValidator.test(meterNumber)) {
            throw new IllegalStateException("invalid meter, only 6 digits accepted");
        }

        if(!amountValidator.validateAmount(request.getAmount()))
            throw new IllegalStateException("invalid amount, only multiples of 100 not greater than 182,500 is accepted");


        int days = (int)request.getAmount() / 100;

        String generated_token = null;

        boolean isPresent = true;
        while(isPresent){
            generated_token = tokenGenerator.generate();
            Optional<Transaction> transactionOptional = transactionRepository
                    .selectTransactionByToken(generated_token);
            if (transactionOptional.isEmpty()) isPresent = false;
        }


        Transaction transaction = new Transaction();

        Optional<MeterAccount> meterAccount = meterAccountRepository.selectMeterAccountByMeterNumber(meterNumber);
        if(meterAccount.isPresent())
            transaction.setMeterAccount(meterAccount.get());
        else{
            MeterAccount newMeterAccount = new MeterAccount();
            newMeterAccount.setId(UUID.randomUUID());
            newMeterAccount.setMeterNumber(meterNumber);
            transaction.setMeterAccount(meterAccountRepository.save(newMeterAccount));
        }

        BeanUtils.copyProperties(request,transaction);
        transaction.setToken(generated_token);
        transaction.setDays(days);
        transaction.setId(UUID.randomUUID());
        
      return  transactionRepository.save(transaction);
    }




}