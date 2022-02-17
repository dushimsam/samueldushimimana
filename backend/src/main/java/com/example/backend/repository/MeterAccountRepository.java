package com.example.backend.repository;

import com.example.backend.model.MeterAccount;
import com.example.backend.model.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface MeterAccountRepository extends CrudRepository<MeterAccount, UUID> {

    @Query(
            value = "select id, meter_number " +
                    "from meter_account where token = :meter_number",
            nativeQuery = true
    )
    Optional<MeterAccount> selectMeterAccountByMeterNumber(
            @Param("meterNumber") String meterNumber);

    public MeterAccount findMeterAccountByMeterNumber(String meterNumber);



}
