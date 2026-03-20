package com.example.demo.endpoints

import com.example.demo.entity.Demo
import com.example.demo.repository.DemoRepository
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

// Hier werden deine REST-Endpunkte definiert

@RestController
@RequestMapping("/api/demo")
class DemoController(
    private val demoRepository: DemoRepository
) {
    @GetMapping
    fun getDemo(): ResponseEntity<List<Demo>> {
        val demos = demoRepository.findAll()
        return ResponseEntity.ok(demos)
    }
}
