package com.example.backend.service;

import com.example.backend.model.Transaction;
import com.example.backend.repository.MeterAccountRepository;
import com.example.backend.repository.TransactionRepository;
import com.example.backend.util.MeterNumberValidator;
import com.example.backend.util.TokenNumberValidator;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.then;
import static org.mockito.Mockito.never;

public class TransactionServiceTest {
    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private MeterNumberValidator meterNumberValidator;

    @Mock
    private TokenNumberValidator tokenNumberValidator;

    @Mock
    private MeterAccountRepository meterAccountRepository;

    private TransactionService underTest;




    @Test
    void itShouldNotSaveNewTokenWhenMeterNumberIsInvalid() {
        // Given a phone number and a customer
        String meterNumber = "000099";
        Transaction tr = new Transaction(UUID.randomUUID(), "Samuel", meterNumber);

        // ... a request
        CustomerRegistrationRequest request = new CustomerRegistrationRequest(tr);


        //... Valid phone number
        given(phoneNumberValidator.test(meterNumber)).willReturn(false);

        // When
        assertThatThrownBy(() -> underTest.registerNewCustomer(request))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining("Phone Number " + meterNumber + " is not valid");

        // Then
        then(transactionRepository).shouldHaveNoInteractions();
    }



    @Test
    void itShouldThrowWhenPhoneNumberIsTaken() {
        // Given a phone number and a customer
        String phoneNumber = "000099";
        Customer customer = new Customer(UUID.randomUUID(), "Maryam", phoneNumber);
        Customer customerTwo = new Customer(UUID.randomUUID(), "John", phoneNumber);

        // ... a request
        CustomerRegistrationRequest request = new CustomerRegistrationRequest(customer);

        // ... No customer with phone number passed
        given(transactionRepository.selectCustomerByPhoneNumber(phoneNumber))
                .willReturn(Optional.of(customerTwo));

        //... Valid phone number
        given(phoneNumberValidator.test(phoneNumber)).willReturn(true);

        // When
        // Then
        assertThatThrownBy(() -> underTest.registerNewCustomer(request))
                .isInstanceOf(IllegalStateException.class)
                .hasMessageContaining(String.format("phone number [%s] is taken", phoneNumber));

        // Finally
        then(transactionRepository).should(never()).save(any(Customer.class));

    }


}
