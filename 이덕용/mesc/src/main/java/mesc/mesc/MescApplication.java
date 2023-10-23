package mesc.mesc;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;
import mesc.mesc.block.domain.Block;
import mesc.mesc.block.repository.BlockRepository;
import mesc.mesc.block.repository.BlockRepositoryImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;

import java.util.Scanner;

@SpringBootApplication
public class MescApplication {
    public static void main(String[] args) {
        SpringApplication.run(MescApplication.class, args);
    }
}
