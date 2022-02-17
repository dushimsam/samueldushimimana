package com.example.backend.model;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotBlank;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JsonIgnoreProperties(allowGetters = true)
public class Transaction {
    @Id
    private UUID id;

    @NotBlank
    @Column(nullable = false,unique = true)
    private String token;


    @NotBlank
    @Column(nullable = false)
    private String meterNumber;

    @NotBlank
    @Column(nullable = false)
    private float amount;

    @ManyToOne
    private MeterAccount meterAccount;

    @NotBlank
    @Column(nullable = false)
    private boolean  isUsed = false;

    @NotBlank
    @Column(nullable = false)
    private int  days;
}
