package com.example.demo.entity

import jakarta.persistence.*

// Diese Datei definiert die Entität, die in der Datenbank gespeichert wird.

@Entity
@Table(name = "test")
data class Demo(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0,

    @Column(nullable = false)
    val name: String = "",
)
