package com.example.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@JsonIgnoreProperties(allowGetters = true)
public class MeterAccount {
    @Id
    private UUID id;

    @NotBlank
    @Column(nullable = false,unique = true)
    private String meterNumber;

    @OneToMany
    private List<Transaction> transactions = new ArrayList<>();

    @NotBlank
    @Column(nullable = false)
    private int activeDays = 0;
}
