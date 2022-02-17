package com.example.backend.controller;


import com.example.backend.model.MeterAccount;
import com.example.backend.service.MeterService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(path = "api/v1/meter-account")
@AllArgsConstructor

public class MeterAccountController {
    private final MeterService met;



    @GetMapping(path = "{id}")
    public ResponseEntity<MeterAccount> get(
            @PathVariable("id") UUID id) {
        return new ResponseEntity<MeterAccount>(met.get(id),HttpStatus.OK);
    }

    @GetMapping(path = "/check/meter-number/{meterNumber}")
    public ResponseEntity<MeterAccount> checkMeterAccountStatus( @PathVariable("meterNumber") String meterNumber) {
        return new ResponseEntity<>(met.checkStatus(meterNumber),HttpStatus.OK);
    }


}


