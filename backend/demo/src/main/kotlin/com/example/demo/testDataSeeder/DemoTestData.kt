package com.example.demo.testDataSeeder
import com.example.demo.entity.Demo
import com.example.demo.repository.DemoRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

// Diese Klasse wird verwendet, um Testdaten in die Datenbank einzufügen, wenn die Anwendung gestartet wird,
// da bei jedem Neustart der Datenbankinhalt gelöscht wird. Das ist natürlich nur für Entwicklungs- und Testzwecke gedacht.

@Component
class DataSeeder(
    private val demoRepository: DemoRepository
) : CommandLineRunner {

    override fun run(vararg args: String?) {
        if (demoRepository.count() == 0L) {
            seedProducts()
        }
    }

    private fun seedProducts() {
        val demos = listOf(
            Demo(
                name = "Das ist ein Test String",
            ),
            Demo(
                name = "Das hier auch",
            ),
        )
        demoRepository.saveAll(demos)
    }
}
