package com.example.demo.repository

import com.example.demo.entity.Demo
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface DemoRepository : JpaRepository<Demo, Long> {
    // Hier können benutzerdefinierte Abfrage-Methoden hinzugefügt werden
}
