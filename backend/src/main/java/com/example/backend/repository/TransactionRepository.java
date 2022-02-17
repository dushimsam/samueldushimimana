package com.example.backend.repository;

import com.example.backend.model.Transaction;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.UUID;

public interface TransactionRepository extends CrudRepository<Transaction, UUID> {

    @Query(
            value = "select id, token " +
                    "from transaction where token = :token",
            nativeQuery = true
    )
    Optional<Transaction> selectTransactionByToken(
            @Param("token") String token);
}
